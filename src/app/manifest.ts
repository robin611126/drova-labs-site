import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Drova",
    description: "AI-first creative studio building cinematic ad films, product visuals and campaign work.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      { src: "/logo-mark.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/logo-mark.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
