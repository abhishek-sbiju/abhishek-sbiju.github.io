export interface Project {
  name: string
  tagline: string
  description: string
  highlight?: string
  tags: string[]
  github?: string
  live?: string
  badge?: 'Client work' | 'Internal tooling' | 'Open source'
  /** Optional screenshot path (put the file in public/ and reference it here). */
  image?: string
}

export const projects: Project[] = [
  {
    name: 'Invariant — Learn',
    tagline: 'Algorithms and chess trainer that checks its own build',
    description:
      'A teaching site built on one rule: nothing reaches a reader that the build has not checked. Lessons are generated from data by a Python pipeline, then audited for design-token drift and drill-answer bias — and the audit reads the built HTML, so a page that forgot to rebuild fails too. 1,128 chess exercises are decoded from the book’s own diagram glyphs rather than typed in: the font encodes each square’s colour in letter case, so a mis-sliced grid contradicts itself on the first row.',
    highlight: '1,128 exercises decoded · the verifier is itself tested by corrupting a number',
    tags: ['Python', 'JavaScript', 'Playwright', 'chess.js'],
    github: 'https://github.com/abhishek-sbiju/invariant-build',
    live: 'https://invariant.org.in/learn/dsa',
    badge: 'Open source',
  },
  {
    name: 'Versor',
    tagline: 'Smart menu platform for restaurants',
    description:
      'A restaurant edits its menu once — from Google Sheets or an admin dashboard — and it publishes across its QR menu, website and SEO pages, so nothing goes stale in one place and not another. Secure per-restaurant admin, image pipeline, and a templated onboarding setup that turned near-identical client builds into a product.',
    highlight: 'Deployed for 13 restaurants and cafés · 70+ discovery meetings',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Vercel'],
    live: 'https://versor.in',
  },
  {
    name: 'VirtuosoQA → Playwright Converter',
    tagline: 'Deterministic test-migration engine at FourKites',
    description:
      'Turns recorded VirtuosoQA journeys into runnable Playwright tests with every step accounted for — same output every run, so a migration can be diffed against production instead of trusted. A selector-resolution ladder keeps tests bound to stable, user-facing handles and flags low-confidence matches rather than silently emitting them.',
    highlight: 'Clean on 291- and 527-step exports · zero raw XPath, zero unknown actions',
    tags: ['Playwright', 'playwright-bdd', 'Node.js'],
    badge: 'Internal tooling',
  },
  {
    name: 'MadrasSquare',
    tagline: 'Restaurant menu & ordering system',
    description:
      'Dynamic menu with real-time updates to items, pricing, and availability, editable by restaurant staff. The ordering flow lets customers submit banquet selections and triggers an automated confirmation email. Built mobile-first, since nearly all traffic is on phones.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'C#'],
    live: 'https://madras-square.vercel.app',
    badge: 'Client work',
  },
  {
    name: 'SpaceSaber & The Last Human',
    tagline: 'Two Unity games, built and published',
    description:
      'A 2D space shooter and a 2D platformer, both built through Unity course projects and taken all the way to a published, browser-playable build — art, audio, packaging and release included. On SpaceSaber I reworked the level layouts and the menu rather than shipping the course’s; the underlying gameplay systems are the course’s own. How I learned that finishing and shipping is a separate skill from writing the code.',
    highlight: 'Playable in the browser · source public',
    tags: ['Unity', 'C#'],
    github: 'https://github.com/abhishek-sbiju/SpaceSaber',
    // Profile page rather than a single game, so it lists whatever is actually
    // published — SpaceSaber's README says "Play Now", The Last Human's still
    // says "Play Soon".
    live: 'https://abhisheksbiju.itch.io',
  },
  {
    name: 'Restaurant sites in production',
    tagline: 'Thirteen client builds, idea to live deployment',
    description:
      'A series of production websites and QR menu systems for restaurants and cafés — each with its own visual identity, a Google-Sheet-editable menu, gallery, reservations, and a secure owner admin. The repeatable architecture behind these builds became Versor.',
    highlight: 'Shipped before third year',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Firebase'],
    live: 'https://ak7royalemirates.com',
    badge: 'Client work',
  },
]
