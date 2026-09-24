"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Fades in every [data-reveal] element as it scrolls into view.
 * Mounted once in the layout; re-scans the page after each navigation.
 */
export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)")
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return null
}
