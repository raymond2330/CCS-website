/**
 * Content for the homepage.
 *
 * Contact details and accreditations come from the official program pubmats.
 * Program details live in lib/programs.ts, people in lib/faculty.ts.
 * Everything marked PLACEHOLDER is sample copy that must be replaced with real
 * news, events and achievements before going live.
 */

import { programs } from "@/lib/programs"

export const contact = {
  institution: "Technological Institute of the Philippines – Manila",
  address: "Arlegui St., Quiapo, Manila",
  phones: ["8733-9117", "8736-2580"],
  email: "admissions.manila@tip.edu.ph",
  mapQuery: "Technological Institute of the Philippines Manila",
  facebook: "https://www.facebook.com/ccstipm",
  facebookPhotos: "https://www.facebook.com/ccstipm/photos",
}

export const accreditations = ["ABET CAC", "PICAB", "Seoul Accord", "CHED Center of Excellence", "PACUCOA Level III"]

export const admissionSteps = [
  { title: "Submit your application", body: "Fill out the online application form and pick your preferred program." },
  { title: "Send your requirements", body: "Senior high report card (Form 138), PSA birth certificate, good moral certificate and 2x2 photos." },
  { title: "Take the entrance assessment", body: "Schedule your admission test with the Student Recruitment Office." },
  { title: "Enroll", body: "Receive your results, settle your fees and get ready for orientation week." },
]

// PLACEHOLDER — replace with real announcements.
export const news = [
  {
    date: "2026-09-18",
    category: "Admissions",
    title: "Applications for AY 2027–2028 are now open",
    excerpt: "Incoming first-year and transfer students can now apply online for all CCS programs, including the new BS Artificial Intelligence.",
    href: "#admissions",
  },
  {
    date: "2026-09-10",
    category: "Achievement",
    title: "CCS team reaches the national finals of a collegiate hackathon",
    excerpt: "Four BSCS students built an accessibility tool for public transport commuters in 36 hours.",
    href: "#",
  },
  {
    date: "2026-09-02",
    category: "Research",
    title: "Faculty paper on affective computing accepted to an international conference",
    excerpt: "The study looks at how learning systems can respond to student frustration in real time.",
    href: "#",
  },
]

// PLACEHOLDER — replace with the real academic calendar.
export const events = [
  { date: "2026-10-08", time: "9:00 AM", title: "CCS Campus Tour & Open House", place: "CCS Lobby" },
  { date: "2026-10-21", time: "1:00 PM", title: "Industry Talk: Careers in Cybersecurity", place: "Audio-Visual Room" },
  { date: "2026-11-05", time: "8:00 AM", title: "CCS Week Game Jam (48 hours)", place: "Computer Labs" },
  { date: "2026-11-19", time: "10:00 AM", title: "Capstone Project Exhibit", place: "Main Lobby" },
]

// Links are the organizations' current pages; swap in dedicated websites when they exist.
export const organizations = [
  {
    name: "JPEG",
    fullName: "Joint Proficient Editors and Game Developers",
    focus: "Digital art, editing and game development through workshops, competitions and art events.",
    url: "https://jpegtipmnl.carrd.co/",
  },
  {
    name: "Open Source",
    focus: "A student community for open-source software, collaboration and learning by building.",
    url: "https://www.facebook.com/opensourcetipmph",
  },
  {
    name: "ICONS",
    fullName: "Information & Computing Organization of Networked Students",
    focus: "Connecting computing students through tech talks, activities and events.",
    url: "https://www.facebook.com/iconstipmnl",
  },
]

export const stats = [
  { value: String(programs.length), label: "Degree programs" },
  { value: "ABET", label: "CAC-accredited BSCS" },
  { value: "CHED", label: "Center of Excellence in ITE" },
  { value: "Level III", label: "PACUCOA reaccredited" },
]

// PLACEHOLDER — replace with real student achievements.
export const achievements = [
  { title: "National finalist, collegiate hackathon", who: "BSCS team", year: "2026" },
  { title: "Best Capstone Project, regional ITE congress", who: "BSIT graduating class", year: "2026" },
  { title: "Top 10, inter-school game jam", who: "BSEMC students", year: "2025" },
]
