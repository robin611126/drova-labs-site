import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        <img
          src="http://localhost:3000/logo-mark.png"
          width={130}
          height={130}
          alt=""
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    size,
  );
}
