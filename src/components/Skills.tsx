import { motion } from 'framer-motion'
import { profile as p } from '../data/profile'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" label="03 / SKILLS" title="Skill Tree">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(p.skills).map(([cat, items]) => (
          <motion.div key={cat} whileHover={{ y: -4 }} className={`rounded-xl border border-line bg-panel p-5 ${cat.startsWith('AI') ? 'ai-card' : ''}`}>
            <h3 className="mb-3 font-mono text-sm text-gold">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => <span key={s} className="rounded-md border border-line px-2.5 py-1 text-xs text-slate-200 transition hover:-translate-y-0.5 hover:border-accent hover:text-accent">{s}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
