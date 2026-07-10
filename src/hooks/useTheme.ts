import { useCallback, useState } from 'react'

// The <html> class is set before first paint by an inline script in
// index.html; this hook just mirrors and toggles it.
export function useTheme() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains('dark'),
  )

  const toggle = useCallback(() => {
    setDark((current) => {
      const next = !current
      document.documentElement.classList.toggle('dark', next)
      try {
        localStorage.setItem('theme', next ? 'dark' : 'light')
      } catch {
        // Private browsing without storage — theme just won't persist.
      }
      return next
    })
  }, [])

  return { dark, toggle }
}
