import { Award, GraduationCap } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { achievements, certifications, education } from '../data/education'

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I'm studying." meta="2024 — 2028">
      <div className="grid gap-px bg-line lg:grid-cols-2">
        <Reveal className="bg-bg">
          <div className="flex h-full flex-col px-5 py-10 sm:px-10">
            <GraduationCap className="size-6 text-accent" aria-hidden="true" />
            <h3 className="mt-4 font-display text-xl font-bold tracking-tight sm:text-2xl">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-muted">{education.school}</p>
            <p className="mt-5 font-mono text-xs text-muted">
              {education.period} · {education.detail}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="bg-bg">
          <div className="flex h-full flex-col px-5 py-10 sm:px-10">
            <Award className="size-6 text-accent" aria-hidden="true" />
            <h3 className="mt-4 font-display text-xl font-bold tracking-tight sm:text-2xl">
              Achievements
            </h3>
            <ul className="mt-4 space-y-3">
              {achievements.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-0.5 text-pass" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {certifications.length > 0 && (
        <Reveal>
          <div className="border-t border-line px-5 py-10 sm:px-10">
            <h3 className="font-display text-xl font-bold tracking-tight">Certifications</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {certifications.map((cert) => (
                <li key={cert.name} className="text-sm text-muted">
                  <span className="font-medium text-ink">{cert.name}</span> — {cert.issuer},{' '}
                  {cert.year}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      )}
    </Section>
  )
}
