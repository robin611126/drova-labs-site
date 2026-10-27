import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the Drova Labs website and services.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="October 2026"
      sections={[
        {
          heading: "Use of this site",
          body: "The content on this website is provided for general information about Drova Labs and its services. You may not copy or redistribute our work samples without written permission.",
        },
        {
          heading: "Projects",
          body: "Every client engagement is governed by a separate written proposal or agreement covering scope, fees, timelines, revisions and usage rights. Those terms take precedence over this page.",
        },
        {
          heading: "Intellectual property",
          body: "Unless agreed otherwise in writing, all work shown on this site remains the property of Drova Labs or the respective client.",
        },
        {
          heading: "AI-generated content",
          body: "Our work may combine human direction with generative AI tools. We take reasonable care to avoid infringing third-party rights; specific warranties are defined per project agreement.",
        },
        {
          heading: "Liability",
          body: "This site is provided as is. To the extent permitted by law, Drova Labs is not liable for any loss arising from use of the site.",
        },
        {
          heading: "Contact",
          body: `Questions about these terms: ${CONTACT_EMAIL}.`,
        },
      ]}
    />
  );
}
