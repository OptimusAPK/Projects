import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Section({ id, label, title, children }: { id: string; label: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-20 scroll-mt-12">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}>
        <p className="font-mono text-xs tracking-widest text-accent">{label}</p>
        <h2 className="mt-1 mb-8 text-3xl font-bold text-white sm:text-4xl">{title}<span className="gradient-text">.</span></h2>
        {children}
      </motion.div>
    </section>
  )
}
