import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn what is included in the Unicornia Next.js template.',
};

const checklist = [
  'App Router pages and layouts',
  'Reusable header, footer, and feature components',
  'Tailwind CSS theme tokens and responsive utilities',
  'Vercel-compatible API route handler',
  'Strict TypeScript configuration with path aliases',
  'SEO metadata defaults for social sharing',
];

export default function AboutPage() {
  return (
    <div className="container-padding mx-auto max-w-5xl py-16">
      <div className="glass-card rounded-[2rem] p-8 sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-600 dark:text-violet-300">
          About the template
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          Everything you need to start building on Next.js.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Unicornia is intentionally lightweight while still including the structure teams expect in
          a modern application. Clone it, customize the sections, connect your data, and deploy to
          Vercel.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {checklist.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-2xl border border-slate-200 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm text-white">
                ✓
              </span>
              <p className="font-medium text-slate-700 dark:text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
