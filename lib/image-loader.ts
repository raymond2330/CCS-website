import type { ImageLoaderProps } from "next/image"

import { assetPath } from "./asset-path"

/**
 * Resolves <Image> URLs for the static export.
 *
 * GitHub Pages has no image-optimization server, so images ship as-is. This
 * loader only prepends the deploy base path, which keeps every <Image> working
 * under /CCS-website without touching each call site.
 */
export default function imageLoader({ src }: ImageLoaderProps) {
  return assetPath(src)
}
