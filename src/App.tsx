import { Effects } from './components/Effects'
import { Marquee } from './components/Marquee'
import { BackToTop } from './components/BackToTop'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Achievements } from './components/Achievements'
import { Recommendations } from './components/Recommendations'
import { Contact } from './components/Contact'

export default function App() {
  return (
    <>
      <Effects />
      <Nav />
      <main>
        <Hero /><Marquee /><About /><Experience /><Skills /><Projects /><Achievements /><Recommendations /><Contact />
      </main>
      <BackToTop />
    </>
  )
}
