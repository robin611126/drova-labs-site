import Link from "next/link";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="relative flex min-h-svh flex-col items-start justify-center overflow-hidden px-6 md:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full opacity-[0.14] blur-[130px]"
          style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 68%)" }}
        />
        <div className="relative mx-auto w-full max-w-[1400px]">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-8 text-[clamp(5rem,22vw,18rem)] font-medium leading-[0.85] tracking-[-0.05em]">
            Lost<span className="text-accent">.</span>
          </h1>
          <p className="mt-8 max-w-[44ch] text-[15px] leading-relaxed text-white/60 md:text-[17px]">
            This frame didn&rsquo;t make the final cut. The page you are looking for has moved or never existed.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/" className="rounded-full bg-accent px-7 py-3.5 text-[14px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5">
              Back to home
            </Link>
            <Link href="/#work" className="rounded-full border border-hairline px-7 py-3.5 text-[14px] transition-colors hover:border-white/30">
              See the work
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
