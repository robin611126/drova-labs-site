import { Reveal } from "@/components/ui/Reveal";
import { REEL_POSTER, REEL_SRC } from "@/lib/site";

/* Drop your reel at public/reel/showreel.mp4 (H.264, muted, ~10-30MB max).
   Until it exists, the placeholder label behind the video stays visible. */
export function Showreel() {
  if (!REEL_SRC) return null;
  return (
    <section id="reel" className="px-6 md:px-10">
      <Reveal>
        <div className="relative mx-auto aspect-video w-full max-w-[1400px] overflow-hidden rounded-sm border border-hairline bg-ink-raised">
          <video
            className="relative h-full w-full object-cover"
            src={REEL_SRC}
            poster={REEL_POSTER ?? undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Drova Labs showreel"
          />
          <span className="eyebrow pointer-events-none absolute left-5 top-5">Reel 2026</span>
        </div>
      </Reveal>
    </section>
  );
}
