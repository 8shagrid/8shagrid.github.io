import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0d0d12",
          borderRadius: "20%",
          border: "2px solid rgba(197, 48, 48, 0.3)",
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            left: 38,
            top: 18,
            fontSize: 124,
            fontWeight: 800,
            color: "#f0ece4",
            fontFamily: "Playfair Display, serif",
            letterSpacing: "-2px",
            lineHeight: 1,
          }}
        >
          D
        </span>
        <span
          style={{
            position: "absolute",
            left: 130,
            top: 122,
            width: 20,
            height: 20,
            background: "#c53030",
            borderRadius: "50%",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
