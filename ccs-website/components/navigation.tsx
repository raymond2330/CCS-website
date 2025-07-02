"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Prevent hiding nav when mobile menu is open
          if (isOpen) {
            ticking = false
            return
          }
          const currentScrollY = window.scrollY
          if (currentScrollY > lastScrollY.current && currentScrollY > 64) {
            setShowNav(false)
          } else {
            setShowNav(true)
          }
          lastScrollY.current = currentScrollY
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isOpen])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Computer Science", href: "/computer-science" },
    { name: "Information Technology", href: "/information-technology" },
    { name: "Entertainment & Multimedia", href: "/entertainment-multimedia" },
    { name: "Data Science & Analytics", href: "/data-science-analytics" },
    { name: "Faculty & Staff", href: "/faculty-staff" },
  ]

  return (
    <nav
      className={`bg-white shadow-lg sticky top-0 z-50 transition-transform duration-500 ease-in-out ${showNav || isOpen ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-wrap items-center">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
              <Image
                src="/images/CCS/logo.png"
                alt="CCS Logo"
                width={50}
                height={50}
                className="rounded-lg object-cover w-10 h-10"
                priority
              />
              <h1 className="text-xl font-bold text-blue-600 hidden sm:block">College of Computer Studies</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 sm-10">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
