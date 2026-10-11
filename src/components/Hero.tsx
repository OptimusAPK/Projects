import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Link2, MapPin } from 'lucide-react'
import { ParticleNet } from './ParticleNet'
import { profile as p } from '../data/profile'

function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0)
  const [n, setN] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[i]
    const t = setTimeout(() => {
      if (!del && n < w.length) setN(n + 1)
      else if (!del) setDel(true)
      else if (n > 0) setN(n - 1)
      else { setDel(false); setI((i + 1) % words.length) }
    }, !del && n === w.length ? 1400 : del ? 35 : 70)
    return () => clearTimeout(t)
  }, [n, del, i, words])
  return <span className="gradient-text">{words[i].slice(0, n)}<span className="caret" aria-hidden /></span>
}

export function Hero() {
  return (
    <section id="top" className="relative mx-auto flex min-h-[85vh] max-w-5xl flex-col-reverse items-start justify-center gap-10 px-5 py-10 md:flex-row md:items-center md:justify-between">
      <ParticleNet />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="font-mono text-sm text-accent">&gt; hello, world. I'm</p>
        <h1 className="mt-2 text-5xl font-extrabold text-white sm:text-7xl">{p.name}</h1>
        <h2 className="mt-3 min-h-[2.25rem] text-2xl font-semibold text-slate-200" aria-label={p.title}><Typewriter words={p.roles} /></h2>
        <p className="mt-2 max-w-xl text-slate-400">{p.tagline}</p>
        <p className="mt-4 flex items-center gap-2 text-sm text-slate-400"><MapPin size={16} /> {p.location}</p>
        <p className="mt-2 text-sm text-gold">{p.openTo}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-semibold text-bg hover:brightness-110"><Mail size={18} /> Hire Me</a>
          <a href={p.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 font-semibold text-white hover:border-accent"><Link2 size={18} /> LinkedIn</a>
        </div>
      </motion.div>
      <div className="ring float shrink-0 rounded-2xl">
      <motion.img
        src={`${import.meta.env.BASE_URL}profile.jpg`}
        alt={`Portrait of ${p.name}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="h-56 w-56 shrink-0 rounded-2xl border-2 border-accent object-cover shadow-[0_0_40px_rgba(56,189,248,0.25)] md:h-72 md:w-72"
      />
      </div>
    </section>
  )
}
