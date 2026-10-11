import { Briefcase } from 'lucide-react'
import { profile as p } from '../data/profile'
import { Section } from './Section'

export function Experience() {
  return (
    <Section id="experience" label="02 / EXPERIENCE" title="Quest Log">
      <ol className="relative ml-3 border-l border-line">
        {p.experience.map((e, i) => (
          <li key={i} className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border border-accent bg-bg text-accent"><Briefcase size={12} /></span>
            <p className="font-mono text-xs text-accent">{e.period} · {e.location}</p>
            <h3 className="text-lg font-semibold text-white">{e.role}</h3>
            <p className="text-slate-400">{e.company}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm marker:text-accent">
              {e.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
