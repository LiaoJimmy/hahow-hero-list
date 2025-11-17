# hahow-hero-list

Hahow front-end engineer project

[Demo Link](https://hahow-hero-list.vercel.app/heroes)

## Features

- 🚄 Use pnpm by default, fast, disk space efficient package manager
- 🎠 Use carousel component to display hero images in a slider format
- ⚓️ Redirect to /heroes when accessing undefined routes
- 🍪 Cache heroes/:heroId router data in vercel CDN (5 minutes age)

### Features by react router

- 📖 React Router
- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling

## Getting Started

### Installation

**Please make sure you have [pnpm](https://pnpm.io/) installed.**

Install the dependencies:

```bash
pnpm install
```

### Development

Start the development server with HMR:

```bash
pnpm run dev
```

Your application will be available at `http://localhost:5173`.

## Achitecture
```
app /
├── api/
    ├── HahowQueryClient.ts Hahow tanstack query client
    ├── HahowRecruitAPI.ts Hahow recruit API axios
    ├── HeroesQuery.ts Hero related query and action
├── routes/
    ├── HeroList Hero list page (/heroes)
    ├── HeroProfile Hero profile page (/heroes/:heroId)
    ├── CatchAll.tsx Catch all routes and redirect to /heroes
    ├── Home.tsx / Index route and redirect to /heroes
├── types/
    ├── axios.d.ts Axios type declaration extensions
    ├── HeroesType.ts Hero related TypeScript types
├── app.css CSS root file
├── root.tsx React router root
├── router.ts React router
```

## 3rd Party Libraries
- react-router: A user‑obsessed, standards‑focused, multi‑strategy router for React
- axios: Promise based HTTP client for the browser and node.js
- @tanstack/react-query: Powerful asynchronous state management, server-state utilities and data fetching
- classnames: A simple JavaScript utility for conditionally joining classNames together
- zod: TypeScript-first schema validation with static type inference

### Development Tools
- eslint: statically analyzes your code to quickly find problems
- @antfu/eslint-config: Anthony's ESLint config preset
- tailwind css: A utility-first CSS framework packed with classes
- daisy css: Faster, cleaner, easier Tailwind CSS development
- typescript: A strongly typed programming language that builds on JavaScript
- vite: A blazing fast frontend build tool powering the next generation of web applications

## Comment Rules
- Good naming and prevent to add comments
- Only add comments when necessary, such as explaining why a particular approach was taken or providing context that isn't immediately clear from the code itself.

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/) already configured.

---

## Type checking
Type check the project using:

```bash
pnpm run typecheck
```

## Building for Production

Create a production build:

```bash
pnpm run build
```

Test production build locally:

```bash
pnpm run start
```

Built with ❤️ using React Router.
