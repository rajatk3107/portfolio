# Developer Portfolio

A modern, minimal portfolio website for a backend-focused web developer built with Vue 3 and Tailwind CSS.

## Stack

- Vue 3 with Composition API
- Tailwind CSS
- Vite

## Project Structure

```text
ai-portfolio/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
│   └── resume.pdf
└── src/
    ├── App.vue
    ├── main.js
    ├── style.css
    └── components/
        ├── AboutSection.vue
        ├── ContactSection.vue
        ├── ExperienceSection.vue
        ├── FooterSection.vue
        ├── HeroSection.vue
        ├── NavbarSection.vue
        ├── ProjectsSection.vue
        ├── SkillsSection.vue
        └── SkillsSection.vue
```

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build:

```bash
npm run preview
```

## Deployment

This project builds to static files and can be deployed directly to Vercel, Netlify, GitHub Pages, or any static host.

```bash
npm run build
```

Deploy the generated `dist/` directory.

## Notes

- Update deployment-facing details in `src/siteConfig.js` before publishing:
  - `email`
  - `linkedin`
  - `github`
  - `siteUrl`
- The contact form is UI-only and does not submit anywhere yet.
- The hero currently uses a static image from `public/man.png`.
# portfolio
