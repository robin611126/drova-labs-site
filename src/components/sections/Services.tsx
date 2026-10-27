import { Reveal } from "@/components/ui/Reveal";

const SERVICES = [
  {
    id: "01",
    title: "AI Visuals",
    body: "Directed, not prompted. Every frame is art-directed, lit and graded. AI is our renderer — never the director.",
  },
  {
    id: "02",
    title: "Social Media",
    body: "Creative built for the feed. Hook in the first second, product in the second, payoff before the thumb moves.",
  },
  {
    id: "03",
    title: "Product 3D",
    body: "CGI product visuals and animation with studio-grade lighting. No studio, no shipping, no reshoots.",
  },
  {
    id: "04",
    title: "Photography & Videography",
    body: "Real product photography and brand films. When a shot has to be real, we shoot it real.",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <p className="eyebrow">What we do</p>
            <p className="max-w-[38ch] text-[15px] leading-relaxed text-white/55">
              Four disciplines, one pipeline. Brief to final cut without handing
              your brand to four different vendors.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-24">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 90}>
              <article className="group grid grid-cols-1 gap-5 border-t border-hairline py-9 transition-colors duration-500 hover:border-accent/40 md:grid-cols-12 md:gap-10 md:py-12">
                <span className="eyebrow col-span-1 transition-colors duration-500 group-hover:text-accent">
                  {service.id}
                </span>

                <h3 className="col-span-5 text-[clamp(1.6rem,3.4vw,2.6rem)] font-medium leading-[1.06] tracking-[-0.03em] transition-transform duration-500 md:group-hover:translate-x-2">
                  {service.title}
                </h3>

                <p className="col-span-6 max-w-[46ch] text-[15px] leading-relaxed text-white/55 md:col-start-7">
                  {service.body}
                </p>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-hairline" />
        </div>
      </div>
    </section>
  );
}
