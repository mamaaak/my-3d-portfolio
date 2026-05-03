# 3D Portfolio

Personal portfolio built with **React**, **Vite**, **TypeScript**, and **Three.js** (`@react-three/fiber` + `@react-three/drei`). Sections use **Framer Motion**, **Tailwind CSS**, and a **EmailJS**-powered contact form.

---

## Prerequisites

- [Node.js](https://nodejs.org/) **18+** (LTS recommended)
- npm (comes with Node)

---

## Getting started

```bash
git clone <repository-url>
cd my-3d-portfolio
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

| Command            | Description                    |
| ------------------ | ------------------------------ |
| `npm run dev`      | Start dev server with HMR      |
| `npm run build`    | Production build to `dist/`    |
| `npm run preview`  | Serve the production build     |
| `npm run check-types` | Typecheck only (`tsc --noEmit`) |

---

## Environment variables (contact form)

The contact section uses [EmailJS](https://www.emailjs.com/). Create a `.env` or `.env.local` in the project root:

```env
VITE_APP_SERVICE_ID=your_service_id
VITE_APP_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_KEY=your_public_key
VITE_APP_EMAILJS_RECIEVER=your_inbox@example.com
```

Restart the dev server after changing env files. Without these variables, the rest of the site runs; submitting the form will fail until EmailJS is configured.

---

## Deploy (optional)

This repo includes a `deploy` script using [gh-pages](https://github.com/tschaub/gh-pages):

```bash
npm run deploy
```

Update `base` in [`vite.config.ts`](vite.config.ts) if your public path differs. This project uses `/my-3d-portfolio/` for a GitHub Pages project site; use `/` for a custom domain or non-subpath hosting.

---

## Tech stack

React · Vite · TypeScript · Three.js · React Three Fiber · Drei · Tailwind CSS · Framer Motion · React Router · EmailJS · Sonner

---

## License

MIT
