import Section from './Section'
import Reveal from './Reveal'

const currently = [
  'Interning on test automation at FourKites, Chennai',
  'Growing Versor into a subscription SaaS',
  'Practising C++ on Codeforces — DS & DP',
]

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Builder first, student second." meta="Chennai & Goa · IST">
      <div className="grid gap-px bg-line lg:grid-cols-[7fr_5fr]">
        <Reveal className="bg-bg">
          <div className="space-y-5 px-5 py-10 text-base leading-relaxed text-muted sm:px-10 sm:text-lg">
            <p>
              I'm Abhishek — a third-year computer science student at BITS Pilani, Goa, who would
              rather ship something real than polish a toy project. In my first two years I founded{' '}
              <a
                href="https://versor.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline decoration-gold underline-offset-4 hover:text-accent"
              >
                Versor
              </a>
              , a smart-menu platform for restaurants. I wrote every layer of it, sat through 70+
              customer-discovery meetings, and kept knocking on doors until five restaurants were
              paying for it.
            </p>
            <p>
              This summer I'm a software engineer intern at FourKites, building the converter that
              turns recorded VirtuosoQA journeys into runnable Playwright tests — work where the
              output isn't a promise, it's a passing suite. That's the standard I hold my own
              projects to: if it isn't verified, it isn't done.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="bg-bg">
          <div className="flex h-full flex-col px-5 py-10 sm:px-8">
            <p className="font-mono text-[10px] tracking-[0.35em] text-accent uppercase">
              Currently
            </p>
            <ul className="mt-5 space-y-4">
              {currently.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink">
                  <span className="mt-0.5 text-accent" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div aria-hidden="true" className="watermark mt-8 min-h-16 flex-1 border-t border-line" />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
