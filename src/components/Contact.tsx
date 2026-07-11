import { Download } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { profile, resumeUrl } from '../data/profile'

const socials = [
  { label: 'GitHub', href: profile.links.github },
  { label: 'LinkedIn', href: profile.links.linkedin },
  { label: 'Codeforces', href: profile.links.codeforces },
  { label: 'versor.in', href: profile.links.versor },
]

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something that ships."
      meta="IST · UTC+5:30"
    >
      <Reveal>
        <div className="watermark px-5 py-14 sm:px-10 sm:py-20">
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            I'm open to software engineering internships, agency projects, and conversations about
            restaurant tech. The fastest way to reach me is email — I reply to everything that
            isn't spam.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 block max-w-full font-display text-[clamp(1.25rem,4.2vw,3.5rem)] leading-tight font-extrabold tracking-tight break-all text-ink transition-colors hover:text-accent"
          >
            {profile.email}
            <span className="mt-2 block h-1 w-full max-w-[16ch] origin-left bg-gold transition-transform duration-300 group-hover:scale-x-110 motion-reduce:transition-none sm:max-w-[24ch]" />
          </a>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 border border-line bg-surface px-6 py-3.5 font-mono text-[11px] tracking-[0.2em] text-ink uppercase transition-colors hover:border-accent hover:text-accent"
            >
              <Download className="size-3.5" aria-hidden="true" />
              Download resume
            </a>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
                  >
                    {social.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
