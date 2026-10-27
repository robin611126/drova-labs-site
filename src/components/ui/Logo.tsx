import Image from "next/image";

type Props = {
  className?: string;
  /** Show wordmark only (no "LABS" subtitle). Default shows full logo. */
  wordmarkOnly?: boolean;
  title?: string;
};

export function Logo({ className = "h-7 w-auto", wordmarkOnly = false, title = "Drova Labs" }: Props) {
  const src = wordmarkOnly ? "/logo-wordmark.png" : "/logo.png";
  // full logo is 687x278; wordmark-only is 687x197 – keep aspect correct
  const h = wordmarkOnly ? 197 : 278;

  return (
    <Image
      src={src}
      alt={title}
      width={687}
      height={h}
      className={className}
      priority
    />
  );
}
