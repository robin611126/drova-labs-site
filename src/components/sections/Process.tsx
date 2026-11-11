import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    id: "01",
    title: "Brief",
    body: "You tell us the product, the audience and the deadline. We tell you what is actually achievable in that window.",
  },
  {
    id: "02",
    title: "Direction",
    body: "Boards, references and a locked visual language — approved before a single frame is rendered.",
  },
  {
    id: "03",
    title: "Production",
    body: "Generation, art direction, motion and sound. You review at each gate, not at the end.",
  },
  {
    id: "04",
    title: "Delivery",
    body: "Every aspect ratio, every platform, every cutdown — master files and a versioning system that stays sane.",
  },
] as const;

export function Process() {
  return (
    <section id="process" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <p className="eyebrow">How it runs</p>
            <p className="max-w-[40ch] text-[15px] leading-relaxed text-white/55">
              Four gates. Nothing moves forward until the previous one is
              signed off.
            </p>
          </div>
        </Reveal>

        <ol className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:mt-24 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal
              key={step.id}
              delay={index * 90}
              className="h-full"
            >
              <li className="group flex h-full flex-col gap-4 bg-ink p-5 transition-colors duration-500 hover:bg-ink-raised md:gap-6 md:p-10">
                <span className="eyebrow transition-colors duration-500 group-hover:text-accent">
                  {step.id}
                </span>
                <h3 className="text-[18px] font-medium tracking-tight md:text-[22px]">
                  {step.title}
                </h3>
                <p className="mt-auto text-[13px] leading-relaxed text-white/55 md:text-[14px]">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
