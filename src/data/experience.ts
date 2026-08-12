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
    period: 'May 2026 — Jul 2026',
    summary:
      'End-to-end test automation for Dynamic Yard Management System (YMS), a React/Redux platform for freight-yard operations.',
    bullets: [
      'Authored and published the approved high-level design for the VirtuosoQA → Playwright test migration; a senior engineer then built the team’s base migration tooling per that HLD. Rewrote v2 after parsing six real exports, because v1 was a paper design.',
      'Built a deterministic converter from VirtuosoQA JSON exports to runnable Playwright tests — same output every run, so a migration could be diffed against production instead of trusted. Clean on real 291- and 527-step exports: zero raw XPath, zero unknown actions, low-confidence selectors flagged rather than silently emitted.',
      'Migrated 23 recorded journeys into production Playwright-BDD across 20 merged PRs, each healed green against a live QA environment, and hardened 16 further ad-hoc suites. Filed a genuine application defect rather than masking a filter modal that rendered no options.',
      'Built a dual-engine validation lane: every migrated test is reconciled against its original recording by an oracle that hard-blocks false-greens — a test that passes when it should not cannot ship. Four zero-cost build-time gates run before the ~10-minute QA run.',
      'Moved the mechanical 250-step parse out of the LLM and into a Node converter — my proposal — cutting per-journey turnaround from ~4 h to ~90 min (self-measured) and making runs reproducible. Measured 82% checkpoint recurrence across 111 checkpoints to justify the shared-step approach.',
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
      'Built the whole platform on Next.js and Firebase (Firestore, Auth, Storage), deployed on Vercel: a restaurant edits its menu from Google Sheets or an admin dashboard and it publishes across its QR menu, website and SEO pages.',
      'Built and deployed menu surfaces for 13 restaurants and cafés, and ran 70+ customer-discovery meetings with owners and managers to decide what to actually build.',
      'Extracted the shared sync engine after thirteen forked copies of the per-client parser drifted apart — a typed, tested TypeScript core where one venue config absorbs all per-restaurant difference.',
      'Designed a researched, India-first three-tier pricing architecture with a module-routing rule so every future product has a place without redesigning the pricing page — and converted the unbuilt operations tier from a sold SKU into a waitlist, because a feature reaches the pricing page only once a venue is live on it.',
      'Now converting one-time implementation revenue into subscriptions for the Indian restaurant industry.',
    ],
    stack: ['Next.js', 'TypeScript', 'Firebase', 'Vercel', 'Google Sheets API'],
  },
]
