import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const acceptHeader = request.headers.get("accept");
  const url = request.nextUrl.clone();

  // If the AI agent requests markdown
  if (acceptHeader?.includes("text/markdown")) {
    // This points to /public/ai-summary.md
    return NextResponse.rewrite(new URL("/ai-summary.md", request.url));
  }

  // 2. Add discovery Headers for the Home page
  if (url.pathname === "/") {
    const response = NextResponse.next();

    const links = [
      '</ai-summary.md>; rel="alternate"; type="text/markdown"',
      '</contact>; rel="service-doc"',
      '</sitemap.xml>; rel="sitemap"',
    ];

    response.headers.set("Link", links.join(", "));

    return response;
  }

  return NextResponse.next();
}

// Optimization: Only run middleware on page routes, not on images/scripts
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
