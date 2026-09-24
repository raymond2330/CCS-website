import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowRight, Award, Briefcase, Download, FileText } from "lucide-react"
import PageHero from "@/components/page-hero"
import SectionHeading from "@/components/section-heading"
import PersonCard from "@/components/person-card"
import CtaBand from "@/components/cta-band"
import { assetPath } from "@/lib/asset-path"
import { facultyAnchor, facultyByProgram } from "@/lib/faculty"
import { getProgram, programHref, programs } from "@/lib/programs"

// Only the slugs in lib/programs.ts exist; everything else 404s at build time.
export const dynamicParams = false

export function generateStaticParams() {
  return programs.map((p) => ({ program: p.slug }))
}

type Props = { params: Promise<{ program: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const program = getProgram((await params).program)
  return program ? { title: `${program.title} (${program.code}) | CCS T.I.P. Manila`, description: program.summary } : {}
}

export default async function ProgramPage({ params }: Props) {
  const program = getProgram((await params).program)
  if (!program) notFound()

  const faculty = facultyByProgram[program.facultyGroup] ?? []
  const brochure = program.resources.find((r) => r.label.includes("Brochure"))
  const others = programs.filter((p) => p.slug !== program.slug)
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "specializations", label: "Specializations" },
    { id: "careers", label: "Careers" },
    ...(faculty.length ? [{ id: "faculty", label: "Faculty" }] : []),
    ...(program.resources.length ? [{ id: "downloads", label: "Downloads" }] : []),
  ]

  return (
    <>
      <PageHero
        eyebrow={program.isNew ? `${program.code} · New program` : program.code}
        title={program.title}
        lead={program.tagline}
        crumbs={[{ label: "Programs", href: "/#programs" }]}
        image={program.heroImage}
      >
        <Link
          href="/#admissions"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-gold-foreground transition-transform hover:-translate-y-0.5"
        >
          Apply Now <ArrowRight className="size-4" aria-hidden />
        </Link>
        {brochure && (
          <a
            href={assetPath(brochure.file)}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-bold transition-colors hover:bg-white/10"
          >
            <Download className="size-4" aria-hidden /> Download brochure
            <span className="sr-only">(PDF, {brochure.size}, opens in new tab)</span>
          </a>
        )}
      </PageHero>

      {/* On-this-page links */}
      <nav aria-label="On this page" className="sticky top-16 z-40 border-b bg-background/90 backdrop-blur-md">
        <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 sm:px-6 lg:px-8">
          {sections.map((s) => (
            <li key={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                className="block rounded-full px-4 py-2 text-sm font-semibold text-foreground/75 transition-colors hover:bg-accent hover:text-foreground"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overview */}
      <section id="overview" aria-labelledby="overview-title" className="scroll-mt-32 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <div>
            <SectionHeading id="overview-title" eyebrow="Overview" title={`What is ${program.title}?`} />
            <div data-reveal className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              {program.overview.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </div>

          <div data-reveal role="group" aria-labelledby="glance-title" className="h-fit rounded-3xl border bg-card p-6 sm:p-8">
            <h3 id="glance-title" className="text-lg font-bold">
              At a glance
            </h3>
            <dl className="mt-5 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-muted-foreground">Degree</dt>
                <dd className="mt-1 font-bold">{program.degree}</dd>
              </div>
              <div>
                <dt className="font-semibold text-muted-foreground">Specializations</dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {program.highlights.map((h) => (
                    <span key={h.title} className="rounded-full bg-brand-soft px-3 py-1 font-semibold text-brand">
                      {h.title}
                    </span>
                  ))}
                </dd>
              </div>
              {program.accreditations.length > 0 && (
                <div>
                  <dt className="font-semibold text-muted-foreground">Accreditations & recognition</dt>
                  <dd className="mt-2">
                    <ul className="space-y-2">
                      {program.accreditations.map((a) => (
                        <li key={a} className="flex items-center gap-2 font-medium">
                          <Award className="size-4 shrink-0 text-gold" aria-hidden /> {a}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section id="specializations" aria-labelledby="specializations-title" className="scroll-mt-32 bg-muted py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="specializations-title" eyebrow="Specializations" title="What you'll dig into" />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {program.highlights.map((h) => (
              <li key={h.title} data-reveal className="group overflow-hidden rounded-2xl border bg-card">
                <div className="overflow-hidden">
                  <Image
                    src={h.image}
                    alt={h.alt}
                    width={1200}
                    height={900}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{h.title}</h3>
                  <p className="mt-2 text-muted-foreground">{h.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" aria-labelledby="careers-title" className="scroll-mt-32 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="careers-title" eyebrow="Careers" title="Where graduates go">
            Roles {program.code} graduates are prepared for.
          </SectionHeading>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {program.careers.map((c) => (
              <li key={c} data-reveal className="flex items-center gap-3 rounded-xl border bg-card p-4 font-semibold">
                <Briefcase className="size-5 shrink-0 text-brand" aria-hidden /> {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Faculty */}
      {faculty.length > 0 && (
        <section id="faculty" aria-labelledby="faculty-title" className="scroll-mt-32 bg-muted py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading id="faculty-title" eyebrow="Faculty" title={`Meet the ${program.code} faculty`} />
              <Link
                href={`/faculty-staff#${facultyAnchor(program.facultyGroup)}`}
                className="inline-flex shrink-0 items-center gap-2 font-bold text-brand hover:underline"
              >
                Full faculty directory <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
              {faculty.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Downloads */}
      {program.resources.length > 0 && (
        <section id="downloads" aria-labelledby="downloads-title" className="scroll-mt-32 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading id="downloads-title" eyebrow="Downloads" title="Program documents" />
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {program.resources.map((r) => (
                <li key={r.file} data-reveal>
                  <a
                    href={assetPath(r.file)}
                    target="_blank"
                    rel="noopener"
                    className="group flex h-full items-start gap-4 rounded-2xl border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-lg"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                      <FileText className="size-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block font-bold group-hover:text-brand">{r.label}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        PDF · {r.size}
                        <span className="sr-only"> (opens in new tab)</span>
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Other programs */}
      <section aria-labelledby="other-programs-title" className="bg-muted py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="other-programs-title" eyebrow="Explore more" title="Other CCS programs" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((p) => (
              <li key={p.slug} data-reveal>
                <Link
                  href={programHref(p)}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl"
                >
                  <Image
                    src={p.heroImage.src}
                    alt=""
                    width={640}
                    height={360}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="aspect-video w-full object-cover"
                  />
                  <span className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-bold tracking-wider text-muted-foreground">{p.code}</span>
                    <span className="mt-1 text-lg font-bold leading-snug">{p.title}</span>
                    <span className="mt-2 flex-1 text-sm text-muted-foreground">{p.summary}</span>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                      View program
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={`Start your ${program.code} journey`} />

    </>
  )
}
