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
    name: 'Invariant — Life',
    tagline: 'Offline-first personal operations system',
    description:
      'Work, intake, training, timetable, money and a journal in one dashboard. An Android app writes to Firestore and the laptop reflects it the same second; both halves work offline and reconcile afterwards. The interesting part is not the features — it is the guarantees around them: an event-sourced schema where soft deletes are mandatory, because a hard delete cannot propagate to a device that was offline when it happened.',
    role: 'Architecture, schema and correctness rules mine; application code largely AI-assisted',
    features: [
      'Two halves, two opposite sync rules — study progress merges so it cannot be lost, the life log is last-write-wins per field so a correction is never discarded',
      'Made safe by one schema rule: nothing two devices can touch is ever an array',
      'One of 63 test suites asserts the deployed security rules match the repository — permission-denied is the pass',
      'Writing that suite found a real hole: Firestore evaluates rules with OR, so a blanket grant followed by a deny never revoked anything',
      'Weekly assessments are append-only in the rules, not only in the writer — a re-analysis writes the next revision beside the old one',
    ],
    tags: ['Firestore', 'JavaScript', 'Capacitor', 'Playwright', 'Python'],
    note: 'Owner-only app — walkthrough available on request',
  },
  {
    name: 'Versor Platform Core',
    tagline: 'The engine behind versor.in',
    description:
      'A typed TypeScript core that collapses the per-client menu parsers into one configurable package, plus the multi-tenant admin behind every Versor restaurant. It exists because thirteen forked copies of the same sheet parser drifted apart across the client fleet — the exact silent-config-drift failure that copy-pasted client builds produce.',
    role: 'Founder & solo engineer',
    features: [
      'One venue config absorbs all per-restaurant drift',
      'Google Sheets → live menu sync across every touchpoint',
      'Reads the CSV export rather than Google’s typed JSON endpoint, which silently returns null for a price typed “9000 (1000ml)”',
      'Variant rows fold into one dish; conflicting veg/non-veg flags promote to “both” rather than one silently winning',
      'A missing sheet is a typed error, not a crash — the page renders a fallback menu, because a blank menu during service is the worst possible failure',
      '39-test Vitest suite guarding the core',
    ],
    tags: ['TypeScript', 'Vitest', 'Next.js', 'Firebase'],
    note: 'Source available upon request',
  },
  {
    name: 'Restaurant Client Fleet',
    tagline: '13 production builds for restaurants and cafés',
    description:
      'A full software system per restaurant — website, QR menu, owner admin, and print — that owners control end to end without ever calling a developer. Built across three stacks (Next.js + Firebase sites, Vite menu cards, TanStack Start websites), each with its own visual identity.',
    role: 'Designer & developer',
    features: [
      'Owner-editable menus from Google Sheets — no developer needed',
      'Galleries, reservations, press and testimonials',
      'Secure owner admin per site',
      'Print-ready A4 menu cards designed per brand',
      'Themes built per brand, not from a template',
    ],
    tags: ['Next.js', 'React', 'Vite', 'TanStack Start', 'Tailwind CSS'],
    note: 'Client repositories — private by contract',
  },
]
