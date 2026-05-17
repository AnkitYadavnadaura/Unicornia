export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? 'Unicornia',
  description:
    process.env.NEXT_PUBLIC_APP_DESCRIPTION ??
    'A polished Next.js starter template built for Vercel deployments.',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'https://unicornia.vercel.app',
};
