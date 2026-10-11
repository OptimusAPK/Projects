import { profile as p } from '../data/profile'
import { Tilt } from './Tilt'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projects" label="04 / PROJECTS" title="Notable Work">
      <div className="grid gap-4 sm:grid-cols-2">
        {p.projects.map((pr) => (
          <Tilt key={pr.name}><article className="h-full rounded-xl border border-line bg-panel p-5 transition-colors duration-300 hover:border-accent hover:shadow-[0_8px_30px_rgba(56,189,248,0.15)]">
            <h3 className="font-semibold text-white">{pr.name}</h3>
            <p className="mt-2 text-sm">{pr.desc}</p>
            <p className="mt-3 font-mono text-xs text-accent">{pr.tech.join(' · ')}</p>
          </article></Tilt>
        ))}
      </div>
    </Section>
  )
}
