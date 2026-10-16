# UniMate

A university course planning website built with React, TypeScript, Tailwind CSS, and Vite.

## Development

```sh
npm ci
npm run dev
```

The development server runs at http://localhost:8080.

## Deploy to Vercel

Import `PhantomOrion1/UniMate` into Vercel with the repository root as the root directory. The tracked `vercel.json` configures the Vite build (`npm run build`), output directory (`dist`), and SPA routing. No environment variables are currently required.

Pushes to `main` deploy automatically once the GitHub repository is connected to the Vercel project. Use the project's assigned `vercel.app` address; the previous custom domain is no longer owned.

## Current functionality

The contact and waitlist forms are frontend demos only: they do not send email, store signups, or upload transcripts. A backend must be connected before using them to collect submissions. The demo chat button and Terms links also do not currently have implemented destinations.
