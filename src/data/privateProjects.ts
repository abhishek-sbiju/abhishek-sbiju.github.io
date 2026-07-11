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
      'A full software system per restaurant — website, QR menu, owner admin, and print — that owners control end to end without ever calling a developer. Built across three stacks (Next.js + Firebase sites, Vite menu cards, TanStack Start websites), each with its own visual identity.',
    role: 'Designer & developer',
    features: [
      'Owner-editable menus from Google Sheets — no developer needed',
      'Galleries, reservations, press and testimonials',
      'Secure owner admin per site',
      'Print-ready A4 menu cards generated from the same live menu data',
      'Themes built per brand, not from a template',
    ],
    tags: ['Next.js', 'React', 'Vite', 'TanStack Start', 'Tailwind CSS'],
    note: 'Client repositories — private by contract',
  },
]
