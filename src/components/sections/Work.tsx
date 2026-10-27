import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { WORK, type Project } from "@/lib/site";

/* Projects live in src/lib/site.ts. Each entry links to /work/[slug]. */
export function Work() {
  return (
    <section id="work" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <p className="eyebrow">Selected work</p>
            <p className="max-w-[40ch] text-[15px] leading-relaxed text-white/55">
              Campaigns, product films and cutdowns we have shipped.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 md:mt-24 md:grid-cols-2 lg:gap-x-8">
          {WORK.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 2) * 110}>
              <Link href={`/work/${project.slug}`} className="group block">
                <ProjectTile project={project} index={index} />
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="text-[17px] tracking-tight text-white/85 transition-colors duration-500 group-hover:text-white">
                    {project.title}
                  </h3>
                  <span className="eyebrow shrink-0">{project.category}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectTile({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-hairline transition-colors duration-500 group-hover:border-accent/45"
      style={{ backgroundImage: project.tone }}
    >
      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
        />
      )}
      <span className="eyebrow absolute left-5 top-5">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span
        aria-hidden
        className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-[13px] text-white/70 transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-white"
      >
        ↗
      </span>
    </div>
  );
}
