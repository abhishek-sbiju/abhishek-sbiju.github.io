import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  meta?: string
  children: ReactNode
  className?: string
}

export default function Section({
  id,
  eyebrow,
  title,
  meta,
  children,
  className = '',
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-12 border-b border-line ${className}`}>
      <div className="border-b border-line px-5 py-10 sm:px-10 sm:py-12">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
            <div>
              <p className="font-mono text-[10px] tracking-[0.35em] text-accent uppercase">
                {eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight uppercase sm:text-5xl">
                {title}
              </h2>
            </div>
            {meta && (
              <p className="pb-1 font-mono text-[10px] tracking-[0.25em] text-muted uppercase">
                {meta}
              </p>
            )}
          </div>
        </Reveal>
      </div>
      <div>{children}</div>
    </section>
  )
}
