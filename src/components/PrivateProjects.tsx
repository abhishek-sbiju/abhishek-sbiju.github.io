import { Lock } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { privateProjects } from '../data/privateProjects'

export default function PrivateProjects() {
  return (
    <Section
      id="private"
      eyebrow="Private work"
      title="Built behind closed doors."
      meta={`${privateProjects.length} private builds`}
    >
      <div className="grid gap-px bg-line lg:grid-cols-3">
        {privateProjects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 3) * 0.08} className="h-full bg-bg">
            <article className="flex h-full flex-col px-5 py-8 sm:px-8">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 bg-accent-soft px-2.5 py-1 font-mono text-[10px] tracking-[0.2em] text-accent uppercase">
                  <Lock className="size-3" aria-hidden="true" />
                  Private repository
                </span>
                <p className="text-right font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                  {project.role}
                </p>
              </div>

              <h3 className="mt-5 font-display text-xl font-bold tracking-tight">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{project.tagline}</p>

              <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

              <ul className="mt-5 flex-1 space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-ink">
                    <span className="mt-0.5 text-pass" aria-hidden="true">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-line pt-4">
                <ul className="flex flex-wrap gap-x-3 gap-y-1">
                  {project.tags.map((tag) => (
                    <li key={tag} className="font-mono text-xs text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-mono text-[10px] tracking-[0.2em] text-accent uppercase">
                  {project.note}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
