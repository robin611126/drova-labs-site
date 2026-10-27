import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Drova Labs collects, uses and protects your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="October 2026"
      sections={[
        {
          heading: "What we collect",
          body: "When you submit our contact form we collect your name, email, company, budget range, timeline and project brief. We also collect anonymous, cookie-free usage statistics through Vercel Analytics, such as page views, referrer and country.",
        },
        {
          heading: "How we use it",
          body: "We use contact details only to respond to your enquiry and to deliver any project you engage us for. We do not sell your data or use it for third-party advertising.",
        },
        {
          heading: "Processors",
          body: "Form submissions are delivered by email through Resend. The site is hosted on Vercel. These providers process data on our behalf under their own security and privacy commitments.",
        },
        {
          heading: "Retention",
          body: "We keep enquiry emails for as long as needed to handle your request and any resulting engagement, then delete them.",
        },
        {
          heading: "Your rights",
          body: `You can ask us to access, correct or delete your personal data at any time by emailing ${CONTACT_EMAIL}.`,
        },
      ]}
    />
  );
}
