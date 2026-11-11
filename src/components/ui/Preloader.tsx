"use client";

import { useEffect, useState } from "react";

/**
 * Initial brand preloader.
 * Slices `public/logo.png` (687x278) into its exact anatomical layers using
 * CSS clip-paths so they can be choreographed independently before locking
 * into the full Drova Labs lockup:
 *   - Left cyan chevron `<`:   x 38.4% .. 49.5%, y 0% .. 74%
 *   - Right violet chevron `>`:x 49.5% .. 60.6%, y 0% .. 74%
 *   - Left letters `dr`:       x 0% .. 38.4%,    y 0% .. 74%
 *   - Right letters `va`:      x 60.6% .. 100%,  y 0% .. 74%
 *   - Bottom subtitle `LABS`:  x 0% .. 100%,     y 74% .. 100%
 */
export function Preloader() {
  const [stage, setStage] = useState<"enter" | "expand" | "exit" | "done">("enter");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Respect reduced motion immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStage("done");
      return;
    }

    document.body.style.overflow = "hidden";

    // Smooth numeric counter 00 -> 100
    const start = performance.now();
    const duration = 1550;
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - t, 4);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);

    // Stage 1 -> Stage 2: Chevrons snap open and reveal "dr" + "va" + "LABS"
    const tExpand = window.setTimeout(() => setStage("expand"), 420);
    // Stage 2 -> Stage 3: Curtain lifts up
    const tExit = window.setTimeout(() => {
      setStage("exit");
      document.body.style.overflow = "";
    }, 1750);
    // Stage 3 -> Stage 4: Unmount from DOM
    const tDone = window.setTimeout(() => setStage("done"), 2550);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(tExpand);
      clearTimeout(tExit);
      clearTimeout(tDone);
      document.body.style.overflow = "";
    };
  }, []);

  if (stage === "done") return null;

  const isExpanded = stage === "expand" || stage === "exit";
  const isExiting = stage === "exit";

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-between bg-ink px-6 py-10 transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] select-none ${isExiting ? "-translate-y-full pointer-events-none" : "translate-y-0"
        }`}
    >
      {/* Ambient cyan-violet brand bloom behind the logo */}
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] transition-all duration-1000 ${isExpanded ? "scale-110 opacity-30" : "scale-75 opacity-15"
          }`}
        style={{
          background:
            "linear-gradient(90deg, var(--color-brand-cyan) 0%, var(--color-brand-violet) 100%)",
        }}
      />

      {/* Top subtle studio bar */}
      <div className="relative flex w-full max-w-[1400px] items-center justify-between">
        <span className="eyebrow text-white/40">Drova Labs</span>
        <span className="eyebrow text-white/40">AI Creative Studio</span>
      </div>

      {/* Center choreographed logo lockup */}
      <div className="relative flex flex-col items-center">
        <div
          className={`relative aspect-[687/278] w-[250px] sm:w-[320px] md:w-[380px] transition-transform duration-700 ease-out-expo ${isExiting ? "scale-95 opacity-0 transition-opacity" : "scale-100 opacity-100"
            }`}
        >
          {/* 1. Left letters: "dr" */}
          <img
            src="/logo.png"
            alt=""
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-contain transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              clipPath: "inset(0% 61.5% 26% 0%)",
              opacity: isExpanded ? 1 : 0,
              transform: isExpanded ? "translateX(0%)" : "translateX(12%)",
            }}
          />

          {/* 2. Left cyan chevron `<` */}
          <img
            src="/logo.png"
            alt=""
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-contain transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              clipPath: "inset(22.5% 51% 27% 39.2%)",
              transform: isExpanded
                ? "translateX(0%) scale(1)"
                : "translateX(12%) scale(1.22)",
            }}
          />

          {/* 3. Right violet chevron `>` */}
          <img
            src="/logo.png"
            alt=""
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-contain transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              clipPath: "inset(22.5% 40.2% 27% 50.5%)",
              transform: isExpanded
                ? "translateX(0%) scale(1)"
                : "translateX(-12%) scale(1.22)",
            }}
          />

          {/* 4. Right letters: "va" */}
          <img
            src="/logo.png"
            alt=""
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-contain transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              clipPath: "inset(0% 0% 26% 60.5%)",
              opacity: isExpanded ? 1 : 0,
              transform: isExpanded ? "translateX(0%)" : "translateX(-12%)",
            }}
          />

          {/* 5. Bottom subtitle: "L A B S" */}
          <img
            src="/logo.png"
            alt=""
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-contain transition-all duration-[700ms] delay-150 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              clipPath: "inset(74% 0% 0% 0%)",
              opacity: isExpanded ? 1 : 0,
              transform: isExpanded ? "translateY(0%)" : "translateY(10%)",
            }}
          />
        </div>

        {/* Sleek gradient progress bar under the logo */}
        <div className="mt-8 h-[2px] w-44 overflow-hidden rounded-full bg-white/10 sm:w-56">
          <div
            className="h-full rounded-full transition-[width] duration-75 ease-out"
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(90deg, var(--color-brand-cyan) 0%, var(--color-brand-violet) 100%)",
            }}
          />
        </div>
      </div>

      {/* Bottom status & numeric counter */}
      <div className="relative flex w-full max-w-[1400px] items-end justify-between">
        <span className="eyebrow text-white/35">
          {progress < 100 ? "Initializing pipeline" : "Ready"}
        </span>
        <span className="font-mono text-[13px] tracking-[0.16em] text-white/60 tabular-nums">
          {String(progress).padStart(3, "0")}%
        </span>
      </div>
    </div>
  );
}