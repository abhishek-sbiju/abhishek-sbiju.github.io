import { ArrowUpRight } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { profile } from '../data/profile'
import { useGithub } from '../hooks/useGithub'

const USERNAME = 'abhishek-sbiju'

// Public widget services, themed to the paper/ink/gold system.
// A daily cache-buster keeps the charts current — both services cache
// aggressively, and the calendar includes private-contribution counts.
const TODAY = new Date().toISOString().slice(0, 10)
const CHART = `https://ghchart.rshah.org/8f7317/${USERNAME}?d=${TODAY}`
const STREAK = `https://streak-stats.demolab.com?user=${USERNAME}&hide_border=true&background=FAF9F5&ring=d4af37&fire=d4af37&stroke=e3e0d5&currStreakLabel=8f7317&sideLabels=1b1a16&currStreakNum=1b1a16&sideNums=1b1a16&dates=6b675a&d=${TODAY}`

function hideOnError(event: React.SyntheticEvent<HTMLImageElement>) {
  event.currentTarget.style.display = 'none'
}

export default function GithubSection() {
  const gh = useGithub(USERNAME)

  const stats = [
    { label: 'Public repos', value: gh.live ? String(gh.publicRepos) : '—' },
    { label: 'Followers', value: gh.live ? String(gh.followers) : '—' },
    { label: 'On GitHub since', value: gh.since ?? '—' },
  ]

  return (
    <Section
      id="github"
      eyebrow="GitHub"
      title="Proof of work."
      meta={
        gh.live
          ? `${gh.publicRepos} public repos · ${gh.followers} ${gh.followers === 1 ? 'follower' : 'followers'}`
          : `github.com/${USERNAME}`
      }
    >
      <div className="grid gap-px bg-line">
        <Reveal className="bg-bg">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group block px-5 py-8 transition-colors hover:bg-surface-2 sm:px-10"
            aria-label="Contribution calendar — open GitHub profile"
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase">
                Contribution calendar
              </p>
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase group-hover:text-accent">
                @{USERNAME}
                <ArrowUpRight className="ml-1 inline size-3" aria-hidden="true" />
              </p>
            </div>
            <img
              src={CHART}
              alt={`GitHub contribution calendar for ${USERNAME}`}
              loading="lazy"
              onError={hideOnError}
              className="mt-5 w-full"
            />
          </a>
        </Reveal>

        <div className="grid gap-px bg-line md:grid-cols-3">
          {/* Profile stats — live from the GitHub REST API */}
          <Reveal className="h-full bg-bg">
            <div className="flex h-full flex-col px-5 py-7 sm:px-8">
              <p className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase">
                Profile stats
              </p>
              <ul className="mt-4 flex-1">
                {stats.map((stat) => (
                  <li
                    key={stat.label}
                    className="flex items-baseline justify-between gap-3 border-b border-line py-2.5 last:border-b-0"
                  >
                    <span className="text-sm text-muted">{stat.label}</span>
                    <span className="font-mono text-sm font-semibold text-ink">{stat.value}</span>
                  </li>
                ))}
              </ul>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 font-mono text-[11px] tracking-[0.2em] text-accent uppercase underline-offset-4 hover:underline"
              >
                @{USERNAME} ↗
              </a>
            </div>
          </Reveal>

          {/* Most used languages — aggregated live from public repos */}
          <Reveal delay={0.08} className="h-full bg-bg">
            <div className="flex h-full flex-col px-5 py-7 sm:px-8">
              <p className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase">
                Most used languages
              </p>
              {gh.languages.length > 0 ? (
                <ul className="mt-4 space-y-3.5">
                  {gh.languages.map((lang) => (
                    <li key={lang.name}>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-sm text-ink">{lang.name}</span>
                        <span className="font-mono text-xs text-muted">{lang.pct}%</span>
                      </div>
                      <div className="mt-1.5 h-1 w-full bg-surface-2">
                        <div className="h-full bg-gold" style={{ width: `${lang.pct}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-muted">
                  Live from the GitHub API — loading, or check the profile directly.
                </p>
              )}
            </div>
          </Reveal>

          {/* Contribution streak — themed widget */}
          <Reveal delay={0.16} className="h-full bg-bg">
            <div className="flex h-full flex-col px-5 py-7 sm:px-8">
              <p className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase">
                Contribution streak
              </p>
              <div className="mt-4 flex flex-1 items-center">
                <img
                  src={STREAK}
                  alt={`GitHub contribution streak for ${USERNAME}`}
                  loading="lazy"
                  onError={hideOnError}
                  className="w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
