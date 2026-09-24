import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"
import FacebookIcon from "@/components/facebook-icon"
import { contact } from "@/lib/site-data"
import { programHref, programs } from "@/lib/programs"

const exploreLinks = [
  { label: "Admissions", href: "/#admissions" },
  { label: "News & announcements", href: "/#news" },
  { label: "Events", href: "/#events" },
  { label: "Faculty & staff", href: "/faculty-staff" },
  { label: "Student life", href: "/#student-life" },
  { label: "Contact & location", href: "/#contact" },
]

export default function SiteFooter() {
  return (
    <footer className="bg-navy text-white/80" aria-label="Site footer">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/CCS/logo.png"
              alt=""
              width={48}
              height={48}
              className="size-12 rounded-full bg-white object-cover"
            />
            <div className="leading-tight">
              <p className="font-extrabold text-white">College of Computer Studies</p>
              <p className="text-sm">{contact.institution}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed">
            Preparing computing professionals through internationally accredited programs, hands-on learning and
            strong industry ties.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Programs</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {programs.map((p) => (
              <li key={p.code}>
                <Link href={programHref(p)} className="hover:text-gold">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {exploreLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              {contact.address}
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              {contact.phones.join(" / ")}
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <a href={`mailto:${contact.email}`} className="break-all hover:text-gold">
                {contact.email}
              </a>
            </li>
            <li className="flex gap-2">
              <FacebookIcon className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={contact.facebook} target="_blank" rel="noopener" className="hover:text-gold">
                CCS on Facebook<span className="sr-only"> (opens in new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-white/60 sm:px-6 lg:px-8">
          &copy; {new Date().getFullYear()} College of Computer Studies, T.I.P. Manila. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
