import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile as p } from '../data/profile'
import { Section } from './Section'

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    let i = 0
    const t = setInterval(() => { i++; setN(i); if (i >= to) clearInterval(t) }, 90)
    return () => clearInterval(t)
  }, [inView, to])
  return <span ref={ref}>{n}{suffix}</span>
}

export function About() {
  return (
    <Section id="about" label="01 / ABOUT" title="Character Profile">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">{p.about.map((t) => <p key={t}>{t}</p>)}</div>
        <div className="rounded-xl border border-line bg-panel p-5">
          <p className="mb-3 font-mono text-xs tracking-widest text-gold">CHARACTER STATS</p>
          <dl className="grid grid-cols-2 gap-4">
            {p.stats.map((s) => (
              <div key={s.label}>
                <dd className="font-mono text-3xl font-semibold text-white"><Counter to={s.value} suffix={s.suffix} /></dd>
                <dt className="text-xs text-slate-400">{s.label}</dt>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line"><motion.div initial={{ width: 0 }} whileInView={{ width: `${Math.min(100, s.value * 10)}%` }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="h-full rounded-full bg-gradient-to-r from-accent to-violet-400" /></div>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-slate-400">Languages: {p.languages.join(', ')}</p>
        </div>
      </div>
    </Section>
  )
}
