import Image from "next/image"
import type { Person } from "@/lib/faculty"

export default function PersonCard({ person, headingLevel = "h3" }: { person: Person; headingLevel?: "h3" | "h4" }) {
  const Heading = headingLevel
  return (
    <li data-reveal className="group flex flex-col">
      <div className="overflow-hidden rounded-2xl bg-muted">
        <Image
          src={person.image}
          alt={`Portrait of ${person.name}`}
          width={400}
          height={480}
          className="aspect-[5/6] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <Heading className="mt-4 font-bold leading-snug">{person.name}</Heading>
      <p className="text-sm font-medium text-brand">{person.role}</p>
      <p className="mt-1 text-sm text-muted-foreground">{person.education}</p>
      {person.specialization && <p className="mt-1 text-sm text-muted-foreground">{person.specialization}</p>}
    </li>
  )
}
