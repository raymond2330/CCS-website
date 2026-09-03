/**
 * Prefix for files served straight out of /public.
 *
 * next/image and next/link add the configured basePath on their own, but raw
 * <video>, <source> and <a href> URLs do not — they need this helper, or they
 * 404 on GitHub Pages, where the site lives under /CCS-website.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function assetPath(path: string) {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`
}
