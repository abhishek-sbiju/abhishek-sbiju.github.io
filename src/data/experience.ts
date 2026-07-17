export interface ExperienceEntry {
  role: string
  company: string
  companyUrl?: string
  period: string
  summary: string
  bullets: string[]
  stack: string[]
  deck?: { label: string; url: string }
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Software Engineer Intern',
    company: 'FourKites',
    companyUrl: 'https://www.fourkites.com',
    period: 'May 2026 — Present',
    summary:
      'End-to-end test automation for Dynamic Yard Management System (YMS), a React/Redux platform for freight-yard operations.',
    bullets: [
      'Built a deterministic converter from VirtuosoQA JSON exports to runnable Playwright tests, replacing the manual migration of hundreds of recorded end-to-end tests as the team moved off a record-and-playback tool.',
      'Migrated 20+ recorded journeys, reaching 16 of 16 tests passing on a full goal flow; the converter runs clean on real production exports up to 78 cases / 527 steps with no step silently dropped.',
      'Designed an eight-tier selector-resolution ladder that binds tests to stable, user-facing handles (test id, role and name, label) and flags weak matches for review — never emitting a brittle positional path.',
      'Analysed 36 real journeys and found 82% of their steps recur, collapsing them onto ~111 reusable building blocks — a ~13× reduction and the argument for a reuse-first migration; authored and presented the high-level design.',
    ],
    stack: ['Playwright', 'playwright-bdd', 'Node.js', 'React', 'Git', 'Jira'],
    deck: { label: 'Open the interactive work deck', url: '/fourkites-deck.html' },
  },
  {
    role: 'Founder',
    company: 'Versor',
    companyUrl: 'https://versor.in',
    period: 'Jun 2026 — Present',
    summary:
      'versor.in — a smart menu platform for restaurants, built and run end to end as a solo founder.',
    bullets: [
      'Built the whole platform on Next.js and Firebase (Firestore, Auth, Storage), deployed on Vercel: a restaurant edits its menu from Google Sheets or an admin dashboard and it publishes instantly across QR menus, Table Tap chips, websites, SEO pages, and printable PDFs.',
      'Signed 5 paying restaurant customers and ran 70+ customer-discovery meetings with owners and managers to decide what to actually build.',
      'Built secure per-restaurant admin login and image handling, plus a reusable deployment setup that makes onboarding a new restaurant fast instead of a from-scratch build each time.',
      'Now turning Versor into a subscription SaaS for the Indian restaurant industry.',
    ],
    stack: ['Next.js', 'TypeScript', 'Firebase', 'Vercel', 'Google Sheets API'],
  },
]
