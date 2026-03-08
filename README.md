# portfolio
Personal portfolio website built with Angular, with an Express backend for contact email delivery via Resend.

## Local Setup

### 1. Configure environment variables

Copy `.env.example` to `.env` and set:

- `RESEND_API_KEY`
- `CONTACT_FROM`
- `CONTACT_TO`

### 2. Install dependencies

```bash
npm install
```

### 3. Run frontend + backend

```bash
npm start
```

- Frontend: `http://localhost:4200`
- API health: `http://localhost:3001/api/health`

## GitHub Pages Deployment

This repository is configured to deploy automatically to GitHub Pages using GitHub Actions.

### 1. Configure Pages in repository settings

```bash
Settings -> Pages -> Build and deployment -> Source: GitHub Actions
```

### 2. Push to `main`

Every push to `main` triggers `.github/workflows/deploy-pages.yml` and publishes:

- `dist/portfolio/browser`

### 3. Open the site

```bash
https://<your-github-username>.github.io/portfolio/
```

## Manual Deployment (Optional)

If you want to deploy manually from your machine:

```bash
npm run build:gh-pages
npm run deploy:gh-pages
```

Notes:
- `build:gh-pages` uses `--base-href /portfolio/`.
- `scripts/copy-404.js` creates `404.html` and `.nojekyll` in `dist/portfolio/browser` for SPA routing on GitHub Pages.
