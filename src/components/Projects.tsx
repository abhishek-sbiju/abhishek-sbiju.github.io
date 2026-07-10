import Section from './Section'
import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Shipped, not shelved.">
      <div className="grid gap-px bg-line md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 0.08} className="h-full bg-bg">
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
