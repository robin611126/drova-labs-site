import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { CLIENTS, STATS, TESTIMONIALS } from "@/lib/site";

type Client = (typeof CLIENTS)[number];

/**
 * Uniform white card for a client logo. Logos arrive in mixed shapes (wide
 * wordmarks, square badges, some with baked-in white backgrounds), so a fixed
 * card + object-contain keeps them visually even on the dark canvas.
 */
function LogoCard({
  client,
  className = "",
  interactive = false,
}: {
  client: Client;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={`group relative flex items-center justify-center overflow-hidden rounded-2xl bg-white px-6 py-4 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_12px_32px_-12px_rgba(0,0,0,0.8)] ring-1 ring-white/10 ${
        interactive
          ? "transition duration-500 ease-out-expo hover:-translate-y-1 hover:ring-2 hover:ring-accent/60 hover:shadow-[0_20px_50px_-15px_rgba(0,153,255,0.45)]"
          : ""
      } ${className}`}
    >
      <Image
        src={client.logo}
        alt={client.name}
        title={client.name}
        width={client.width}
        height={client.height}
        unoptimized={client.logo.endsWith(".svg")}
        sizes="(min-width: 1024px) 200px, 168px"
        className={`h-full w-full object-contain ${
          interactive ? "transition-transform duration-500 ease-out-expo group-hover:scale-[1.04]" : ""
        }`}
      />
    </div>
  );
}

export function Proof() {
  return (
    <section id="clients" className="border-t border-hairline px-6 py-20 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <p className="eyebrow">Trusted by</p>
            <p className="eyebrow text-white/30">{String(CLIENTS.length).padStart(2, "0")} brands</p>
          </div>
        </Reveal>

        {/* Phones: auto-scrolling logo rail instead of a cramped 2-column grid */}
        <Reveal className="mt-8 md:hidden">
          <div className="marquee -mx-6 overflow-hidden py-3">
            <ul className="marquee__track" style={{ animationDuration: "28s" }}>
              {[...CLIENTS, ...CLIENTS].map((c, i) => (
                <li key={c.name + i} className="pr-3" aria-hidden={i >= CLIENTS.length || undefined}>
                  <LogoCard client={c} className="h-[84px] w-[168px]" />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Tablet / desktop: even grid of uniform cards */}
        <ul className="mt-10 hidden gap-4 md:grid md:grid-cols-3 lg:grid-cols-6">
          {CLIENTS.map((c, i) => (
            <li key={c.name}>
              <Reveal delay={i * 60}>
                <LogoCard client={c} className="aspect-[16/10] w-full" interactive />
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid grid-cols-3 gap-4 md:mt-24 md:gap-10">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="border-t border-hairline pt-5 md:pt-6">
                <p className="text-[clamp(2rem,6vw,5rem)] font-medium leading-none tracking-[-0.04em]">
                  {s.value}
                </p>
                <p className="eyebrow mt-3 text-[0.625rem] leading-relaxed md:mt-4 md:text-[0.6875rem]">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Phones: swipeable testimonial cards. Desktop: 3-column grid. */}
        <div className="-mx-6 mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-2 [scrollbar-width:none] md:mx-0 md:mt-24 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 90} className="w-[85%] shrink-0 snap-start md:w-auto">
              <figure className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-hairline bg-ink-raised/60 p-6 transition-colors duration-500 hover:border-accent/40 md:gap-10 md:p-8">
                <blockquote className="text-[16px] leading-relaxed text-white/80 md:text-[17px]">
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
