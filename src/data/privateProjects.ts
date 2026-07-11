export interface PrivateProject {
  name: string
  tagline: string
  description: string
  role: string
  features: string[]
  tags: string[]
  note: string
}

export const privateProjects: PrivateProject[] = [
  {
    name: 'Versor Platform Core',
    tagline: 'The engine behind versor.in',
    description:
      'A TypeScript core that unified eleven divergent menu-data forks into one configurable package, plus the multi-tenant admin behind every Versor restaurant. Solved silent config drift across copy-pasted client builds — onboarding a new restaurant went from days of from-scratch work to hours of configuration.',
    role: 'Founder & solo engineer',
    features: [
      'One venue config absorbs all per-restaurant drift',
      'Google Sheets → live menu sync across every touchpoint',
      'Secure per-venue admin with image handling',
      '50-test Vitest suite guarding the core',
    ],
    tags: ['TypeScript', 'Next.js', 'Firebase', 'Vitest'],
    note: 'Source available upon request',
  },
  {
    name: 'Restaurant Client Fleet',
    tagline: '~12 production builds for paying clients',
    description:
      'Production websites and QR menu cards for cafés and restaurants, built across three stacks — Next.js + Firebase sites, Vite menu cards, and TanStack Start websites — each with its own visual identity. Solved the real owner problem: menus they could edit themselves from a spreadsheet, without calling a developer.',
    role: 'Designer & developer',
    features: [
      'Owner-editable menus from Google Sheets',
      'Galleries, reservations, press and testimonials',
      'Secure owner admin per site',
      'Themes built per brand, not from a template',
    ],
    tags: ['Next.js', 'React', 'Vite', 'TanStack Start', 'Tailwind CSS'],
    note: 'Client repositories — private by contract',
  },
  {
    name: 'Print Menu Studio',
    tagline: 'Six premium A4 menu-card templates',
    description:
      'Art-directed print menu templates with an HTML-to-PDF pipeline, driven by the same menu data that powers the digital menus. Solved the last mile of the one-edit-everywhere promise: the printed card on the table stays in sync with the QR menu.',
    role: 'Designer & developer',
    features: [
      'Six distinct art-directed layouts',
      'Data-driven from the live menu source',
      'Print-ready A4 PDFs on demand',
    ],
    tags: ['HTML/CSS', 'PDF pipeline', 'TypeScript'],
    note: 'Versor internal asset',
  },
]
