import { Reveal } from "@/components/ui/Reveal";
import { ABOUT_TEXT, TEAM } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="border-t border-hairline px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Reveal>
            <p className="eyebrow">Studio</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-8 max-w-[14ch] text-[clamp(2.25rem,5vw,4.25rem)] font-medium leading-[0.98] tracking-[-0.035em]">
              Directed by humans. <span className="text-muted">Rendered by machines.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-[48ch] text-[15px] leading-relaxed text-white/60 md:text-[17px]">
              {ABOUT_TEXT}
            </p>
          </Reveal>
        </div>

        <ul className="grid gap-6 sm:grid-cols-3 lg:self-end">
          {TEAM.map((m, i) => (
            <Reveal key={i} delay={i * 90}>
              <li className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-hairline bg-gradient-to-br from-ink-raised to-ink-sunken transition-colors duration-500 group-hover:border-accent/45">
                  <span className="eyebrow absolute inset-0 flex items-center justify-center">Photo</span>
                </div>
                <p className="mt-4 text-[15px] font-medium">{m.name}</p>
                <p className="eyebrow mt-1">{m.role}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
