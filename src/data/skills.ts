export interface SkillGroup {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { label: 'Languages', items: ['C++', 'C#', 'JavaScript', 'TypeScript'] },
  { label: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Vite'] },
  {
    label: 'Backend & Cloud',
    items: ['Node.js', 'Firebase (Firestore, Auth, Storage)', 'Vercel'],
  },
  { label: 'Testing', items: ['Playwright', 'playwright-bdd'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Jira', 'VS Code'] },
  {
    label: 'Competitive Programming',
    items: ['Codeforces Specialist (1505)', 'Data structures', 'Dynamic programming'],
  },
]
