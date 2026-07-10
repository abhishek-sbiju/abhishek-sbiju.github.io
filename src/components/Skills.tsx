import Section from './Section'
import Reveal from './Reveal'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with."
      meta={`${skillGroups.length} groups`}
    >
      <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={(i % 3) * 0.06} className="bg-bg">
            <div className="h-full px-5 py-7 sm:px-8">
              <h3 className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase">
                {group.label}
              </h3>
              <ul className="mt-4">
                {group.items.map((item, j) => (
                  <li
                    key={item}
                    className="group flex items-baseline gap-3 border-b border-line py-2 text-sm text-ink last:border-b-0"
                  >
                    <span className="font-mono text-[10px] text-muted transition-colors duration-300 group-hover:text-accent">
                      {String(j + 1).padStart(2, '0')}
                    </span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
