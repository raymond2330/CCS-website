import type { NextConfig } from "next";

/**
 * Base path for the deployed site.
 *
 * GitHub Pages serves a project site from a subfolder
 * (https://<user>.github.io/<repo>), so every URL needs that prefix.
 * The deploy workflow sets NEXT_PUBLIC_BASE_PATH=/CCS-website.
 *
 * Leave it unset for `npm run dev` (served from "/"), or for a
 * custom domain / <user>.github.io repo, which are both served from the root.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Emit a plain static site into ./out — GitHub Pages serves files only,
  // it cannot run a Node server.
  output: "export",

  basePath,
  assetPrefix: basePath || undefined,

  // Emit /about/index.html instead of /about.html so GitHub Pages resolves
  // nested routes without redirect surprises.
  trailingSlash: true,

  devIndicators: false,
  poweredByHeader: false,

  images: {
    // next/image's optimizer needs a server, which GitHub Pages does not have.
    // A custom loader serves the original files and, unlike `unoptimized`,
    // still applies the base path above.
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
};

export default nextConfig;
