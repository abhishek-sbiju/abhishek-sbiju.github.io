import { useEffect, useState } from 'react'

export interface LanguageShare {
  name: string
  pct: number
}

export interface GithubInfo {
  followers: number
  publicRepos: number
  since: string | null
  languages: LanguageShare[]
  live: boolean
}

const fallback: GithubInfo = {
  followers: 0,
  publicRepos: 0,
  since: null,
  languages: [],
  live: false,
}

// Module-level cache so every component shares one request per page load.
let cached: GithubInfo | null = null
let pending: Promise<GithubInfo> | null = null

interface RepoLite {
  fork: boolean
  language: string | null
}

function fetchInfo(username: string): Promise<GithubInfo> {
  pending ??= Promise.all([
    fetch(`https://api.github.com/users/${username}`).then((r) => r.json()),
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`).then((r) => r.json()),
  ])
    .then(([user, repos]) => {
      if (typeof user?.public_repos !== 'number') return fallback

      const tally = new Map<string, number>()
      if (Array.isArray(repos)) {
        for (const repo of repos as RepoLite[]) {
          if (!repo.fork && repo.language) {
            tally.set(repo.language, (tally.get(repo.language) ?? 0) + 1)
          }
        }
      }
      const total = [...tally.values()].reduce((a, b) => a + b, 0)
      const languages = [...tally.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([name, count]) => ({ name, pct: Math.round((count / total) * 100) }))

      cached = {
        followers: user.followers ?? 0,
        publicRepos: user.public_repos,
        since: user.created_at ? new Date(user.created_at).getFullYear().toString() : null,
        languages,
        live: true,
      }
      return cached
    })
    .catch(() => fallback)
  return pending
}

export function useGithub(username: string): GithubInfo {
  const [info, setInfo] = useState<GithubInfo>(() => cached ?? fallback)

  useEffect(() => {
    if (cached) return
    let alive = true
    fetchInfo(username).then((result) => {
      if (alive && result.live) setInfo(result)
    })
    return () => {
      alive = false
    }
  }, [username])

  return info
}
