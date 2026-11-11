import type { Metadata } from "next";
import { Inter, Fragment_Mono, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fragment-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drovalabs.com"),
  title: {
    default: "Drova Labs — AI Creative Studio",
    template: "%s — Drova Labs",
  },
  description:
    "Drova Labs is an AI-first creative studio building cinematic ad films, product visuals and campaign work for brands that need to ship fast without looking cheap.",
  keywords: [
    "AI creative studio",
    "AI ad films",
    "product 3D visuals",
    "CGI product animation",
    "performance creative agency",
  ],
  openGraph: {
    type: "website",
    title: "Drova Labs — AI Creative Studio",
    description:
      "Cinematic AI visuals, product films and campaign work. Directed by humans, rendered by machines.",
    siteName: "Drova Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drova Labs — AI Creative Studio",
    description:
      "Cinematic AI visuals, product films and campaign work. Directed by humans, rendered by machines.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fragmentMono.variable} ${instrumentSerif.variable}`}>
      <body className="grain antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
