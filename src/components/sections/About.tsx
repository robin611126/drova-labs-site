import Image from "next/image";
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

        {/* Phones: swipeable founder cards. Tablet/desktop: 3-column grid. */}
        <ul className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:self-end [&::-webkit-scrollbar]:hidden">
          {TEAM.map((m, i) => {
            const initials = m.name.slice(0, 2).toUpperCase();
            return (
              <li key={m.name} className="w-[72%] max-w-[260px] shrink-0 snap-start sm:w-auto sm:max-w-none">
                <Reveal delay={i * 90}>
                  <div className="group">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-hairline bg-gradient-to-br from-ink-raised via-[#171717] to-ink-sunken transition-all duration-500 group-hover:border-accent/50 group-hover:shadow-[0_20px_50px_-20px_rgba(0,153,255,0.35)]">
                      {m.image ? (
                        <Image
                          src={m.image}
                          alt={m.name}
                          fill
                          sizes="(min-width: 640px) 33vw, 260px"
                          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-between p-5 md:p-6">
                          <span className="eyebrow self-start text-white/30">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-hairline bg-white/5 font-mono text-lg font-medium tracking-tight text-white/70 transition-all duration-500 group-hover:border-accent group-hover:bg-accent/10 group-hover:text-accent md:h-16 md:w-16 md:text-xl">
                            {initials}
                          </div>
                          <span className="eyebrow self-end text-white/30">Founder</span>
                        </div>
                      )}
                    </div>
                    <p className="mt-4 text-[16px] font-medium tracking-tight text-white">{m.name}</p>
                    <p className="eyebrow mt-1 text-white/50">{m.role}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
