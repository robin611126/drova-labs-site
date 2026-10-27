import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/site";

export function Cta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-hairline px-6 py-28 md:px-10 md:py-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-0 h-[34rem] w-[34rem] -translate-x-1/2 translate-y-1/3 rounded-full opacity-[0.12] blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 68%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Reveal>
            <p className="eyebrow">Next step</p>
          </Reveal>

          <Reveal delay={90}>
            <h2 className="mt-8 text-[clamp(2.5rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.035em]">
              Let&rsquo;s talk.
            </h2>
          </Reveal>

          <Reveal delay={170}>
            <p className="mt-9 max-w-[46ch] text-[15px] leading-relaxed text-white/60 md:text-[17px]">
              Tell us what you are launching and when it needs to be live. We come
              back with a direction, a timeline and a number.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-11 flex flex-col items-start gap-4">
              {BOOKING_URL && (
                <a
                  id="book-call"
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-accent px-7 py-3.5 text-[14px] font-medium text-white transition-colors hover:bg-accent"
                >
                  Book a 20-min intro call ↗
                </a>
              )}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="link-sweep text-[15px] text-white/70 hover:text-white"
              >
                {CONTACT_EMAIL}
              </a>
              <span className="text-[13px] text-white/45">
                Replies within one business day
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
