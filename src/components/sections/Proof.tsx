import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { CLIENTS, STATS, TESTIMONIALS } from "@/lib/site";

export function Proof() {
  return (
    <section id="clients" className="border-t border-hairline px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="eyebrow">Trusted by</p>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 border-l border-t border-hairline sm:grid-cols-3 lg:grid-cols-6">
                {CLIENTS.map((c, i) => (
                  <Reveal key={c.name} delay={i * 50}>
                    <li className="group flex h-36 items-center justify-center border-b border-r border-hairline p-5">
                      {/* Light tile so logos with white backgrounds sit consistently on the dark theme */}
                      <div className="flex h-full w-full items-center justify-center rounded-sm bg-white/90 p-4 opacity-70 grayscale transition duration-500 group-hover:bg-white group-hover:opacity-100 group-hover:grayscale-0">
                        <Image
                          src={c.logo}
                          alt={c.name}
                          title={c.name}
                          width={c.width}
                          height={c.height}
                          unoptimized={c.logo.endsWith(".svg")}
                          sizes="200px"
                          className="max-h-full w-auto max-w-full object-contain"
                        />
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>

              <div className="mt-24 grid gap-10 md:grid-cols-3">
                {STATS.map((s, i) => (
                  <Reveal key={s.label} delay={i * 90}>
                    <div className="border-t border-hairline pt-6">
                      <p className="text-[clamp(3rem,6vw,5rem)] font-medium leading-none tracking-[-0.04em]">
                        {s.value}
                      </p>
                      <p className="eyebrow mt-4">{s.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-24 grid gap-6 md:grid-cols-3">
                {TESTIMONIALS.map((t, i) => (
                  <Reveal key={i} delay={i * 90}>
                    <figure className="flex h-full flex-col justify-between gap-10 rounded-sm border border-hairline bg-ink-raised/60 p-8 transition-colors duration-500 hover:border-accent/40">
                      <blockquote className="text-[17px] leading-relaxed text-white/80">
                        <span className="text-accent">“</span>
                        {t.quote}
                        <span className="text-accent">”</span>
                      </blockquote>
                      <figcaption>
                        <p className="text-[14px] font-medium">{t.name}</p>
                        <p className="eyebrow mt-1">{t.role}</p>
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
    </section>
        );
}
