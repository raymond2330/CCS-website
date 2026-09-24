import Image from "next/image"
import Link from "next/link"
import type { CSSProperties } from "react"
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CalendarDays,
  ExternalLink,
  Cpu,
  Download,
  Gamepad2,
  Mail,
  MapPin,
  Network,
  Phone,
  Trophy,
  Users,
} from "lucide-react"
import { assetPath } from "@/lib/asset-path"
import FacebookIcon from "@/components/facebook-icon"
import SectionHeading from "@/components/section-heading"
import { dean, facultyByProgram, programChairs } from "@/lib/faculty"
import { programHref, programs } from "@/lib/programs"
import {
  accreditations,
  achievements,
  admissionSteps,
  contact,
  events,
  news,
  organizations,
  stats,
} from "@/lib/site-data"

const programIcons = { cpu: Cpu, network: Network, gamepad: Gamepad2, chart: BarChart3, brain: BrainCircuit }

const numberWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"]

const brochures = programs.flatMap((p) =>
  p.resources.filter((r) => r.label.includes("Brochure")).map((r) => ({ program: p.title, file: r.file })),
)

// Dean, the chairs who are not also the dean, and one senior faculty member
const leadership = [
  { ...dean, role: "Dean" },
  ...programChairs.filter((c) => c.name !== dean.name).map((c) => ({ ...c, role: c.role.replace(" and Entertainment & Multimedia Computing", " & EMC") })),
  facultyByProgram["Computer Science"][0],
]

function formatDate(iso: string, opts: Intl.DateTimeFormatOptions) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { timeZone: "UTC", ...opts })
}

function riseDelay(ms: number) {
  return { "--rise-delay": `${ms}ms` } as CSSProperties
}

