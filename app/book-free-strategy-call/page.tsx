import type { Metadata } from "next";
import { StrategyCallPageContent } from "@/components/ui/strategy-call-page-content";

export const metadata: Metadata = {
  title: "Book a Free Strategy Call",
  description:
    "Book a complimentary 30-minute strategy call with the Sterlixit team. Share your goals and leave with a practical, milestone-based action plan.",
  alternates: { canonical: "/book-free-strategy-call" },
  openGraph: {
    title: "Book a Free Strategy Call | Sterlixit",
    description:
      "Book a complimentary 30-minute strategy call with the Sterlixit team. Share your goals and leave with a practical, milestone-based action plan.",
    url: "https://sterlixit.com/book-free-strategy-call",
  },
};

export default function BookFreeStrategyCallPage() {
  return <StrategyCallPageContent />;
}
