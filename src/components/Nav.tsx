import { useEffect, useState } from 'react'
import { motion, useScroll } from 'motion/react'
import { Download, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { resumeUrl } from '../data/profile'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { scrollYProgress } = useScroll()

  // Scrollspy: light up the section currently in the reading band.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-25% 0px -65% 0px' },
    )
    for (const link of links) {
      const el = document.querySelector(link.href)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Fixed left rail: vertical wordmark over the tiled name watermark. */}
      <div className="fixed inset-y-0 left-0 z-40 hidden w-14 flex-col items-center border-r border-line bg-bg lg:flex">
        <a
          href="#main"
          className="shrink-0 py-6 font-mono text-[11px] font-semibold tracking-[0.35em] text-ink uppercase [writing-mode:vertical-rl]"
        >
          Abhishek Smitha Biju<span className="text-accent">.</span>
        </a>
        <div aria-hidden="true" className="watermark w-full flex-1 border-y border-line" />
        <div className="shrink-0 py-4">
          <ThemeToggle />
        </div>
      </div>

      {/* Hairline top bar with a gold reading-progress hairline. */}
      <header className="fixed top-0 right-0 left-0 z-30 border-b border-line bg-bg/90 backdrop-blur-sm lg:left-14">
        <nav aria-label="Primary" className="flex h-12 items-stretch justify-between">
          <a
            href="#main"
            className="flex items-center border-r border-line px-5 font-mono text-sm font-bold text-ink lg:hidden"
            aria-label="Abhishek Smitha Biju — home"
          >
            ab<span className="text-accent">.</span>
          </a>

          <ul className="hidden items-stretch md:flex">
            {links.map((link) => {
              const isActive = active === link.href
              return (
                <li key={link.href} className="flex">
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`flex items-center gap-2 px-4 font-mono text-[11px] tracking-[0.2em] uppercase transition-colors hover:bg-accent-soft hover:text-ink ${
                      isActive ? 'text-ink' : 'text-muted'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`size-1.5 bg-gold transition-all duration-300 ${
                        isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      }`}
                    />
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-stretch">
            <div className="flex items-center border-l border-line px-3 lg:hidden">
              <ThemeToggle />
            </div>
            <a
              href={resumeUrl}
              download
              className="hidden items-center gap-2 border-l border-line bg-ink px-5 font-mono text-[11px] tracking-[0.2em] text-bg uppercase transition-colors hover:bg-accent hover:text-ink sm:flex"
            >
              <Download className="size-3.5" aria-hidden="true" />
              Resume
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="flex items-center border-l border-line px-4 text-ink md:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>

        <motion.div
          aria-hidden="true"
          style={{ scaleX: scrollYProgress }}
          className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-gold"
        />

        {open && (
          <div className="border-t border-line bg-bg md:hidden">
            <ul>
              {links.map((link) => (
                <li key={link.href} className="border-b border-line last:border-b-0">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-5 py-3 font-mono text-xs tracking-[0.2em] text-ink uppercase transition-colors hover:bg-accent-soft"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={resumeUrl}
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 bg-ink px-5 py-3 font-mono text-xs tracking-[0.2em] text-bg uppercase"
                >
                  <Download className="size-4" aria-hidden="true" />
                  Download resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  )
}
