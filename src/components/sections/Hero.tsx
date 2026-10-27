import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-between overflow-hidden px-6 pt-32 pb-12 md:px-10 md:pt-40"
    >
      {/* Soft accent bloom behind the headline — the only place colour bleeds */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full opacity-[0.14] blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 68%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1400px]">
        <Reveal>
          <p className="eyebrow">AI Creative Studio</p>
        </Reveal>

        <h1 className="mt-8 max-w-[16ch] text-[clamp(2.75rem,8.2vw,7.25rem)] font-medium leading-[0.94] tracking-[-0.035em]">
          <Reveal delay={80}>
            <span className="block">Ads that look</span>
          </Reveal>
          <Reveal delay={160}>
            <span className="block">
              expensive.{" "}
              <span className="text-muted">Made at the</span>
            </span>
          </Reveal>
          <Reveal delay={240}>
            <span className="block">
              speed of <span className="text-accent">AI.</span>
            </span>
          </Reveal>
        </h1>

        <Reveal delay={360}>
          <p className="mt-10 max-w-[52ch] text-[15px] leading-relaxed text-white/60 md:text-[17px]">
            Drova Labs is an AI-first creative studio. We direct cinematic
            visuals, product films and performance creative for brands that need
            volume — without looking cheap.
          </p>
        </Reveal>

        <Reveal delay={440}>
          <div className="mt-11 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-accent px-7 py-3.5 text-[14px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="rounded-full border border-hairline px-7 py-3.5 text-[14px] transition-colors hover:border-white/30"
            >
              See the work
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={560}>
        <div className="relative mx-auto mt-20 flex w-full max-w-[1400px] flex-wrap items-end justify-between gap-6 border-t border-hairline pt-6">
          <p className="eyebrow">Working with brands worldwide</p>
          <p className="eyebrow">
            <span className="text-accent">●</span> Booking next quarter
          </p>
        </div>
      </Reveal>
    </section>
  );
}
