import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0d0d12",
          borderRadius: "4px",
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            left: 7,
            top: 3,
            fontSize: 22,
            fontWeight: 800,
            color: "#f0ece4",
            fontFamily: "Playfair Display, serif",
            letterSpacing: "-0.5px",
            lineHeight: 1,
          }}
        >
          D
        </span>
        <span
          style={{
            position: "absolute",
            left: 23,
            top: 21,
            width: 4,
            height: 4,
            background: "#c53030",
            borderRadius: "50%",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
