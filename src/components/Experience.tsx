import { ArrowUpRight } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="The run log."
      meta={`${experience.length} roles · 2026`}
    >
      <div className="grid gap-px bg-line">
        {experience.map((entry, i) => (
          <Reveal key={entry.company} delay={i * 0.08} className="bg-bg">
            <article className="grid gap-6 px-5 py-10 sm:px-10 lg:grid-cols-[220px_1fr] lg:gap-10">
              <div>
                <p className="font-mono text-xs text-muted">{entry.period}</p>
                <p className="mt-2 font-mono text-[10px] tracking-[0.25em] text-pass uppercase">
                  ✓ verified
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                  {entry.role}
                  {' · '}
                  {entry.companyUrl ? (
                    <a
                      href={entry.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-accent underline-offset-4 hover:underline"
                    >
                      {entry.company}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="text-accent">{entry.company}</span>
                  )}
                </h3>

                <p className="mt-2 max-w-3xl text-sm text-muted italic">{entry.summary}</p>

                <ul className="mt-5 max-w-3xl space-y-2.5">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed text-ink sm:text-[15px]"
                    >
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 bg-gold" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 font-mono text-xs text-muted">{entry.stack.join(' · ')}</p>

                {entry.deck && (
                  <a
                    href={entry.deck.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 font-mono text-xs tracking-[0.15em] text-accent uppercase underline-offset-4 hover:underline"
                  >
                    {entry.deck.label}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
