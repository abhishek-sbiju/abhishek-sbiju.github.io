import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

export interface CodeforcesInfo {
  rating: number
  rank: string
  live: boolean
}

const fallback: CodeforcesInfo = {
  rating: profile.codeforces.fallbackRating,
  rank: profile.codeforces.fallbackRank,
  live: false,
}

// Module-level cache so every component shares one request per page load.
let cached: CodeforcesInfo | null = null
let pending: Promise<CodeforcesInfo> | null = null

function fetchInfo(): Promise<CodeforcesInfo> {
  pending ??= fetch(
    `https://codeforces.com/api/user.info?handles=${profile.codeforces.handle}`,
  )
    .then((res) => res.json())
    .then((data) => {
      const user = data?.result?.[0]
      if (data?.status === 'OK' && typeof user?.rating === 'number') {
        const rank: string = user.rank ?? fallback.rank
        cached = {
          rating: user.rating,
          rank: rank.replace(/\b\w/g, (c: string) => c.toUpperCase()),
          live: true,
        }
        return cached
      }
      return fallback
    })
    .catch(() => fallback)
  return pending
}

export function useCodeforces(): CodeforcesInfo {
  const [info, setInfo] = useState<CodeforcesInfo>(() => cached ?? fallback)

  useEffect(() => {
    if (cached) return
    let alive = true
    fetchInfo().then((result) => {
      if (alive && result.live) setInfo(result)
    })
    return () => {
      alive = false
    }
  }, [])

  return info
}
