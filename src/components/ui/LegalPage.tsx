import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";

export function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <Nav />
      <main className="px-6 pt-32 pb-28 md:px-10 md:pt-44">
        <article className="mx-auto max-w-[760px]">
          <p className="eyebrow">Last updated {updated}</p>
          <h1 className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.035em]">
            {title}
          </h1>
          <div
            role="note"
            className="mt-10 rounded-sm border border-accent/40 bg-accent/10 p-5 text-[14px] text-white/75"
          >
            Template text - have this reviewed by a lawyer for your jurisdiction before launch.
          </div>
          <div className="mt-14 flex flex-col gap-12">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-[21px] font-medium tracking-tight">{s.heading}</h2>
                <p className="mt-4 text-[16px] leading-relaxed text-white/65">{s.body}</p>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
