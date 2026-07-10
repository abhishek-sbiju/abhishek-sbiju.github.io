import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import SpecRunner from './SpecRunner'
import { profile, resumeUrl } from '../../data/profile'
import { useCodeforces } from '../../hooks/useCodeforces'

const externalLinks = [
  { label: 'GitHub', href: profile.links.github },
  { label: 'LinkedIn', href: profile.links.linkedin },
  { label: 'Codeforces', href: profile.links.codeforces },
  { label: 'versor.in', href: profile.links.versor },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const cf = useCodeforces()

  const enter = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  })

  // Headline lines rise out of a clipped block, one after the other.
  const line = (delay: number) => ({
    initial: reduceMotion ? false : { y: '110%' },
    animate: { y: '0%' },
    transition: { duration: 0.75, delay, ease },
  })

  const facts = [
    { label: 'Based', value: profile.location },
    { label: 'Status', value: profile.availability, live: true },
    { label: 'Currently', value: 'SWE Intern @ FourKites · Founder @ Versor' },
    {
      label: 'Codeforces',
      value: `${cf.rank} · ${cf.rating}`,
      href: profile.links.codeforces,
      live: cf.live,
    },
  ]

  return (
    <section className="border-b border-line pt-12">
      <div className="grid gap-px bg-line lg:grid-cols-[7fr_5fr]">
        {/* Headline cell */}
        <div className="flex min-w-0 flex-col justify-center bg-bg px-5 py-14 sm:px-10 lg:py-20">
          <h1 className="font-display text-[clamp(3.25rem,9vw,7.5rem)] leading-[0.92] font-extrabold tracking-tight uppercase">
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span {...line(0.05)} className="block">
                Ship it.
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span {...line(0.2)} className="text-foil block">
                Prove it.
              </motion.span>
            </span>
          </h1>

          <motion.p
            {...enter(0.35)}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.subheadline}
          </motion.p>

          <motion.div
            {...enter(0.45)}
            className="mt-10 flex w-full max-w-sm flex-col items-stretch gap-px self-start border border-line bg-line sm:w-auto sm:max-w-none sm:flex-row"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 bg-ink px-6 py-3.5 font-mono text-[11px] tracking-[0.2em] text-bg uppercase transition-colors hover:bg-accent hover:text-ink sm:justify-start"
            >
              View projects
              <ArrowDown
                className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 bg-bg px-6 py-3.5 font-mono text-[11px] tracking-[0.2em] text-ink uppercase transition-colors hover:bg-accent-soft sm:justify-start"
            >
              <Download className="size-3.5" aria-hidden="true" />
              Download resume
            </a>
          </motion.div>

          <motion.ul {...enter(0.55)} className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {externalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Spec-runner cell, watermark filling the empty space around it */}
        <motion.div
          {...enter(0.4)}
          className="watermark flex min-w-0 items-center justify-center bg-bg px-5 py-12 sm:px-8 lg:py-16"
        >
          <SpecRunner />
        </motion.div>
      </div>

      {/* Fact strip — Swiss exposed-grid cells */}
      <div className="grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => {
          const body = (
            <>
              <p className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
                {fact.label}
                {fact.href && <ArrowUpRight className="ml-1 inline size-3" aria-hidden="true" />}
              </p>
              <p className="mt-1.5 flex items-center gap-2 font-mono text-xs text-ink sm:text-[13px]">
                {fact.live && (
                  <span className="relative flex size-2" aria-hidden="true">
                    <span className="absolute inline-flex size-full animate-ping bg-gold opacity-50 motion-reduce:animate-none" />
                    <span className="relative inline-flex size-2 bg-gold" />
                  </span>
                )}
                {fact.value}
              </p>
            </>
          )
          return fact.href ? (
            <a
              key={fact.label}
              href={fact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bg px-5 py-4 transition-colors hover:bg-surface-2 sm:px-8"
            >
              {body}
            </a>
          ) : (
            <div key={fact.label} className="bg-bg px-5 py-4 sm:px-8">
              {body}
            </div>
          )
        })}
      </div>
    </section>
  )
}
