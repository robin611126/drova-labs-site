import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

/* ---------------------------------------------------------------------------
   Services - bold colour cards in the Drova logo palette (cyan -> violet),
   each with an original black line-art illustration.
--------------------------------------------------------------------------- */

type Service = {
  id: string;
  tag: string;
  title: string;
  body: string;
  cta: string;
  /** Card background - solid brand colour or brand gradient. */
  bg: string;
  Illustration: () => ReactNode;
};

const SERVICES: Service[] = [
  {
    id: "01",
    tag: "Generative",
    title: "AI Visuals",
    body: "Directed, not prompted. Every frame is art-directed, lit and graded. AI is our renderer, never the director.",
    cta: "Start a film",
    bg: "var(--color-brand-cyan)",
    Illustration: ClapperArt,
  },
  {
    id: "02",
    tag: "Performance",
    title: "Social Media",
    body: "Creative built for the feed. Hook in the first second, product in the second, payoff before the thumb moves.",
    cta: "Grow the feed",
    bg: "var(--color-brand-violet)",
    Illustration: PhoneArt,
  },
  {
    id: "03",
    tag: "CGI",
    title: "Product 3D",
    body: "CGI product visuals and animation with studio-grade lighting. No studio, no shipping, no reshoots.",
    cta: "Render my product",
    bg: "var(--color-brand-lilac)",
    Illustration: CubeArt,
  },
  {
    id: "04",
    tag: "Production",
    title: "Photo & Video",
    body: "Real product photography and brand films. When a shot has to be real, we shoot it real.",
    cta: "Book a shoot",
    bg: "linear-gradient(150deg, var(--color-brand-cyan) 0%, var(--color-brand-lilac) 55%, var(--color-brand-violet) 100%)",
    Illustration: CameraArt,
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden px-6 py-20 md:px-10 md:py-40">
      {/* Soft brand glow behind the cards */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[520px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-25 blur-[100px] md:h-[520px] md:w-[900px] md:blur-[120px]"
        style={{ background: "linear-gradient(90deg, var(--color-brand-cyan), var(--color-brand-violet))" }}
      />

      <div className="relative mx-auto max-w-[1400px]">
        <Reveal>
          <p className="eyebrow text-center">What we do</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto mt-4 max-w-[16ch] text-center font-serif text-[clamp(2.25rem,6vw,5rem)] leading-[1.02] tracking-[-0.01em] md:mt-6">
            Four disciplines.{" "}
            <em className="bg-gradient-to-r from-brand-cyan to-brand-violet bg-clip-text italic text-transparent">
              One pipeline.
            </em>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-4 max-w-[36ch] text-center text-[14px] leading-relaxed text-white/55 md:mt-6 md:max-w-[46ch] md:text-[16px]">
            Brief to final cut without handing your brand to four different vendors.
          </p>
        </Reveal>

        {/* Phones: one-row swipe carousel (next card peeks in). Tablet+: grid. */}
        <ul className="-mx-6 mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-6 px-6 pb-3 [scrollbar-width:none] sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 md:mt-20 xl:grid-cols-4 [&::-webkit-scrollbar]:hidden">
          {SERVICES.map((s, i) => (
            <li key={s.id} className="w-[80%] max-w-[320px] shrink-0 snap-start sm:w-auto sm:max-w-none">
              <Reveal delay={i * 90} className="h-full">
                <ServiceCard service={s} />
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="eyebrow mt-4 flex items-center justify-center gap-2 text-white/35 sm:hidden" aria-hidden>
          Swipe
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M1 5h13M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </p>
      </div>
    </section>
  );
}

function ServiceCard({ service: s }: { service: Service }) {
  const { Illustration } = s;
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-[24px] p-5 text-black shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] transition-transform duration-500 ease-out-expo md:rounded-[28px] md:p-7 md:hover:-translate-y-2 md:hover:-rotate-[0.6deg]"
      style={{ background: s.bg }}
    >
      {/* Peeking eyes - pupils glance toward the CTA on hover */}
      <Eyes />

      <span className="font-mono text-[11px] tracking-[0.18em] text-black/50">{s.id}</span>

      <div className="mt-1 flex h-[112px] items-center justify-center md:mt-2 md:h-[170px]">
        <div className="float-slow h-full w-full transition-transform duration-500 ease-out-expo group-hover:scale-[1.06]">
          <Illustration />
        </div>
      </div>

      <span className="mt-4 inline-flex w-fit items-center rounded-full border-[1.5px] border-black px-2.5 py-0.5 text-[11px] font-medium md:mt-6 md:px-3 md:py-1 md:text-[12px]">
        {s.tag}
      </span>

      <h3 className="mt-3 font-serif text-[26px] italic leading-none tracking-[-0.01em] md:mt-4 md:text-[34px]">
        {s.title}
      </h3>

      <p className="mt-2 text-[13.5px] leading-relaxed text-black/75 md:mt-3 md:text-[14.5px]">{s.body}</p>

      <div className="mt-auto pt-5 md:pt-7">
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2.5 rounded-full bg-black py-1 pl-1 pr-4 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-[#151515] md:gap-3 md:py-1.5 md:pl-1.5 md:pr-5 md:text-[14px]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 ease-out-expo group-hover:rotate-[-45deg]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M1 7h11M7.5 2.5 12 7l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          {s.cta}
        </Link>
      </div>
    </article>
  );
}

function Eyes() {
  return (
    <div aria-hidden className="absolute right-4 top-4 flex gap-1 md:right-5 md:top-5">
      {[0, 1].map((k) => (
        <span
          key={k}
          className="relative flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] border-black bg-white md:h-6 md:w-6"
        >
          <span className="h-2 w-2 -translate-x-[2px] rounded-full bg-black transition-transform duration-500 ease-out-expo group-hover:translate-x-[3px] group-hover:translate-y-[3px] md:h-2.5 md:w-2.5 md:-translate-x-[3px]" />
        </span>
      ))}
    </div>
  );
}

/* ----------------------------- illustrations ----------------------------- */
/* Original line art. Black strokes, white fills, so they sit on any card colour. */

const stroke = {
  stroke: "#000",
  strokeWidth: 2.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
const outline = { ...stroke, fill: "none" };

function sparkle(x: number, y: number, r: number) {
  return `M${x} ${y - r} Q${x} ${y} ${x + r} ${y} Q${x} ${y} ${x} ${y + r} Q${x} ${y} ${x - r} ${y} Q${x} ${y} ${x} ${y - r}Z`;
}

function ClapperArt() {
  return (
    <svg viewBox="0 0 200 150" className="h-full w-full" role="img" aria-label="Clapperboard with sparkles">
      {/* board */}
      <rect x="45" y="62" width="110" height="68" rx="8" fill="#fff" {...stroke} />
      {/* clapper arm, raised */}
      <g transform="rotate(-14 45 58)">
        <rect x="45" y="44" width="110" height="18" rx="4" fill="#fff" {...stroke} />
        {[0, 1, 2, 3, 4].map((k) => (
          <path key={k} d={`M${58 + k * 22} 44 L${48 + k * 22} 62`} {...outline} />
        ))}
      </g>
      {/* hinge */}
      <circle cx="47" cy="62" r="4" fill="#000" />
      {/* play glyph on the board */}
      <path d="M90 82 L116 96 L90 110 Z" fill="#000" stroke="#000" strokeWidth={2.6} strokeLinejoin="round" />
      {/* AI sparkles */}
      <path d={sparkle(165, 34, 11)} fill="#fff" {...stroke} />
      <path d={sparkle(30, 42, 7)} fill="#000" stroke="#000" strokeWidth={1.5} />
      <path d={sparkle(172, 104, 6)} fill="#000" stroke="#000" strokeWidth={1.5} />
      <path d="M150 18 l4 -6 M178 52 l7 -2" {...outline} />
    </svg>
  );
}

function PhoneArt() {
  return (
    <svg viewBox="0 0 200 150" className="h-full w-full" role="img" aria-label="Phone with reactions">
      {/* phone */}
      <rect x="72" y="10" width="58" height="128" rx="12" fill="#fff" {...stroke} />
      <rect x="90" y="17" width="22" height="5" rx="2.5" fill="#000" />
      {/* video tile on screen */}
      <rect x="80" y="30" width="42" height="56" rx="6" {...outline} />
      <path d="M95 50 L109 58 L95 66 Z" fill="#000" stroke="#000" strokeWidth={2} strokeLinejoin="round" />
      {/* progress bar */}
      <path d="M80 96 H122" {...outline} />
      <path d="M80 96 H104" stroke="#000" strokeWidth={5} strokeLinecap="round" />
      {/* lines of caption */}
      <path d="M80 108 H114 M80 118 H100" {...outline} />
      {/* heart bubble */}
      <g>
        <path d="M18 40 h40 a8 8 0 0 1 8 8 v20 a8 8 0 0 1 -8 8 h-26 l-10 9 v-9 h-4 a8 8 0 0 1 -8 -8 v-20 a8 8 0 0 1 8 -8z" fill="#fff" {...stroke} />
        <path d="M38 70 C26 62 26 52 32 50 C35 49 38 51 38 54 C38 51 41 49 44 50 C50 52 50 62 38 70Z" fill="#000" />
      </g>
      {/* comment bubble */}
      <g>
        <path d="M146 64 h36 a7 7 0 0 1 7 7 v16 a7 7 0 0 1 -7 7 h-4 v8 l-9 -8 h-23 a7 7 0 0 1 -7 -7 v-16 a7 7 0 0 1 7 -7z" fill="#fff" {...stroke} />
        <circle cx="153" cy="79" r="2.6" fill="#000" />
        <circle cx="164" cy="79" r="2.6" fill="#000" />
        <circle cx="175" cy="79" r="2.6" fill="#000" />
      </g>
      {/* motion ticks */}
      <path d="M150 30 l10 -8 M156 44 l12 -2 M44 112 l-12 6 M54 124 l-6 10" {...outline} />
    </svg>
  );
}

function CubeArt() {
  return (
    <svg viewBox="0 0 200 150" className="h-full w-full" role="img" aria-label="3D product cube with orbit">
      {/* orbit behind */}
      <ellipse cx="100" cy="82" rx="82" ry="24" transform="rotate(-12 100 82)" {...outline} strokeDasharray="2 9" />
      {/* cube */}
      <path d="M100 22 L142 44 L100 66 L58 44 Z" fill="#fff" {...stroke} />
      <path d="M58 44 L100 66 L100 116 L58 94 Z" fill="#fff" {...stroke} />
      <path d="M142 44 L100 66 L100 116 L142 94 Z" fill="#000" stroke="#000" strokeWidth={2.6} strokeLinejoin="round" />
      {/* highlight lines on the dark face */}
      <path d="M110 70 L132 58 M110 80 L126 72" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" />
      {/* label on left face */}
      <path d="M68 62 L90 74 M68 72 L84 81" {...outline} />
      {/* orbit in front */}
      <path d="M22 98 C 40 116, 120 118, 178 84" {...outline} />
      <circle cx="178" cy="84" r="6" fill="#fff" {...stroke} />
      <path d={sparkle(160, 24, 9)} fill="#fff" {...stroke} />
      <path d={sparkle(36, 30, 6)} fill="#000" stroke="#000" strokeWidth={1.5} />
    </svg>
  );
}

function CameraArt() {
  return (
    <svg viewBox="0 0 200 150" className="h-full w-full" role="img" aria-label="Camera with flash">
      {/* top bump + shutter */}
      <rect x="70" y="30" width="44" height="18" rx="5" fill="#fff" {...stroke} />
      <rect x="132" y="36" width="16" height="10" rx="3" fill="#000" />
      {/* body */}
      <rect x="34" y="44" width="132" height="84" rx="14" fill="#fff" {...stroke} />
      <path d="M34 66 H70 M130 66 H166" {...outline} />
      {/* lens */}
      <circle cx="100" cy="88" r="30" fill="#fff" {...stroke} />
      <circle cx="100" cy="88" r="19" fill="#000" />
      <circle cx="92" cy="80" r="5" fill="#fff" />
      <circle cx="108" cy="96" r="2.5" fill="#fff" />
      {/* REC dot */}
      <circle cx="50" cy="56" r="4" fill="#000" />
      {/* flash burst */}
      <path d="M172 22 l8 -10 M182 34 l12 -2 M166 12 l0 -8" {...outline} />
      <path d={sparkle(22, 32, 8)} fill="#fff" {...stroke} />
    </svg>
  );
}

