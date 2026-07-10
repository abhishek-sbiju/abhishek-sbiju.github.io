import Section from './Section'
import Reveal from './Reveal'
import { profile } from '../data/profile'

const socials = [
  { label: 'GitHub', href: profile.links.github },
  { label: 'LinkedIn', href: profile.links.linkedin },
  { label: 'Codeforces', href: profile.links.codeforces },
]

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something that ships.">
      <Reveal>
        <div className="watermark px-5 py-12 sm:px-10 sm:py-16">
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            I'm open to software engineering internships, freelance builds, and conversations about
            restaurant tech. The fastest way to reach me is email — I reply to everything that
            isn't spam.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block max-w-full border-b-2 border-gold pb-1 font-mono text-base font-semibold tracking-tight break-all text-ink transition-colors hover:text-accent sm:text-2xl"
          >
            {profile.email}
          </a>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
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
      </Reveal>
    </Section>
  )
}
