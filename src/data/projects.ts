export interface Project {
  name: string
  tagline: string
  description: string
  highlight?: string
  tags: string[]
  github?: string
  live?: string
  badge?: 'Client work' | 'Internal tooling'
  /** Optional screenshot path (put the file in public/ and reference it here). */
  image?: string
}

export const projects: Project[] = [
  {
    name: 'Versor',
    tagline: 'Smart menu platform for restaurants',
    description:
      'A restaurant edits its menu once — from Google Sheets or an admin dashboard — and it publishes instantly across QR menus, Table Tap chips, websites, SEO pages, and printable PDFs. Secure per-restaurant admin, image pipeline, and a deployment setup that onboards a new restaurant in hours.',
    highlight: '5 paying customers · 70+ discovery meetings',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Vercel'],
    live: 'https://versor.in',
  },
  {
    name: 'VirtuosoQA → Playwright Converter',
    tagline: 'Deterministic test-migration engine at FourKites',
    description:
      'Turns recorded VirtuosoQA journeys into runnable Playwright tests with every step accounted for. An eight-tier selector-resolution ladder keeps tests bound to stable, user-facing handles, and a reuse analysis collapsed 36 journeys onto ~111 shared building blocks.',
    highlight: '78 cases / 527 steps converted clean · ~13× step reuse',
    tags: ['Playwright', 'playwright-bdd', 'Node.js'],
    badge: 'Internal tooling',
  },
  {
    name: 'MadrasSquare',
    tagline: 'Restaurant menu & ordering system',
    description:
      'Dynamic menu with real-time updates to items, pricing, and availability, editable by restaurant staff. The ordering flow lets customers submit banquet selections and triggers an automated confirmation email. Built mobile-first, since nearly all traffic is on phones.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'C#'],
    badge: 'Client work',
  },
  {
    name: 'Restaurant sites in production',
    tagline: 'Five+ client websites, idea to live deployment',
    description:
      'A series of production websites and QR menu systems for restaurants and cafés — each with its own visual identity, a Google-Sheet-editable menu, gallery, reservations, and a secure owner admin. The repeatable architecture behind these builds became Versor.',
    highlight: 'Shipped before third year',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Firebase'],
    badge: 'Client work',
  },
]
