"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll and allow Escape to close while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-hairline bg-ink/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-10">
        <a href="/#top" aria-label="Drova Labs home" className="transition-opacity hover:opacity-75" onClick={() => setOpen(false)}>
          <Logo wordmarkOnly className="h-6 w-auto md:h-7" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-sweep text-[13px] text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="group relative hidden overflow-hidden rounded-full border border-hairline px-5 py-2 text-[13px] transition-colors hover:border-accent sm:inline-block"
          >
            <span className="relative z-10 transition-colors group-hover:text-accent">
              Start a project
            </span>
          </a>

          <button
            id="nav-menu-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-hairline lg:hidden"
          >
            <span
              className={`absolute h-px w-4 bg-white transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute h-px w-4 bg-white transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-[4px]"
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out-expo lg:hidden ${
          open ? "max-h-[100svh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex h-[calc(100svh-4rem)] flex-col gap-1 px-6 pt-6 pb-10">
          {NAV_ITEMS.map((link, i) => (
            <li
              key={link.href}
              className="transition-all duration-500 ease-out-expo"
              style={{
                transitionDelay: open ? `${80 + i * 45}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateY(12px)",
              }}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-hairline py-4 text-[28px] font-medium tracking-tight text-white/85 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-auto">
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-accent px-7 py-4 text-center text-[15px] font-medium text-white"
            >
              Start a project
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
