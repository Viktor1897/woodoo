import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const config = (phase: string): NextConfig => ({
  output: "export",
  pageExtensions:
    phase === PHASE_DEVELOPMENT_SERVER
      ? ["dev.tsx", "tsx", "ts", "jsx", "js"]
      : undefined,
  images: {
    unoptimized: true,
  },
});

export default config;
