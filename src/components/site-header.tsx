import Link from 'next/link';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/api/health', label: 'API' },
];

export function SiteHeader() {
  return (
    <header className="container-padding mx-auto flex max-w-7xl items-center justify-between py-6">
      <Link
        href="/"
        className="flex items-center gap-3 font-bold tracking-tight text-slate-950 dark:text-white"
      >
        <span className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-400 text-xl shadow-lg shadow-violet-500/25">
          🦄
        </span>
        <span>Unicornia</span>
      </Link>
      <nav
        aria-label="Primary navigation"
        className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 p-1 text-sm font-medium shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-950/50"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full px-4 py-2 text-slate-600 transition hover:bg-violet-100 hover:text-violet-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
