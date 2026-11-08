import { ImageResponse } from "next/og";
import { WORK } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Drova Labs case study";

export default async function WorkOGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = WORK.find((p) => p.slug === slug);
  const title = project?.title ?? "Case Study";
  const category = project?.category ?? "";
  const tone = project?.tone ?? "linear-gradient(140deg, #101820 0%, #0a0a0a 60%)";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "radial-gradient(circle at 80% 20%, rgba(0,153,255,0.22) 0%, rgba(10,10,10,1) 50%)",
          backgroundColor: "#0a0a0a",
          color: "#fff",
        }}
      >
        {/* Logo mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
            <path d="M28 18L16 32l12 14" stroke="#4BB8FF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M36 18l12 14-12 14" stroke="#7B5CFA" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>Drova Labs</span>
        </div>

        {/* Project tile preview */}
        <div
          style={{
            display: "flex",
            width: 320,
            height: 240,
            borderRadius: 8,
            background: tone,
            alignSelf: "flex-end",
            position: "absolute",
            right: 80,
            top: "50%",
            transform: "translateY(-50%)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        />

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 680 }}>
          <span style={{ fontSize: 18, letterSpacing: 4, color: "#666", textTransform: "uppercase" }}>
            {category}
          </span>
          <h1
            style={{
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: -3,
              margin: 0,
            }}
          >
            {title}
          </h1>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, color: "#555", letterSpacing: 3 }}>
          <span>CASE STUDY</span>
          <span>DROVALABS.COM</span>
        </div>
      </div>
    ),
    size,
  );
}
