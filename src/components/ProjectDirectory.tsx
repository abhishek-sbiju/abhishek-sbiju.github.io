import { useState } from 'react'
import Section from './Section'
import { projectDirectory } from '../data/projectDirectory'

export default function ProjectDirectory() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const categories = ['All', ...new Set(projectDirectory.map(project => project.category))]
  const visible = projectDirectory.filter(project =>
    (category === 'All' || project.category === category) &&
    (project.name + ' ' + project.description).toLowerCase().includes(query.toLowerCase()),
  )
  return (
    <Section id="directory" eyebrow="Explore the work" title="The project directory." meta={projectDirectory.length + ' project overviews'}>
      <p className="max-w-2xl text-muted leading-relaxed mb-6">
        Browse websites, products, research and coursework. Each overview explains the project and which parts are private.
      </p>
      <a className="text-accent underline underline-offset-4" href="https://github.com/abhishek-sbiju/project-showcase/tree/main/demos">Open the demo collection</a>
      <div className="my-8 flex flex-col gap-4 sm:flex-row">
        <label className="flex-1">Search projects
          <input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search by name or purpose" className="mt-2 block w-full border border-line bg-surface p-3 text-ink focus:outline-2 focus:outline-accent" />
        </label>
        <label>Category
          <select value={category} onChange={event => setCategory(event.target.value)} className="mt-2 block w-full border border-line bg-surface p-3 text-ink focus:outline-2 focus:outline-accent">
            {categories.map(value => <option key={value}>{value}</option>)}
          </select>
        </label>
      </div>
      <p role="status" className="mb-4 text-sm text-muted">{visible.length} projects shown</p>
      <div className="divide-y divide-line border-y border-line">
        {visible.map(project => (
          <article key={project.name} className="grid gap-4 py-6 md:grid-cols-[1fr_2fr]">
            <div><p className="text-sm text-muted">{project.category}</p><h3 className="mt-1 font-display text-xl font-bold">{project.name}</h3></div>
            <div>
              <p className="leading-relaxed">{project.description}</p>
              <details className="my-3 text-sm text-muted"><summary className="cursor-pointer text-ink">What is private?</summary><p className="mt-2 leading-relaxed">{project.private}</p></details>
              <div className="flex flex-wrap gap-5 text-sm text-accent">
                <a className="underline underline-offset-4" href={project.overview}>Read project overview<span className="sr-only"> for {project.name}</span></a>
                {project.live && <a className="underline underline-offset-4" href={project.live}>Visit website<span className="sr-only"> for {project.name}</span></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
      {visible.length === 0 && <p className="py-6 text-muted">No projects match. Try another name or select All categories.</p>}
    </Section>
  )
}
