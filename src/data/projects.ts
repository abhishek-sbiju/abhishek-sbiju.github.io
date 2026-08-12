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
    name: 'SpaceSaber',
    tagline: '2D space shooter built in Unity',
    description:
      'A fast-paced arcade shooter: three levels, six enemy bot types — three of them tracking the player’s cursor — custom enemy pathfinding, and a soundtrack per level. Reflex-based combat that keeps getting harder the longer you survive.',
    highlight: 'Playable build on itch.io',
    tags: ['Unity', 'C#'],
    github: 'https://github.com/abhishek-sbiju/SpaceSaber',
    live: 'https://abhisheksbiju.itch.io/spacesaber',
  },
  {
    name: 'The Last Human',
    tagline: '2D platformer built in Unity',
    description:
      'Hand-built levels with mouse-aimed combat and double-jump traversal, enemy behaviour written by hand rather than dropped in from a package. Published and playable in the browser, with the C# source public.',
    tags: ['Unity', 'C#'],
    github: 'https://github.com/abhishek-sbiju/TheLastHuman-2DGame-',
    live: 'https://abhisheksbiju.itch.io/thelasthuman',
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
