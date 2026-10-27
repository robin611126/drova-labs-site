const CAPABILITIES = [
  "AI Film",
  "Product CGI",
  "Performance Creative",
  "Brand Film",
  "3D Animation",
  "Ad Commercials",
  "Social Cutdowns",
  "Motion Design",
] as const;

/**
 * Infinite capability strip. The list renders twice so the -50% translate
 * loops seamlessly; the second copy is hidden from assistive tech.
 */
export function Marquee() {
  return (
    <section className="marquee overflow-hidden border-y border-hairline py-7">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center"
          >
            {CAPABILITIES.map((item) => (
              <li
                key={item}
                className="flex items-center gap-10 whitespace-nowrap px-10 text-[13px] tracking-tight text-white/45"
              >
                <span>{item}</span>
                <span className="text-accent/50">/</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
