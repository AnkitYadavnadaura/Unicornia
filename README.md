# Unicornia 🦄

A modern, feature-rich **Next.js 14** template with **TypeScript**, **Tailwind CSS**, App Router, reusable UI sections, and Vercel-friendly defaults.

## ✨ Features

- ⚡ **Next.js 14** with App Router pages, layouts, metadata, and route handlers
- 📘 **TypeScript** with strict settings and `@/*` path aliases
- 🎨 **Tailwind CSS** with reusable component classes, animations, and dark-mode tokens
- 🧩 Reusable header, footer, and feature-card components
- 🔍 **ESLint** and **Prettier** for code quality and consistent formatting
- 📱 Responsive home and about pages ready to customize
- 🚀 Production build works with Vercel's default Next.js deployment flow

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AnkitYadavnadaura/Unicornia.git
   cd Unicornia
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```text
src/
├── app/
│   ├── api/
│   │   └── health/
│   │       └── route.ts          # Vercel-compatible API endpoint
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── globals.css               # Tailwind layers and global design tokens
│   ├── layout.tsx                # Root layout and SEO metadata
│   └── page.tsx                  # Landing page
├── components/
│   ├── feature-card.tsx          # Reusable feature card
│   ├── site-footer.tsx           # Footer navigation/content
│   └── site-header.tsx           # Header navigation
└── lib/
    └── utils.ts                  # Shared utilities and site config
```

## 📦 Available Scripts

```bash
# Development
npm run dev              # Start dev server at http://localhost:3000

# Production
npm run build            # Build for production
npm start                # Run production server

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix lint issues where possible
npm run type-check       # Run TypeScript without emitting files
npm run format           # Format source files with Prettier
```

## 🚀 Deploy to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Keep the framework preset as **Next.js**.
4. Add any environment variables from `.env.example` that your app needs.
5. Deploy.

No custom server or extra build adapter is required.

## 🎯 Key Files

- **`src/app/page.tsx`** - Polished starter landing page
- **`src/app/about/page.tsx`** - Secondary page example
- **`src/app/api/health/route.ts`** - API route handler example
- **`package.json`** - Project dependencies and scripts
- **`tsconfig.json`** - TypeScript configuration
- **`tailwind.config.js`** - Tailwind CSS configuration
- **`next.config.js`** - Next.js configuration
- **`.env.example`** - Example environment variables

## 🔧 Configuration

### Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Update with your values.

### TypeScript

- Configuration in `tsconfig.json`
- Path alias: `@/*` points to `src/`

### Tailwind CSS

- Configuration in `tailwind.config.js`
- Global component classes are defined in `src/app/globals.css`
- Dark mode is class-based for easy UI toggles later

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Next.js Deployments](https://vercel.com/docs/frameworks/nextjs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.

## 🙋 Support

If you encounter any issues, please open an [issue](https://github.com/AnkitYadavnadaura/Unicornia/issues) on GitHub.

---

Made with ❤️ by [AnkitYadavnadaura](https://github.com/AnkitYadavnadaura)
