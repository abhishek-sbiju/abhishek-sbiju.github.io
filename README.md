# abhishek-sbiju.github.io

Personal developer portfolio for **Abhishek Smitha Biju** — software engineer & founder.

Built around a "verified build" idea: the hero is a Playwright-style spec that runs and passes on page load, because the through-line of my work (test automation at FourKites, five paying Versor customers) is software that's *proven* to work, not just claimed to. The visual system is the Versor "Exposed Grid" language — paper/ink/gold, Swiss hairline grid, left rail with vertical wordmark, 45° tiled name watermark.

**Stack:** React 19 · Vite · TypeScript · Tailwind CSS v4 · Motion · Lucide icons · self-hosted variable fonts (Bricolage Grotesque, Spline Sans Mono).

## Getting started

```bash
npm install     # install dependencies
npm run dev     # dev server with HMR at http://localhost:5173
npm run build   # type-check + production build into dist/
npm run preview # serve the production build locally
```

## Editing content

All portfolio content lives in `src/data/` — no component edits needed:

| File | What it holds |
| --- | --- |
| `profile.ts` | Name, headline, location, email, social links, resume filename, Codeforces handle |
| `experience.ts` | Roles, dates, bullets, stack |
| `projects.ts` | Featured project cards (GitHub / live links, tags, badges, optional `image`) |
| `privateProjects.ts` | Private-repo showcase cards (role, features, tags, note) |
| `skills.ts` | Skill groups |
| `education.ts` | Degree, achievements, certifications (empty array = section hidden) |

The resume served by the download buttons is `public/Abhishek_Smitha_Biju_Resume.pdf` — replace that file to update it.

### Live data

- **Codeforces rating** — `src/hooks/useCodeforces.ts` fetches the official Codeforces API on load; change the handle (and offline fallback) in `profile.ts`.
- **GitHub numbers** — `src/hooks/useGithub.ts` fetches the public GitHub API for repo/follower counts; the contribution calendar, stats card, top languages, and streak in `src/components/GithubSection.tsx` come from public widget services (ghchart.rshah.org, github-readme-stats, streak-stats) themed to the palette. Change `USERNAME` there to point at another account.

## Customization

- **Identity** — start in `src/data/profile.ts`; every section reads from it.
- **Screenshots** — drop an image into `public/` and set `image: '/your-shot.png'` on any project in `projects.ts`; the card grows a 16:9 figure above the text.
- **Palette & type** — all tokens are CSS variables at the top of `src/index.css` (`--c-*`), mapped into Tailwind via `@theme inline`. The gold, paper, ink, and pass-green live there; change them once and the whole site follows.
- **Watermark** — the 45° drifting "security print" is an inline SVG data-URI in `src/index.css` (`--watermark`); replace the text `abhishek` inside it with your own mark.
- **Certifications** — add entries to the `certifications` array in `education.ts` and the section appears automatically.

## Deploying to GitHub Pages

This repo is a **user site**: pushing to `main` on a repo named `abhishek-sbiju.github.io` publishes to `https://abhishek-sbiju.github.io/`.

### Option A — GitHub Actions (recommended, already configured)

1. Create the GitHub repo `abhishek-sbiju.github.io` and push:
   ```bash
   git remote add origin https://github.com/abhishek-sbiju/abhishek-sbiju.github.io.git
   git push -u origin main
   ```
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.

### Option B — manual deploy with gh-pages

```bash
npm run deploy   # builds and pushes dist/ to the gh-pages branch
```

Then set **Settings → Pages → Source: Deploy from a branch → gh-pages**.

> If you ever fork this into a *project* repo (e.g. `portfolio`), set `base: '/portfolio/'` in `vite.config.ts` so assets resolve under the sub-path.

## Design notes

- **Palette:** Versor paper/ink/gold, single light theme by design; gold `#d4af37` is the brand voice, green marks verification (test ✓, live dots), hairlines carry the structure, zero border radius. Tokens live in `src/index.css` as CSS variables mapped into Tailwind via `@theme inline`.
- **Live data:** the Codeforces rating in the hero and spec runner comes from the Codeforces API at load (`src/hooks/useCodeforces.ts`), with a static fallback.
- **Motion:** scroll reveals and the hero spec-runner respect `prefers-reduced-motion` (static, all-passed state).
- **Accessibility:** semantic landmarks, skip link, visible focus rings, aria labels on icon buttons, decorative code panel hidden from screen readers with an `sr-only` summary.
