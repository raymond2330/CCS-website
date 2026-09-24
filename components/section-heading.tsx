import type { ReactNode } from "react"

export default function SectionHeading({
  eyebrow,
  title,
  children,
  id,
}: {
  eyebrow: string
  title: string
  children?: ReactNode
  id: string
}) {
  return (
    <div data-reveal className="max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{children}</p>}
    </div>
  )
}
