import { useState, type FormEvent } from 'react'
import { Send, Link2 } from 'lucide-react'
import { profile as p } from '../data/profile'
import { Section } from './Section'

const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined
const field = 'w-full rounded-lg border border-line bg-panel px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-accent focus:outline-none'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('_gotcha')) return
    setStatus('sending')
    try {
      const r = await fetch(endpoint!, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      if (!r.ok) throw new Error()
      setStatus('sent'); form.reset()
    } catch { setStatus('error') }
  }

  return (
    <Section id="contact" label="07 / CONTACT" title="Get in Touch">
      <p className="mb-6 max-w-xl">{p.openTo} Send a message and it will be forwarded straight to my inbox.</p>
      {endpoint ? (
        <form onSubmit={submit} className="grid max-w-xl gap-3">
          <input name="name" required placeholder="Your name" aria-label="Your name" className={field} />
          <input name="email" type="email" required placeholder="Your email" aria-label="Your email" className={field} />
          <textarea name="message" required rows={5} placeholder="Message" aria-label="Message" className={field} />
          <input name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
          <div className="flex flex-wrap items-center gap-3">
            <button disabled={status === 'sending'} className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-semibold text-bg hover:brightness-110 disabled:opacity-60"><Send size={18} /> {status === 'sending' ? 'Sending…' : 'Send message'}</button>
            <a href={p.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 font-semibold text-white hover:border-accent"><Link2 size={18} /> LinkedIn</a>
          </div>
          <p role="status" className="text-sm">
            {status === 'sent' && <span className="text-emerald-400">Thanks, your message was sent.</span>}
            {status === 'error' && <span className="text-red-400">Something went wrong. Please message me on LinkedIn.</span>}
          </p>
        </form>
      ) : (
        <a href={p.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-semibold text-bg hover:brightness-110"><Link2 size={18} /> Message me on LinkedIn</a>
      )}
      <p className="mt-16 text-xs text-slate-500">© {new Date().getFullYear()} {p.name}</p>
    </Section>
  )
}