function delay(ms: number) {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-navy text-white">
        <div className="hero-grid absolute inset-0 -z-10" aria-hidden />
        <div
          className="absolute -right-40 -top-40 -z-10 size-[36rem] rounded-full bg-[#3fc8f4]/25 blur-3xl"
          aria-hidden
        />
        <div className="absolute -bottom-48 -left-32 -z-10 size-[28rem] rounded-full bg-gold/10 blur-3xl" aria-hidden />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-24">
          <div>
            <p
              className="rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm font-medium text-white/85"
            >
              <span className="size-2 rounded-full bg-gold" aria-hidden />
              College of Computer Studies · T.I.P. Manila
            </p>
            <h1
              id="hero-title"
              style={riseDelay(80)}
              className="rise mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Build what <span className="text-gold">comes next.</span>
            </h1>
            <p style={riseDelay(160)} className="rise mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
              Internationally accredited computing programs that turn curious senior high graduates into engineers,
              analysts and creators.
            </p>
            <div style={riseDelay(240)} className="rise mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#admissions"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-gold-foreground shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
              >
                Apply Now <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="#programs"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 font-bold text-white transition-colors hover:bg-white/10"
              >
                Explore Programs
              </Link>
            </div>
          </div>

          <div style={riseDelay(200)} className="rise relative mx-auto hidden aspect-square w-full max-w-sm lg:block">
            <div className="absolute inset-6 rounded-full border border-white/10" aria-hidden />
            <div className="absolute inset-16 rounded-full border border-dashed border-white/15" aria-hidden />
            <div className="absolute inset-0 grid place-items-center">
              <div className="rounded-full bg-white p-3 shadow-2xl shadow-[#3fc8f4]/20">
                <Image
                  src="/images/CCS/logo.png"
                  alt="College of Computer Studies logo"
                  width={220}
                  height={220}
                  className="size-44 rounded-full object-cover"
                  priority
                />
              </div>
            </div>
            {programs.map((p, i) => (
              <span
                key={p.code}
                className={`absolute rounded-full border border-white/15 bg-navy/80 px-3.5 py-1.5 text-sm font-bold backdrop-blur ${
                  ["left-0 top-8", "right-0 top-16", "-left-6 top-1/2", "bottom-10 left-8", "bottom-2 right-4"][i]
                }`}
              >
                {p.code}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 bg-black/10">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
            {stats.map((s, i) => (
              <div key={s.label} style={riseDelay(300 + i * 80)} className="rise flex flex-col px-2">
                <dt className="text-sm text-white/70">{s.label}</dt>
                <dd className="order-first text-2xl font-extrabold text-white sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" aria-labelledby="programs-title" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="programs-title" eyebrow="Programs" title={`${numberWords[programs.length]} paths into tech`}>
            Every program blends strong fundamentals with hands-on projects, so you graduate with a portfolio as well
            as a diploma.
          </SectionHeading>

          {/* Three cards on the first row, two wider ones on the second */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {programs.map((p, i) => {
              const Icon = programIcons[p.icon]
              const lastOdd = i === programs.length - 1 && programs.length % 2 === 1
              return (
                <Link
                  key={p.code}
                  href={programHref(p)}
                  data-reveal
                  style={delay(i * 80)}
                  className={`group flex flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 ${
                    i < 3 ? "lg:col-span-2" : "lg:col-span-3"
                  } ${lastOdd ? "sm:col-span-2" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white dark:group-hover:text-navy">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <span className="flex items-center gap-2 text-xs font-bold tracking-wider text-muted-foreground">
                      {p.isNew && <span className="rounded-full bg-gold px-2 py-0.5 text-gold-foreground">NEW</span>}
                      {p.code}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold leading-snug">{p.title}</h3>
                  <p className="mt-3 flex-1 text-muted-foreground">{p.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Specializations">
                    {p.highlights.map(({ title: t }) => (
                      <li key={t} className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                    Explore program
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              )
            })}
          </div>

          <div data-reveal className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t pt-8">
            <p className="text-sm font-semibold text-muted-foreground">Accredited & recognized by</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {accreditations.map((a) => (
                <li key={a} className="text-sm font-extrabold tracking-wide text-foreground/70">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section id="admissions" aria-labelledby="admissions-title" className="bg-muted py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <SectionHeading id="admissions-title" eyebrow="Admissions" title="Your first year starts here">
              Four steps from senior high to your first CCS class. Our Student Recruitment Office can help at every
              stage.
            </SectionHeading>
            <ol className="mt-10 space-y-4">
              {admissionSteps.map((step, i) => (
                <li
                  key={step.title}
                  data-reveal
                  style={delay(i * 80)}
                  className="flex gap-5 rounded-2xl border bg-card p-5"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-navy text-sm font-extrabold text-white dark:bg-brand dark:text-navy">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold">{step.title}</h3>
                    <p className="mt-1 text-muted-foreground">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div data-reveal className="h-fit rounded-3xl bg-navy p-8 text-white lg:sticky lg:top-24">
            <h3 className="text-2xl font-extrabold">Talk to admissions</h3>
            <p className="mt-2 text-white/75">Questions about requirements, schedules or scholarships? Reach out.</p>
            <ul className="mt-6 space-y-3">
              {contact.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\D/g, "")}`} className="flex items-center gap-3 hover:text-gold">
                    <Phone className="size-5 text-gold" aria-hidden /> {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 break-all hover:text-gold">
                  <Mail className="size-5 shrink-0 text-gold" aria-hidden /> {contact.email}
                </a>
              </li>
            </ul>
            <a
              href={`mailto:${contact.email}?subject=CCS%20Application%20Inquiry`}
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-bold text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              Start your application <ArrowRight className="size-4" aria-hidden />
            </a>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm font-bold uppercase tracking-wider text-white/60">Program brochures</p>
              <ul className="mt-3 space-y-2 text-sm">
                {brochures.map((b) => (
                  <li key={b.program}>
                    <a
                      href={assetPath(b.file)}
                      className="flex items-center gap-2 text-white/85 hover:text-gold"
                      target="_blank"
                      rel="noopener"
                    >
                      <Download className="size-4 shrink-0" aria-hidden />
                      {b.program} <span className="sr-only">(PDF, opens in new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section aria-label="News and events" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:px-8">
          <div id="news">
            <SectionHeading id="news-title" eyebrow="News & announcements" title="What's happening at CCS" />
            <div className="mt-10 grid gap-5">
              {news.map((item, i) => (
                <article
                  key={item.title}
                  data-reveal
                  style={delay(i * 80)}
                  className="group relative rounded-2xl border bg-card p-6 transition-all hover:border-brand/50 hover:shadow-lg"
                >
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="rounded-full bg-brand-soft px-2.5 py-0.5 font-bold text-brand">{item.category}</span>
                    <time dateTime={item.date} className="text-muted-foreground">
                      {formatDate(item.date, { month: "long", day: "numeric", year: "numeric" })}
                    </time>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug">
                    <Link href={item.href} className="after:absolute after:inset-0 group-hover:text-brand">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-muted-foreground">{item.excerpt}</p>
                </article>
              ))}
            </div>
          </div>

          <div id="events">
            <SectionHeading id="events-title" eyebrow="Events" title="Upcoming" />
            <ol className="mt-10 divide-y rounded-2xl border bg-card">
              {events.map((ev, i) => (
                <li key={ev.title} data-reveal style={delay(i * 80)} className="flex gap-4 p-5">
                  <time
                    dateTime={ev.date}
                    className="flex w-14 shrink-0 flex-col items-center rounded-xl bg-navy py-2 text-white dark:bg-secondary"
                  >
                    <span className="text-xs font-bold uppercase text-gold">
                      {formatDate(ev.date, { month: "short" })}
                    </span>
                    <span className="text-xl font-extrabold leading-none">{formatDate(ev.date, { day: "numeric" })}</span>
                  </time>
                  <div>
                    <h3 className="font-bold leading-snug">{ev.title}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <CalendarDays className="size-4" aria-hidden />
                      {ev.time} · {ev.place}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" aria-labelledby="faculty-title" className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading id="faculty-title" eyebrow="Faculty" title="Learn from practitioners and researchers">
              Our faculty hold graduate degrees in computing and bring research and industry experience into class.
            </SectionHeading>
            <Link
              href="/faculty-staff"
              data-reveal
              className="inline-flex shrink-0 items-center gap-2 font-bold text-brand hover:underline"
            >
              Full faculty directory <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {leadership.map((person, i) => (
              <li key={person.name} data-reveal style={delay(i * 80)} className="group">
                <div className="overflow-hidden rounded-2xl bg-card">
                  <Image
                    src={person.image}
                    alt={`Portrait of ${person.name}`}
                    width={400}
                    height={480}
                    className="aspect-[5/6] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 font-bold leading-snug">{person.name}</p>
                <p className="text-sm text-muted-foreground">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Student life */}
      <section id="student-life" aria-labelledby="student-life-title" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="student-life-title" eyebrow="Student life" title="Organizations & achievements">
            Join a community that competes, builds and ships together.
          </SectionHeading>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div data-reveal className="rounded-3xl border bg-card p-6 sm:p-8">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <Users className="size-5 text-brand" aria-hidden /> Student organizations
              </h3>
              <ul className="mt-6 space-y-3">
                {organizations.map((org) => (
                  <li key={org.name}>
                    <a
                      href={org.url}
                      target="_blank"
                      rel="noopener"
                      className="group block rounded-xl bg-muted p-4 transition-colors hover:bg-brand-soft"
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span className="font-bold group-hover:text-brand">{org.name}</span>
                        <ExternalLink className="size-4 shrink-0 text-muted-foreground group-hover:text-brand" aria-hidden />
                      </span>
                      {org.fullName && <span className="mt-0.5 block text-sm font-medium">{org.fullName}</span>}
                      <span className="mt-1 block text-sm text-muted-foreground">{org.focus}</span>
                      <span className="sr-only"> (opens in new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={contact.facebookPhotos}
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline"
              >
                <FacebookIcon className="size-4" /> See CCS activities on Facebook
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </div>
            <div data-reveal style={delay(100)} className="rounded-3xl bg-navy p-6 text-white sm:p-8">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <Trophy className="size-5 text-gold" aria-hidden /> Recent achievements
              </h3>
              <ul className="mt-6 space-y-4">
                {achievements.map((a) => (
                  <li key={a.title} className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                    <span className="text-sm font-extrabold text-gold">{a.year}</span>
                    <div>
                      <p className="font-bold">{a.title}</p>
                      <p className="text-sm text-white/70">{a.who}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" aria-labelledby="contact-title" className="bg-muted py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeading id="contact-title" eyebrow="Visit us" title="Find us in Quiapo, Manila">
              Drop by the College of Computer Studies, reach the Student Recruitment Office by phone or email, or
              follow CCS on Facebook.
            </SectionHeading>
            <ul data-reveal className="mt-8 space-y-5">
              <li className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-brand" aria-hidden />
                <div>
                  <p className="font-bold">Address</p>
                  <p className="text-muted-foreground">
                    {contact.institution}
                    <br />
                    {contact.address}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1 size-5 shrink-0 text-brand" aria-hidden />
                <div>
                  <p className="font-bold">Phone</p>
                  <p className="text-muted-foreground">{contact.phones.join(" / ")}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 size-5 shrink-0 text-brand" aria-hidden />
                <div>
                  <p className="font-bold">Email</p>
                  <a href={`mailto:${contact.email}`} className="break-all text-brand hover:underline">
                    {contact.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <FacebookIcon className="mt-1 size-5 shrink-0 text-brand" />
                <div>
                  <p className="font-bold">Facebook</p>
                  <a href={contact.facebook} target="_blank" rel="noopener" className="text-brand hover:underline">
                    facebook.com/ccstipm<span className="sr-only"> (opens in new tab)</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div data-reveal className="overflow-hidden rounded-3xl border bg-card">
            <iframe
              title={`Map showing ${contact.institution}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`}
              className="h-80 w-full sm:h-[26rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
