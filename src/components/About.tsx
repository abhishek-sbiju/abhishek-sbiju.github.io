import Section from './Section'
import Reveal from './Reveal'

const currently = [
  'Growing Versor into a subscription SaaS',
  'Building Invariant — a teaching site that refuses to ship an unchecked claim',
  'Practising C++ on Codeforces — DS & DP',
]

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Builder first, student second." meta="Chennai & Goa · IST">
      <div className="grid gap-px bg-line lg:grid-cols-[7fr_5fr]">
        <Reveal className="bg-bg">
          <div className="flex h-full flex-col justify-center space-y-5 px-5 py-12 text-base leading-relaxed text-muted sm:px-10 sm:text-lg">
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
              customer-discovery meetings, and kept knocking on doors until it was running in
              thirteen venues.
            </p>
            <p>
              This summer I was a software engineer intern at FourKites, where I wrote the design
              for the VirtuosoQA → Playwright test migration and built the converter behind it. The
              part I'm proudest of isn't the tests I migrated — it's the oracle I built beside them,
              which reconciles every migrated test against its original recording and blocks any
              test that passes when it shouldn't. A green test that asserts nothing is worse than no
              test at all.
            </p>
            <p>
              That's the standard I hold my own projects to. It's the whole idea behind{' '}
              <a
                href="https://invariant.org.in/learn/dsa"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline decoration-gold underline-offset-4 hover:text-accent"
              >
                Invariant
              </a>
              , where nothing reaches a reader that the build hasn't checked: if it isn't verified,
              it isn't done.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="bg-bg">
          <div className="flex h-full flex-col justify-center px-5 py-12 sm:px-8">
            <p className="font-mono text-[10px] tracking-[0.35em] text-accent uppercase">
              Currently
            </p>
            <ul className="mt-6 space-y-5">
              {currently.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink">
                  <span className="mt-0.5 text-pass" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
