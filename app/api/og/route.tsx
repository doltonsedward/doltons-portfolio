import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          padding: "40px",
        }}
      >
        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              color: "#000000",
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            Doltons Edward
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "32px",
              color: "#666666",
              fontWeight: "400",
              letterSpacing: "0.05em",
            }}
          >
            Creative Developer
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
