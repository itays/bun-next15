# Claude.md - Project Context for AI Assistants

## Project Overview

This is a modern Next.js 15 starter template built with React 19 (RC), TypeScript, and Tailwind CSS. The project uses Bun as the JavaScript runtime and package manager, and includes a comprehensive suite of development tools for code quality, formatting, and git workflow automation.

**Project Type:** Full-stack web application starter template
**Created From:** `create-next-app` with custom enhancements
**Current State:** Boilerplate/starter stage - ready for feature development

## Tech Stack

### Core Framework
- **Next.js 15.0.3** - Modern React framework with App Router (file-based routing)
- **React 19.0.0 RC** - Latest React version (pre-release)
- **TypeScript 5** - Full type safety support
- **Bun** - JavaScript runtime and package manager

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8** - CSS transformation tool
- **Geist Fonts** - Custom font family (Sans and Mono variants)
- **Dark Mode** - Configured via Tailwind with CSS variables

### Development Tools & Code Quality
- **ESLint 8** - Code linting with plugins:
  - `eslint-plugin-unicorn` - JavaScript/TypeScript best practices
  - `eslint-plugin-import` - Import/export validation
  - `eslint-plugin-simple-import-sort` - Automatic import sorting
  - `eslint-plugin-playwright` - E2E testing support
  - `eslint-plugin-prettier` - Prettier integration
- **Prettier 3.3.3** - Code formatting with Tailwind class sorting
- **Husky 8** - Git hooks management
- **Commitizen 4** - Interactive conventional commits
- **CommitLint 19** - Enforce commit message standards

## Project Structure

```
bun-next15/
├── src/
│   └── app/                          # Next.js App Router directory
│       ├── layout.tsx                # Root layout component
│       ├── page.tsx                  # Home page (landing page)
│       ├── globals.css               # Global Tailwind & theme variables
│       ├── favicon.ico               # Site favicon
│       └── fonts/
│           ├── GeistVF.woff          # Geist Sans font
│           └── GeistMonoVF.woff      # Geist Mono font
│
├── public/                           # Static assets (served at root URL)
│   ├── next.svg
│   ├── vercel.svg
│   ├── file.svg
│   ├── globe.svg
│   └── window.svg
│
├── Configuration Files:
│   ├── package.json                  # Dependencies & npm scripts
│   ├── tsconfig.json                 # TypeScript compiler options
│   ├── next.config.ts                # Next.js configuration
│   ├── tailwind.config.ts            # Tailwind CSS configuration
│   ├── postcss.config.mjs            # PostCSS configuration
│   ├── .eslintrc.json                # ESLint configuration
│   ├── prettier.config.js            # Prettier formatting config
│   ├── commitlint.config.cjs         # Commit linting rules
│   └── .gitignore                    # Git ignore patterns
│
└── .husky/                           # Git hooks
    ├── pre-commit                    # Runs: bun lint && bun type-check
    └── prepare-commit-msg            # Runs: commitizen
```

## Key Conventions & Patterns

### Import Path Alias
- `@/*` maps to `./src/*` - Use this for cleaner imports
- Example: `import Component from '@/app/components/Component'`

### File Organization (Next.js App Router)
- **Pages:** Create `page.tsx` files in `src/app/[route-name]/`
- **Layouts:** Create `layout.tsx` files to wrap page segments
- **Components:** Can be co-located with pages or in separate directories
- **API Routes:** Create `route.ts` files in `src/app/api/[endpoint]/`

### Styling Approach
- **Tailwind-first:** Use Tailwind utility classes for styling
- **Global Styles:** Reserved for base styles and CSS variables in `globals.css`
- **Theme Variables:** Light/dark mode colors defined as CSS custom properties
- **Class Sorting:** Prettier automatically sorts Tailwind classes

### TypeScript
- **Strict Mode:** TypeScript strict checking is enabled
- **Type Checking:** Required before commits via pre-commit hook
- **Component Types:** Use React.FC or explicit return types

## Available Scripts

```bash
bun dev          # Start development server with Turbopack (fast HMR)
bun build        # Create production build
bun start        # Run production server
bun lint         # Run ESLint on codebase
bun lint:fix     # Auto-fix ESLint issues
bun type-check   # Run TypeScript type checking
bun format       # Format code with Prettier
bun prepare      # Install Husky git hooks
```

## Development Workflow

### Starting Development
```bash
bun install      # Install dependencies
bun dev          # Start dev server at http://localhost:3000
```

### Git Workflow
1. **Make Changes:** Edit files as needed
2. **Stage Changes:** `git add .`
3. **Commit:** `git commit` (Commitizen will prompt for commit message)
   - Pre-commit hook automatically runs `bun lint` and `bun type-check`
   - Commits must follow conventional commit format
4. **Push:** `git push`

### Code Quality Gates
- **Pre-commit:** ESLint and TypeScript checks run automatically
- **Commit Messages:** Must follow format: `type(scope): subject`
  - Types: feat, fix, docs, style, refactor, test, chore
  - Example: `feat(auth): add login page`

### Adding New Features
1. Create necessary files in `src/app/` following App Router conventions
2. Use TypeScript for type safety
3. Style with Tailwind CSS utilities
4. Ensure code passes linting and type checking
5. Commit with conventional commit message

## Deployment

### Vercel (Recommended)
- Connect GitHub repository to Vercel
- Automatic deployments on push
- Environment variables configured in Vercel dashboard

### Other Platforms
- Run `bun build` to create production build
- Serve `.next` directory with Node.js or compatible runtime

## Environment Variables

Create `.env.local` for local environment variables:
```bash
# Example
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...
```

## Important Notes for AI Assistants

### When Adding New Code
- **Always use TypeScript** - no `.js` or `.jsx` files
- **Follow App Router patterns** - use `page.tsx`, `layout.tsx`, `route.ts`
- **Use Tailwind for styling** - avoid inline styles or CSS modules unless necessary
- **Import path alias** - prefer `@/...` over relative paths `../../...`
- **Type safety** - ensure all components and functions are properly typed

### Before Committing
- Verify code passes: `bun lint && bun type-check`
- Format code: `bun format`
- Use conventional commit messages via Commitizen

### Common Patterns
- **Server Components:** Default in App Router (no 'use client')
- **Client Components:** Add `'use client'` directive at top of file when using hooks/interactivity
- **Metadata:** Export `metadata` object from pages for SEO
- **Loading States:** Create `loading.tsx` for automatic loading UI
- **Error Handling:** Create `error.tsx` for error boundaries

### Dependencies
- Use `bun add [package]` to install dependencies
- Use `bun add -d [package]` for dev dependencies
- Update `bun.lockb` when adding/removing packages

## Current Features

### Implemented
- Next.js 15 App Router setup
- TypeScript configuration
- Tailwind CSS with dark mode support
- ESLint with comprehensive rules
- Prettier formatting
- Git hooks (pre-commit, commit-msg)
- Conventional commits enforcement
- Type checking workflow
- Default landing page with Next.js branding

### Ready for Development
- API routes (create in `src/app/api/`)
- Database integration
- Authentication
- Additional pages and features
- Component library
- Testing setup (Playwright plugin already configured)

## Additional Resources

- **Next.js Docs:** https://nextjs.org/docs
- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs
- **Bun:** https://bun.sh/docs

## Recent Commits

The project was recently initialized with:
- Initial Next.js app creation
- Type checking script
- Prettier + format script
- ESLint configuration
- Commitizen setup

---

**Last Updated:** 2025-10-21
**Project Status:** Starter Template - Ready for Feature Development
