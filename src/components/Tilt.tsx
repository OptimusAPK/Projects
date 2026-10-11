import { useRef, type ReactNode } from 'react'

export function Tilt({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const move = (e: React.PointerEvent) => {
    const el = ref.current!, r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(700px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateY(-4px)`
  }
  const leave = () => { ref.current!.style.transform = '' }
  return <div ref={ref} onPointerMove={move} onPointerLeave={leave} className={`transition-transform duration-200 ease-out ${className}`}>{children}</div>
}
