import { useEffect } from 'react'
import { motion, useScroll, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion'

export function Effects() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const glow = useMotionTemplate`radial-gradient(360px circle at ${x}px ${y}px, rgba(56,189,248,0.10), transparent 70%)`

  useEffect(() => {
    const move = (e: PointerEvent) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])

  return (
    <>
      <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 z-30 h-0.5 origin-left bg-gradient-to-r from-accent via-violet-400 to-pink-400" />
      <motion.div style={{ background: glow }} className="pointer-events-none fixed inset-0 -z-10" />
      <div className="orb -left-20 top-20 h-80 w-80 bg-sky-500" />
      <div className="orb -right-20 top-[55vh] h-96 w-96 bg-violet-500" style={{ animationDelay: '-6s' }} />
    </>
  )
}
