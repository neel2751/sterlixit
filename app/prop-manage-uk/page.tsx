import type { Metadata } from "next";
import { Suspense } from "react";
import { PropManageEarlyAccess } from "./early-access-client";

export const metadata: Metadata = {
  title: "Prop Manage UK | Early Access",
  description:
    "Welcome to the future of property management. No endless paperwork. No digital clutter. No unnecessary complexity. Request early access to Prop Manage UK.",
  alternates: { canonical: "/prop-manage-uk" },
  // Campaign / QR landing page — kept out of the search index.
  robots: { index: false, follow: false },
};

export default function PropManageUkPage() {
  return (
    // useSearchParams() requires a Suspense boundary in the app router.
    <Suspense fallback={null}>
      <PropManageEarlyAccess />
    </Suspense>
  );
}
