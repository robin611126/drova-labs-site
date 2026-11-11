import { Reveal } from "@/components/ui/Reveal";
import { REEL_POSTER, REEL_SRC, REEL_VIMEO_ID } from "@/lib/site";

export function Showreel() {
  if (!REEL_SRC && !REEL_VIMEO_ID) return null;
  return (
    <section id="reel" className="px-6 md:px-10">
      <Reveal>
        <div className="relative mx-auto aspect-video w-full max-w-[1400px] overflow-hidden rounded-sm border border-hairline bg-ink-raised">
          {REEL_VIMEO_ID ? (
            <iframe
              src={`https://player.vimeo.com/video/${REEL_VIMEO_ID}?autoplay=1&loop=1&autopause=0&muted=1&background=1&playsinline=1`}
              title="Drova Labs showreel"
              allow="autoplay; fullscreen; picture-in-picture"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <video
              className="relative h-full w-full object-cover"
              src={REEL_SRC!}
              poster={REEL_POSTER ?? undefined}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Drova Labs showreel"
            />
          )}
          <span className="eyebrow pointer-events-none absolute left-5 top-5">Reel 2026</span>
        </div>
      </Reveal>
    </section>
  );
}
