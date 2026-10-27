import { Reveal } from "@/components/ui/Reveal";
import { FAQS } from "@/lib/site";

/* Uses native <details> so it works without JavaScript and is accessible. */
export function Faq() {
  return (
    <section id="faq" className="border-t border-hairline px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <p className="eyebrow">FAQ</p>
        </Reveal>
        <div className="border-t border-hairline">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="faq group border-b border-hairline">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 text-[18px] tracking-tight text-white/85 transition-colors hover:text-white md:text-[21px]">
                  {f.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline text-accent transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-[62ch] pb-8 text-[15px] leading-relaxed text-white/60 md:text-[16px]">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
