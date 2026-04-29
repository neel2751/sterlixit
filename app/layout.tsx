import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { publicIntegrationConfig } from "@/lib/integrations";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const siteUrl = "https://sterlixit.com";
const defaultTitle = "Sterlixit | Fintech-Grade Digital Growth Engine";
const defaultDescription =
  "Sterlixit helps brands scale with strategy-first branding, web development, SaaS product engineering, and conversion-focused digital marketing.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Sterlixit",
  },
  description: defaultDescription,
  applicationName: "Sterlixit",
  generator: "Sterlixit",
  creator: "Sterlixit",
  publisher: "Sterlixit",
  referrer: "origin-when-cross-origin",
  category: "technology",
  authors: [{ name: "Sterlixit", url: siteUrl }],
  keywords: [
    "digital growth agency",
    "branding services",
    "web design and development",
    "SaaS product development",
    "conversion optimisation",
    "performance marketing",
    "SEO agency",
    "fintech digital agency",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Sterlixit",
    title: defaultTitle,
    description: defaultDescription,
    locale: "en_GB",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Sterlixit digital growth engine preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sterlixit",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/placeholder.jpg"],
    creator: "@sterlixit",
  },
  icons: {
    icon: [{ url: "/sterlixit.svg", type: "image/svg+xml" }],
    apple: [{ url: "/sterlixit.svg" }],
    shortcut: ["/sterlixit.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const shouldEnableVercelAnalytics =
    process.env.NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS === "true" ||
    process.env.VERCEL === "1";

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sterlixit",
    url: siteUrl,
    logo: `${siteUrl}/sterlixit.svg`,
    sameAs: [
      "https://www.linkedin.com/company/sterlixit",
      "https://www.instagram.com/sterlixit",
      "https://x.com/sterlixit",
      "https://www.youtube.com/@sterlixit",
      "https://www.facebook.com/sterlixit",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "sales@sterlixit.com",
      telephone: "020-8004-3327",
      availableLanguage: ["en"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sterlixit",
    url: siteUrl,
    inLanguage: "en-GB",
    description: defaultDescription,
    publisher: {
      "@type": "Organization",
      name: "Sterlixit",
      url: siteUrl,
    },
  };

  return (
    <html lang="en-GB">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(orgSchema)}
        </Script>
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(websiteSchema)}
        </Script>

        {process.env.NEXT_PUBLIC_GTM_ID ? (
          <Script id="gtm-loader" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `}
          </Script>
        ) : null}

        {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ? (
          <Script id="fb-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
              (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        ) : null}

        {publicIntegrationConfig.liveChatProvider === "tawk" &&
        publicIntegrationConfig.tawkPropertyId ? (
          <Script id="tawk-loader" strategy="afterInteractive">
            {`
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/${publicIntegrationConfig.tawkPropertyId}/${publicIntegrationConfig.tawkWidgetId || "default"}';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `}
          </Script>
        ) : null}

        {publicIntegrationConfig.liveChatProvider === "chatwoot" &&
        publicIntegrationConfig.chatwootWebsiteToken ? (
          <Script id="chatwoot-loader" strategy="afterInteractive">
            {`
              (function(d,t) {
                var BASE_URL="${publicIntegrationConfig.chatwootBaseUrl}";
                var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                g.src=BASE_URL + "/packs/js/sdk.js";
                g.async = true;
                g.defer = true;
                s.parentNode.insertBefore(g,s);
                g.onload=function(){
                  window.chatwootSDK.run({
                    websiteToken: "${publicIntegrationConfig.chatwootWebsiteToken}",
                    baseUrl: BASE_URL
                  });
                }
              })(document,"script");
            `}
          </Script>
        ) : null}

        {publicIntegrationConfig.liveChatProvider === "custom" &&
        publicIntegrationConfig.liveChatScriptUrl ? (
          <Script
            id="live-chat-script"
            src={publicIntegrationConfig.liveChatScriptUrl}
            strategy="afterInteractive"
          />
        ) : null}

        {children}
        {shouldEnableVercelAnalytics ? <Analytics /> : null}
      </body>
    </html>
  );
}
