import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown, Download } from 'lucide-react'
import SpecRunner from './SpecRunner'
import { profile, resumeUrl } from '../../data/profile'

const externalLinks = [
  { label: 'GitHub', href: profile.links.github },
  { label: 'LinkedIn', href: profile.links.linkedin },
  { label: 'Codeforces', href: profile.links.codeforces },
  { label: 'versor.in', href: profile.links.versor },
]

const facts = [
  { label: 'Based', value: profile.location },
  { label: 'Status', value: profile.availability, live: true },
  { label: 'Currently', value: 'SWE Intern @ FourKites · Founder @ Versor' },
]

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const enter = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section className="border-b border-line pt-12">
      <div className="grid gap-px bg-line lg:grid-cols-[7fr_5fr]">
        {/* Headline cell */}
        <div className="flex min-w-0 flex-col justify-center bg-bg px-5 py-14 sm:px-10 lg:py-20">
          <motion.h1
            {...enter(0)}
            className="font-display text-[clamp(3.25rem,9vw,7.5rem)] leading-[0.92] font-extrabold tracking-tight uppercase"
          >
            Ship it.
            <br />
            <span className="text-accent">Prove it.</span>
          </motion.h1>

          <motion.p {...enter(0.15)} className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.subheadline}
          </motion.p>

          <motion.div
            {...enter(0.25)}
            className="mt-10 flex w-full max-w-sm flex-col items-stretch gap-px self-start border border-line bg-line sm:w-auto sm:max-w-none sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-ink px-6 py-3.5 font-mono text-[11px] tracking-[0.2em] text-bg uppercase transition-colors hover:bg-accent hover:text-ink sm:justify-start"
            >
              View projects
              <ArrowDown className="size-3.5" aria-hidden="true" />
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

          <motion.ul {...enter(0.35)} className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
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
          {...enter(0.3)}
          className="watermark flex min-w-0 items-center justify-center bg-bg px-5 py-12 sm:px-8 lg:py-16"
        >
          <SpecRunner />
        </motion.div>
      </div>

      {/* Fact strip — Swiss exposed-grid cells */}
      <div className="grid gap-px border-t border-line bg-line sm:grid-cols-3">
        {facts.map((fact) => (
          <div key={fact.label} className="bg-bg px-5 py-4 sm:px-8">
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
              {fact.label}
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
          </div>
        ))}
      </div>
    </section>
  )
}
