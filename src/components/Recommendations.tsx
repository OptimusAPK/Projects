import { Quote } from 'lucide-react'
import { profile as p } from '../data/profile'
import { Section } from './Section'

export function Recommendations() {
  return (
    <Section id="recommendations" label="06 / RECOMMENDATIONS" title="What Others Say">
      <div className="grid gap-4 md:grid-cols-2">
        {p.recommendations.map((r) => (
          <figure key={r.name} className="flex flex-col rounded-xl border border-line bg-panel p-5 transition duration-300 hover:-translate-y-1 hover:border-accent">
            <Quote size={18} className="text-accent" />
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed">{r.text}</blockquote>
            <figcaption className="mt-4 border-t border-line pt-3">
              <span className="font-semibold text-white">{r.name}</span>
              <span className="block text-xs text-slate-400">{r.title}</span>
              <span className="font-mono text-xs text-slate-500">{r.date}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
