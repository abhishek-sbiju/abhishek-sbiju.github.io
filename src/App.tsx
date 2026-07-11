import Nav from './components/Nav'
import Hero from './components/hero/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import PrivateProjects from './components/PrivateProjects'
import GithubSection from './components/GithubSection'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      <div className="lg:pl-14">
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <PrivateProjects />
          <GithubSection />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
