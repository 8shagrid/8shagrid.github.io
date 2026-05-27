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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0d12",
          borderRadius: "20%",
          border: "2px solid rgba(197, 48, 48, 0.3)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 3,
          }}
        >
          <span
            style={{
              fontSize: 120,
              fontWeight: 800,
              color: "#f0ece4",
              fontFamily: "Playfair Display, serif",
              letterSpacing: "-2px",
            }}
          >
            D
          </span>
          <span
            style={{
              width: 16,
              height: 16,
              background: "#c53030",
              borderRadius: "50%",
              marginBottom: 18,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
