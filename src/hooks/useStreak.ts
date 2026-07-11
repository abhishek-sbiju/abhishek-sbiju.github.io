import { useEffect, useState } from 'react'

export interface StreakInfo {
  total: number
  current: number
  longest: number
  live: boolean
}

const fallback: StreakInfo = { total: 0, current: 0, longest: 0, live: false }

// Module-level cache so every component shares one request per page load.
let cached: StreakInfo | null = null
let pending: Promise<StreakInfo> | null = null

interface ContributionDay {
  date: string
  count: number
}

// github-contributions-api.jogruber.de mirrors the public contribution
// graph (which includes private-contribution counts) with CORS enabled.
function fetchInfo(username: string): Promise<StreakInfo> {
  pending ??= fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
    .then((res) => res.json())
    .then((data) => {
      const days: ContributionDay[] = data?.contributions
      if (!Array.isArray(days) || days.length === 0) return fallback

      const total = days.reduce((sum, day) => sum + day.count, 0)

      let longest = 0
      let run = 0
      for (const day of days) {
        run = day.count > 0 ? run + 1 : 0
        if (run > longest) longest = run
      }

      // Current streak counts back from today; a quiet today doesn't
      // break a streak that ran through yesterday.
      let current = 0
      let i = days.length - 1
      if (days[i]?.count === 0) i--
      for (; i >= 0 && days[i].count > 0; i--) current++

      cached = { total, current, longest, live: true }
      return cached
    })
    .catch(() => fallback)
  return pending
}

export function useStreak(username: string): StreakInfo {
  const [info, setInfo] = useState<StreakInfo>(() => cached ?? fallback)

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
