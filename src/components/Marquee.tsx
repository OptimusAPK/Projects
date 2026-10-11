const items = ['C#', 'ASP.NET Core', 'Blazor', 'SQL Server', 'WPF', 'WCF', 'REST APIs', 'Kiosk', 'POS', 'Generative AI', 'LLMs', 'AI Agents', 'Agile/Scrum', 'CI/CD']

export function Marquee() {
  const row = [...items, ...items]
  return (
    <div aria-hidden className="overflow-hidden border-y border-line bg-panel/50 py-3 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div className="marquee flex w-max gap-10 font-mono text-sm text-slate-400">
        {row.map((t, i) => <span key={i} className="flex items-center gap-10">{t}<span className="text-accent">✦</span></span>)}
      </div>
    </div>
  )
}
