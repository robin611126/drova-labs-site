import Link from "next/link";
import { CONTACT_EMAIL, NAV_ITEMS, SOCIALS } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo className="h-14 w-auto" />
          <p className="mt-4 max-w-[30ch] text-[13px] leading-relaxed text-white/45">
            An AI-first creative studio building ad films, product visuals and
            campaign work.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="link-sweep text-[13px] text-white/60 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Social">
          <ul className="flex flex-col gap-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-sweep text-[13px] text-white/60 transition-colors hover:text-white"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="link-sweep text-[13px] text-white/60 transition-colors hover:text-white"
          >
            {CONTACT_EMAIL}
          </a>
          <div className="flex gap-4">
            <Link href="/privacy" className="link-sweep text-[13px] text-white/45 hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="link-sweep text-[13px] text-white/45 hover:text-white">
              Terms
            </Link>
          </div>
          <p className="text-[13px] text-white/35">
            © {year} Drova Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
