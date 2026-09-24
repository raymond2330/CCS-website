import Image from "next/image"
import type { Metadata } from "next"
import PageHero from "@/components/page-hero"
import SectionHeading from "@/components/section-heading"
import PersonCard from "@/components/person-card"
import CtaBand from "@/components/cta-band"
import { dean, facultyAnchor, facultyByProgram, programChairs, staff } from "@/lib/faculty"

export const metadata: Metadata = {
  title: "Faculty & Staff | CCS T.I.P. Manila",
  description: "Meet the dean, program chairs, faculty and staff of the College of Computer Studies.",
}

const groups = Object.keys(facultyByProgram)

export default function FacultyStaffPage() {
  return (
    <>
      <PageHero
        eyebrow="Faculty & Staff"
        title="The people behind CCS"
        crumbLabel="Faculty & Staff"
        lead="Meet the educators, researchers and staff who teach, mentor and support our students."
      />

      <nav aria-label="On this page" className="sticky top-16 z-40 border-b bg-background/90 backdrop-blur-md">
        <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 sm:px-6 lg:px-8">
          {[
            { id: "leadership", label: "Leadership" },
            ...groups.map((g) => ({ id: facultyAnchor(g), label: g })),
            { id: "staff", label: "Staff" },
          ].map((s) => (
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

      {/* Leadership */}
      <section id="leadership" aria-labelledby="leadership-title" className="scroll-mt-32 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="leadership-title" eyebrow="Leadership" title="Dean & program chairs" />

          <article
            data-reveal
            aria-labelledby="dean-name"
            className="mt-12 grid overflow-hidden rounded-3xl border bg-card md:grid-cols-[18rem_1fr]"
          >
            <Image
              src={dean.image}
              alt={`Portrait of ${dean.name}`}
              width={480}
              height={560}
              className="aspect-[5/6] h-full w-full object-cover object-top md:aspect-auto"
            />
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">Dean of the College</p>
              <h3 id="dean-name" className="mt-2 text-3xl font-extrabold">
                {dean.name}
              </h3>
              <p className="mt-3 text-muted-foreground">{dean.education}</p>
              <p className="mt-1 text-muted-foreground">Specialization: {dean.specialization}</p>
            </div>
          </article>

          <ul className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
            {programChairs.map((p) => (
              <PersonCard key={p.role} person={p} />
            ))}
          </ul>
        </div>
      </section>

      {/* Faculty by program */}
      {groups.map((group, i) => (
        <section
          key={group}
          id={facultyAnchor(group)}
          aria-labelledby={`${facultyAnchor(group)}-title`}
          className={`scroll-mt-32 py-20 sm:py-24 ${i % 2 === 0 ? "bg-muted" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading id={`${facultyAnchor(group)}-title`} eyebrow="Faculty" title={group} />
            <ul className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
              {facultyByProgram[group].map((p) => (
                <PersonCard key={p.name} person={p} />
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* Staff */}
      <section
        id="staff"
        aria-labelledby="staff-title"
        className={`scroll-mt-32 py-20 sm:py-24 ${groups.length % 2 === 0 ? "bg-muted" : ""}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="staff-title" eyebrow="Staff" title="Office of the Dean" />
          <ul className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
            {staff.map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
