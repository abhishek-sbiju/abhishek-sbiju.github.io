import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'

// lucide-react no longer ships brand icons, so the GitHub mark is inlined.
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group flex h-full flex-col bg-bg px-5 py-8 transition-colors duration-300 hover:bg-surface-2 sm:px-8">
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-[10px] tracking-[0.25em] text-muted uppercase">
          {String(index + 1).padStart(2, '0')}
        </p>
        {project.badge && (
          <span className="bg-accent-soft px-2.5 py-1 font-mono text-[10px] tracking-[0.2em] text-accent uppercase">
            {project.badge}
          </span>
        )}
      </div>

      <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">{project.name}</h3>
      <p className="mt-1 text-sm text-muted">{project.tagline}</p>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

      {project.highlight && (
        <p className="mt-5 font-mono text-xs text-accent">✓ {project.highlight}</p>
      )}

      <div className="mt-5 flex items-center justify-between gap-4 border-t border-line pt-4">
        <ul className="flex flex-wrap gap-x-3 gap-y-1">
          {project.tags.map((tag) => (
            <li key={tag} className="font-mono text-xs text-muted">
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="text-muted transition-colors hover:text-accent"
            >
              <GithubIcon className="size-4" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-[11px] tracking-[0.2em] text-accent uppercase underline-offset-4 hover:underline"
            >
              Live
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
