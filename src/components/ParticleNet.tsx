import { useEffect, useRef } from 'react'

export function ParticleNet() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current!
    const ctx = c.getContext('2d')!
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let w = 0, h = 0, raf = 0
    const mouse = { x: -999, y: -999 }
    const pts = Array.from({ length: 70 }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.0004, vy: (Math.random() - 0.5) * 0.0004 }))
    const resize = () => { w = c.width = c.offsetWidth; h = c.height = c.offsetHeight }
    const move = (e: PointerEvent) => { const r = c.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top }
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of pts) {
        p.x = (p.x + p.vx + 1) % 1; p.y = (p.y + p.vy + 1) % 1
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i], ax = a.x * w, ay = a.y * h
        ctx.fillStyle = 'rgba(56,189,248,.7)'
        ctx.beginPath(); ctx.arc(ax, ay, 1.6, 0, 7); ctx.fill()
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(ax - pts[j].x * w, ay - pts[j].y * h)
          if (d < 130) { ctx.strokeStyle = `rgba(167,139,250,${0.25 * (1 - d / 130)})`; ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(pts[j].x * w, pts[j].y * h); ctx.stroke() }
        }
        const dm = Math.hypot(ax - mouse.x, ay - mouse.y)
        if (dm < 160) { ctx.strokeStyle = `rgba(56,189,248,${0.5 * (1 - dm / 160)})`; ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(mouse.x, mouse.y); ctx.stroke() }
      }
      raf = requestAnimationFrame(draw)
    }
    resize(); draw()
    addEventListener('resize', resize); addEventListener('pointermove', move)
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize); removeEventListener('pointermove', move) }
  }, [])
  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 -z-10 h-full w-full" />
}
