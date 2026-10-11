import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(scrollY > 600)
    addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])
  return (
    <a href="#top" aria-label="Back to top" className={`fixed bottom-6 right-6 z-30 rounded-full border border-accent bg-bg/80 p-3 text-accent shadow-[0_0_20px_rgba(56,189,248,.3)] backdrop-blur transition ${show ? 'opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}>
      <ArrowUp size={18} />
    </a>
  )
}
