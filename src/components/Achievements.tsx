import { Award } from 'lucide-react'
import { profile as p } from '../data/profile'
import { Section } from './Section'

export function Achievements() {
  return (
    <Section id="achievements" label="05 / ACHIEVEMENTS" title="Badges & Education">
      <div className="grid gap-4 sm:grid-cols-2">
        {p.achievements.map((a) => (
          <div key={a.title} className="flex gap-3 rounded-xl border border-line bg-panel p-4">
            <Award className="shrink-0 text-gold" />
            <div><h3 className="font-semibold text-white">{a.title}</h3><p className="text-sm text-slate-400">{a.detail}</p></div>
          </div>
        ))}
      </div>
      <h3 className="mb-3 mt-10 font-mono text-sm text-accent">EDUCATION</h3>
      <ul className="space-y-3">
        {p.education.map((e) => (
          <li key={e.school} className="flex flex-wrap justify-between gap-2 border-b border-line pb-3">
            <span><span className="font-semibold text-white">{e.school}</span><br /><span className="text-sm text-slate-400">{e.degree}</span></span>
            <span className="font-mono text-xs text-slate-400">{e.period}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
