import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { WORK, SITE_NAME, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return WORK.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = WORK.find((p) => p.slug === slug);
  if (!project) return {};
  const ogTitle = `${project.title} — ${SITE_NAME}`;
  const url = `${SITE_URL}/work/${project.slug}`;
  return {
    title: project.title,
    description: `${project.summary} ${project.category} by ${SITE_NAME}.`,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title: ogTitle,
      description: project.summary,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: project.summary,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = WORK.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = WORK[index];
  const next = WORK[(index + 1) % WORK.length];

  const sections = [
    ["The brief", project.challenge],
    ["Our approach", project.approach],
    ["The outcome", project.outcome],
  ] as const;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/#work` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${SITE_URL}/work/${project.slug}` },
    ],
  };
  const creativeWorkLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    creator: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    genre: project.category,
    dateCreated: project.year,
    description: project.summary,
    url: `${SITE_URL}/work/${project.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkLd).replace(/</g, "\\u003c") }} />
      <Nav />
      <main className="px-6 pt-32 pb-28 md:px-10 md:pt-44">
        <article className="mx-auto max-w-[1400px]">
          <Reveal>
            <Link href="/#work" className="eyebrow link-sweep hover:text-white">
              ← All work
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 max-w-[18ch] text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.95] tracking-[-0.035em]">
              {project.title}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-hairline pt-6 md:grid-cols-4">
              {[
                ["Client", project.client],
                ["Category", project.category],
                ["Year", project.year],
                ["Summary", project.summary],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="eyebrow">{k}</dt>
                  <dd className="mt-2 text-[15px] text-white/80">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={240}>
            <div
              className="relative mt-14 aspect-[16/9] w-full overflow-hidden rounded-sm border border-hairline"
              style={{ backgroundImage: project.tone }}
            >
              {project.image ? (
                <Image src={project.image} alt={project.title} fill priority sizes="100vw" className="object-cover" />
              ) : (
                <span className="eyebrow absolute inset-0 flex items-center justify-center">
                  Hero image / video goes here
                </span>
              )}
            </div>
          </Reveal>

          <div className="mt-24 grid gap-16 md:mt-32">
            {sections.map(([heading, body]) => (
              <Reveal key={heading}>
                <section className="grid gap-6 border-t border-hairline pt-8 md:grid-cols-[1fr_2fr]">
                  <h2 className="eyebrow">{heading}</h2>
                  <p className="max-w-[60ch] text-[17px] leading-relaxed text-white/70 md:text-[19px]">
                    {body}
                  </p>
                </section>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Link
              href={`/work/${next.slug}`}
              className="group mt-32 flex items-end justify-between gap-6 border-t border-hairline pt-10"
            >
              <div>
                <p className="eyebrow">Next project</p>
                <p className="mt-4 text-[clamp(2rem,5vw,4rem)] font-medium tracking-[-0.03em] transition-colors group-hover:text-accent">
                  {next.title}
                </p>
              </div>
              <span className="text-[32px] transition-transform duration-500 group-hover:translate-x-2">→</span>
            </Link>
          </Reveal>
        </article>
      </main>
      <Footer />
    </>
  );
}
