const links = [['about', 'About'], ['experience', 'Experience'], ['skills', 'Skills'], ['projects', 'Projects'], ['achievements', 'Achievements'], ['recommendations', 'Recommendations'], ['contact', 'Contact']]

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-mono text-sm font-semibold text-white">AP<span className="text-accent">_</span></a>
        <ul className="hidden gap-6 text-sm sm:flex">
          {links.map(([id, l]) => <li key={id}><a className="hover:text-accent" href={`#${id}`}>{l}</a></li>)}
        </ul>
      </nav>
    </header>
  )
}
