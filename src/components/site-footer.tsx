export function SiteFooter() {
  return (
    <footer className="container-padding mx-auto max-w-7xl py-10 text-sm text-slate-500 dark:text-slate-400">
      <div className="flex flex-col gap-3 border-t border-slate-200 pt-8 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Unicornia. Built with Next.js and Tailwind CSS.</p>
        <p>Ready for one-click Vercel deployments.</p>
      </div>
    </footer>
  );
}
