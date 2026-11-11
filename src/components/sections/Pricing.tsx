import { Reveal } from "@/components/ui/Reveal";
import { PACKAGES } from "@/lib/site";

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-hairline px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <p className="eyebrow">Engagements</p>
            <p className="max-w-[40ch] text-[15px] leading-relaxed text-white/55">
              Clear starting points. Every project gets a fixed quote before we begin.
            </p>
          </div>
        </Reveal>

          {/* Phones: swipeable package cards. Desktop: 3-column grid. */}
          <div className="-mx-6 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-2 [scrollbar-width:none] md:mx-0 md:mt-24 md:gap-6 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {PACKAGES.map((p, i) => (
                <Reveal
                  key={p.name}
                  delay={i * 100}
                  className="w-[84%] max-w-[340px] shrink-0 snap-start lg:w-auto lg:max-w-none"
                >
                  <div
                          ? "border-accent/60 bg-gradient-to-b from-accent/10 to-transparent"
                          : "border-hairline bg-ink-raised/40 hover:border-white/25"
                        }`}
              >
                {p.featured && (
                  <span className="eyebrow absolute right-6 top-6 text-accent">Most chosen</span>
                )}
                <p className="eyebrow">{p.name}</p>
                <p className="mt-6 text-[clamp(2.25rem,4vw,3rem)] font-medium tracking-[-0.03em]">
                  {p.price}
                </p>
                <p className="mt-2 text-[15px] text-white/55">{p.blurb}</p>
                <ul className="mt-8 mb-10 flex flex-col gap-3 border-t border-hairline pt-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-[14px] text-white/75">
                      <span className="text-accent">+</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-auto rounded-full px-6 py-3 text-center text-[14px] font-medium transition-colors ${
                    p.featured
                      ? "bg-accent text-white hover:bg-accent/85"
                      : "border border-hairline hover:border-accent hover:text-accent"
                  }`}
                >
                  Get a quote
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
