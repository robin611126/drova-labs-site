import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  // Read the logo mark PNG from disk (safe at build time)
  const markPath = join(process.cwd(), "public", "logo-mark.png");
  const markBuffer = readFileSync(markPath);
  const markBase64 = `data:image/png;base64,${markBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          borderRadius: "40px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markBase64} width={130} height={130} alt="" style={{ objectFit: "contain" }} />
      </div>
    ),
    size,
  );
}
