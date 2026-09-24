import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CtaBand({ title = "Ready to join CCS?", body = "Applications are handled by the T.I.P. Manila Student Recruitment Office. We'll walk you through every step." }: { title?: string; body?: string }) {
  return (
    <section aria-labelledby="cta-title" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div
        data-reveal
        className="relative isolate mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl bg-navy p-8 text-white sm:p-12 md:flex-row md:items-center"
      >
        <div className="hero-grid absolute inset-0 -z-10" aria-hidden />
        <div>
          <h2 id="cta-title" className="text-2xl font-extrabold sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 max-w-xl text-white/80">{body}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/#admissions"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-gold-foreground transition-transform hover:-translate-y-0.5"
          >
            Apply Now <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 font-bold transition-colors hover:bg-white/10"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
