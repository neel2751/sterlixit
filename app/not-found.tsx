import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiteContainer } from "@/components/site-shell";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <SiteContainer>
        <div className="mx-auto max-w-xl space-y-4 text-center">
          <h1 className="text-5xl font-semibold">404</h1>
          <p className="text-muted-foreground">
            The page you are looking for does not exist.
          </p>
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </SiteContainer>
    </main>
  );
}
