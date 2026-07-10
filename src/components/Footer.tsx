import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-start justify-between gap-3 px-5 py-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:px-10">
        <p>
          <span className="text-pass">✓ all sections passed</span> · built with React, Vite &
          Tailwind
        </p>
        <p>
          © {new Date().getFullYear()} {profile.name} ·{' '}
          <a
            href="#main"
            className="underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            back to top ↑
          </a>
        </p>
      </div>
    </footer>
  )
}
