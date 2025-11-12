# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

- 🎠 Use carousel component to display hero images in a slider format.

## Getting Started

### Installation

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
 ├── routes/
    ├── HeroList Hero List Page (/heroes)
    ├── HeroProfile Hero Profile Page (/heroes/:heroId)
├── api/
    ├── HeroesQuery.ts Hero related API calls
├── types/
    ├── axios.d.ts Axios type declaration extensions
    ├── HeroesType.ts Hero related TypeScript types
```

## 3rd Party Libraries
- react-router: A user‑obsessed, standards‑focused, multi‑strategy router for React
- axios: Promise based HTTP client for the browser and node.js
- @tanstack/react-query: Powerful asynchronous state management, server-state utilities and data fetching
- classnames: A simple JavaScript utility for conditionally joining classNames together

### Development Tools
- eslint: statically analyzes your code to quickly find problems
- @antfu/eslint-config: Anthony's ESLint config preset
- tailwind css: A utility-first CSS framework packed with classes
- daisy css: Faster, cleaner, easier Tailwind CSS development
- typescript: A strongly typed programming language that builds on JavaScript
- vite: A blazing fast frontend build tool powering the next generation of web applications

## Building for Production

Create a production build:

```bash
pnpm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
