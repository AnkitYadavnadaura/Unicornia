import type { ReactNode } from 'react';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="glass-card group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/10">
      <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-2xl shadow-lg shadow-violet-500/20 transition group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{description}</p>
    </article>
  );
}
