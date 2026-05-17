# Unicornia 🦄

A modern, feature-rich **Next.js 14** template with **TypeScript** and **Tailwind CSS**.

## ✨ Features

- ⚡ **Next.js 14** with App Router
- 📘 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- 🔍 **ESLint** for code quality
- 📱 Fully responsive design
- 🌙 Dark mode support
- 🚀 Production-ready setup

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

```
src/
├── app/
│   ├── api/
│   │   └── hello/
│   │       └── route.ts          # API endpoint example
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
└── lib/
    └── utils.ts                  # Utility functions
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
```

## 🎯 Key Files

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
2. Update with your values

### TypeScript
- Configuration in `tsconfig.json`
- Path alias: `@/*` points to `src/`

### Tailwind CSS
- Configuration in `tailwind.config.js`
- Supports dark mode via `prefers-color-scheme`

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
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
