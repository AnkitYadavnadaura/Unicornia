import Link from 'next/link';

import { FeatureCard } from '@/components/feature-card';

const features = [
  {
    title: 'Next.js App Router',
    description:
      'Use file-based routing, server components, metadata, and API route handlers out of the box.',
    icon: '⚡',
  },
  {
    title: 'Vercel-ready',
    description:
      'Deploy instantly to Vercel with framework defaults, zero custom server code, and production scripts.',
    icon: '🚀',
  },
  {
    title: 'TypeScript first',
    description:
      'Strict TypeScript settings, path aliases, and reusable components help teams ship confidently.',
    icon: '📘',
  },
  {
    title: 'Tailwind styling',
    description:
      'A responsive design system with dark-mode tokens, utility classes, and polished starter sections.',
    icon: '🎨',
  },
];

const stats = [
  { label: 'Pages included', value: '2+' },
  { label: 'API routes', value: '1' },
  { label: 'Deploy target', value: 'Vercel' },
];

export default function HomePage() {
  return (
    <div className="container-padding mx-auto max-w-7xl pb-16 pt-10">
      <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fadeIn">
          <p className="mb-5 inline-flex rounded-full border border-violet-200 bg-white/70 px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm backdrop-blur dark:border-violet-400/30 dark:bg-violet-950/30 dark:text-violet-200">
            Production-ready Next.js template
          </p>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Launch your next idea with <span className="gradient-text">Unicornia</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            A complete starter with App Router, TypeScript, Tailwind CSS, SEO metadata, reusable
            components, and an API endpoint that works smoothly on Vercel.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://vercel.com/new"
              className="rounded-full bg-slate-950 px-6 py-3 text-center font-semibold text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-violet-700 dark:bg-white dark:text-slate-950 dark:hover:bg-violet-100"
            >
              Deploy to Vercel
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-center font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-700 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-violet-300"
            >
              Explore template
            </Link>
          </div>
        </div>

        <div className="glass-card relative animate-slideUp rounded-[2rem] p-6">
          <div className="absolute -right-16 -top-16 size-40 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 size-40 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative rounded-3xl bg-slate-950 p-5 text-white shadow-2xl">
            <div className="mb-5 flex gap-2">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-yellow-400" />
              <span className="size-3 rounded-full bg-green-400" />
            </div>
            <pre className="overflow-hidden whitespace-pre-wrap text-sm leading-7 text-slate-300">
              {`npx create-next-app unicornia
cd unicornia
npm run dev

✓ App Router
✓ TypeScript
✓ Tailwind CSS
✓ Vercel deploy`}
            </pre>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card rounded-3xl p-6 text-center">
            <p className="text-3xl font-black text-slate-950 dark:text-white">{stat.value}</p>
            <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </section>
    </div>
  );
}
