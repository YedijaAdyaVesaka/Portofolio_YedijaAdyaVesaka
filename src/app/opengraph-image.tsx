import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

/** Dynamic Open Graph / Twitter card image (1200×630) for social shares. */
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #09090B 0%, #111033 55%, #0B1E3F 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              background: "linear-gradient(135deg,#2563EB,#4F46E5,#06B6D4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            L
          </div>
          <div style={{ fontSize: 34, fontWeight: 600 }}>{siteConfig.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 70,
              fontWeight: 700,
              lineHeight: 1.08,
              maxWidth: 940,
            }}
          >
            We craft digital products people love to use.
          </div>
          <div style={{ fontSize: 30, color: "#A1A1AA" }}>
            Strategy · Design · Engineering
          </div>
        </div>
      </div>
    ),
    size
  );
}
