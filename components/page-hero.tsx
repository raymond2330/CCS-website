import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { ChevronRight } from "lucide-react"

interface PageHeroProps {
  eyebrow: string
  title: string
  lead: string
  /** Trail between Home and the current page, e.g. [{ label: "Programs", href: "/#programs" }] */
  crumbs?: { label: string; href: string }[]
  image?: { src: string; alt: string }
  /** Breadcrumb label for this page when it differs from the title */
  crumbLabel?: string
  children?: ReactNode
}

/** Navy banner shared by every inner page, with optional photo behind it. */
export default function PageHero({ eyebrow, title, lead, crumbs = [], image, crumbLabel, children }: PageHeroProps) {
  return (
    <section aria-labelledby="page-title" className="relative isolate overflow-hidden bg-navy text-white">
      {image ? (
        <>
          <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="-z-20 object-cover" />
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/85 to-navy/50 md:bg-gradient-to-r md:from-navy md:via-navy/80 md:to-navy/20"
            aria-hidden
          />
        </>
      ) : (
        <>
          <div className="hero-grid absolute inset-0 -z-10" aria-hidden />
          <div className="absolute -right-40 -top-40 -z-10 size-[32rem] rounded-full bg-[#3fc8f4]/20 blur-3xl" aria-hidden />
        </>
      )}

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-white/75">
            {[{ label: "Home", href: "/" }, ...crumbs].map((c) => (
              <li key={c.href} className="flex items-center gap-1">
                <Link href={c.href} className="rounded hover:text-white hover:underline">
                  {c.label}
                </Link>
                <ChevronRight className="size-4" aria-hidden />
              </li>
            ))}
            <li aria-current="page" className="font-semibold text-white">
              {crumbLabel ?? title}
            </li>
          </ol>
        </nav>

        <div className="mt-10 max-w-2xl sm:mt-16">
          <p className="rise text-sm font-bold uppercase tracking-[0.14em] text-gold">
            {eyebrow}
          </p>
          <h1 id="page-title" className="rise mt-3 [--rise-delay:80ms] text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="rise mt-5 text-lg [--rise-delay:160ms] leading-relaxed text-white/85 sm:text-xl">
            {lead}
          </p>
          {children && (
            <div className="rise mt-8 flex flex-col gap-3 [--rise-delay:240ms] sm:flex-row">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
