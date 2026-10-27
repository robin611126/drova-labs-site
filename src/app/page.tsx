import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Showreel } from "@/components/sections/Showreel";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Proof } from "@/components/sections/Proof";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/sections/Footer";
import { CONTACT_EMAIL, FAQS, SITE_NAME, SITE_URL, SOCIALS } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      email: CONTACT_EMAIL,
      description:
        "AI-first creative studio building cinematic ad films, product visuals and campaign work.",
      sameAs: SOCIALS.map((s) => s.href).filter((h) => h.startsWith("http")),
    },
    {
      "@type": "ProfessionalService",
      name: SITE_NAME,
      url: SITE_URL,
      parentOrganization: { "@id": `${SITE_URL}/#org` },
      serviceType: ["AI video production", "Product CGI", "Performance creative"],
      areaServed: "Worldwide",
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Nav />
      <main>
        <Hero />
        <Showreel />
        <Marquee />
        <Services />
        <Work />
        <Proof />
        <Process />
        <Pricing />
        <About />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
