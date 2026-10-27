import { ImageResponse } from "next/og";

export const alt = "Drova Labs - AI Creative Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background:
            "radial-gradient(circle at 70% 30%, rgba(0,153,255,0.28) 0%, rgba(10,10,10,1) 55%)",
          backgroundColor: "#0a0a0a",
          color: "#fff",
        }}
      >
        <svg width="252" height="90" viewBox="0 0 280 100" fill="none">
          <g stroke="#ffffff" strokeWidth="16">
            <circle cx="30" cy="64" r="22" />
            <path d="M52 94V8" />
            <path d="M74 94V64c0-16 10-24 28-24" />
            <path d="M176 36l20 56 20-56" />
            <circle cx="250" cy="64" r="22" />
            <path d="M272 94V36" />
          </g>
          <path d="M134 40l-18 24 18 24" stroke="#4BB8FF" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M146 40l18 24-18 24" stroke="#7B5CFA" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 92, fontWeight: 600, lineHeight: 1, letterSpacing: -3 }}>
          <span>Ads that look expensive.</span>
          <span style={{ display: "flex" }}>
            <span style={{ color: "#999" }}>Made at the speed of&nbsp;</span>
            <span style={{ color: "#0099ff" }}>AI.</span>
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#999", letterSpacing: 3 }}>
          <span>AI CREATIVE STUDIO</span>
          <span>DROVALABS.COM</span>
        </div>
      </div>
    ),
    size,
  );
}
