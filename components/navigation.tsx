"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"
import { programHref, programs } from "@/lib/programs"

const navItems = [
  { name: "Admissions", href: "/#admissions" },
  { name: "News", href: "/#news" },
  { name: "Events", href: "/#events" },
  { name: "Faculty", href: "/faculty-staff" },
  { name: "Contact", href: "/#contact" },
]

export default function Navigation() {
  const pathname = usePathname().replace(/\/$/, "") || "/"
  const [isOpen, setIsOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const programsRef = useRef<HTMLLIElement>(null)

  const isCurrent = (href: string) => (href.startsWith("/#") ? false : pathname === href.replace(/\/$/, ""))
  const onProgramPage = programs.some((p) => pathname === programHref(p))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close menus on navigation
  useEffect(() => {
    setIsOpen(false)
    setProgramsOpen(false)
  }, [pathname])

  // Escape closes whichever menu is open; clicking elsewhere closes the programs menu
  useEffect(() => {
    if (!isOpen && !programsOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return
      setIsOpen(false)
      if (programsOpen) {
        setProgramsOpen(false)
        programsRef.current?.querySelector("button")?.focus()
      }
    }
    const onClick = (e: MouseEvent) => {
      if (programsRef.current && !programsRef.current.contains(e.target as Node)) setProgramsOpen(false)
    }
    window.addEventListener("keydown", onKey)
    document.addEventListener("click", onClick)
    return () => {
      window.removeEventListener("keydown", onKey)
      document.removeEventListener("click", onClick)
    }
  }, [isOpen, programsOpen])

  const linkClass = (current: boolean) =>
    `rounded-full px-3.5 py-2 text-sm font-semibold transition-colors hover:bg-accent hover:text-foreground ${
      current ? "bg-accent text-foreground" : "text-foreground/75"
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md transition-shadow ${
        scrolled ? "border-border shadow-sm" : "border-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 rounded-lg" aria-current={pathname === "/" ? "page" : undefined}>
          <Image
            src="/images/CCS/logo.png"
            alt=""
            width={44}
            height={44}
            className="size-10 rounded-full bg-white object-cover"
            priority
          />
          <span className="leading-tight">
            <span className="block text-[15px] font-extrabold tracking-tight">College of Computer Studies</span>
            <span className="block text-xs font-medium text-muted-foreground">T.I.P. Manila</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          <li ref={programsRef} className="relative">
            <button
              type="button"
              aria-expanded={programsOpen}
              aria-controls="programs-menu"
              onClick={() => setProgramsOpen((o) => !o)}
              className={`inline-flex items-center gap-1 ${linkClass(onProgramPage)}`}
            >
              Programs
              <ChevronDown className={`size-4 transition-transform ${programsOpen ? "rotate-180" : ""}`} aria-hidden />
            </button>
            {programsOpen && (
              <ul
                id="programs-menu"
                className="absolute left-0 top-full mt-2 w-80 rounded-2xl border bg-popover p-2 shadow-xl"
              >
                {programs.map((p) => {
                  const current = pathname === programHref(p)
                  return (
                    <li key={p.slug}>
                      <Link
                        href={programHref(p)}
                        aria-current={current ? "page" : undefined}
                        className={`block rounded-xl px-3 py-2.5 hover:bg-accent ${current ? "bg-accent" : ""}`}
                      >
                        <span className="block text-sm font-bold">{p.title}</span>
                        <span className="block text-xs text-muted-foreground">{p.code}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </li>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className={linkClass(isCurrent(item.href))}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Link
            href="/#admissions"
            className="ml-1 hidden rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-gold-foreground shadow-sm transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Apply Now
          </Link>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full hover:bg-accent lg:hidden"
            onClick={() => setIsOpen((o) => !o)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t bg-background lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <p id="mobile-programs" className="px-3 pb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Programs
            </p>
            <ul aria-labelledby="mobile-programs" className="space-y-1">
              {programs.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={programHref(p)}
                    onClick={() => setIsOpen(false)}
                    aria-current={pathname === programHref(p) ? "page" : undefined}
                    className="block rounded-lg px-3 py-3 font-semibold hover:bg-accent aria-[current=page]:bg-accent"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-3 space-y-1 border-t pt-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    className="block rounded-lg px-3 py-3 text-base font-semibold hover:bg-accent aria-[current=page]:bg-accent"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 sm:hidden">
                <Link
                  href="/#admissions"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-full bg-gold px-5 py-3 text-center font-bold text-gold-foreground"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
