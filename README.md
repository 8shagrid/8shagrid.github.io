# Dirga Halim Susilo -- Portfolio

[![Deploy](https://github.com/8shagrid/8shagrid.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/8shagrid/8shagrid.github.io/actions/workflows/deploy.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

Personal portfolio and professional landing page for **Dirga Halim Susilo** -- AI-Native Full-Stack Developer and Tech Entrepreneur based in Medan, Indonesia.

## Overview

This portfolio showcases four live digital products, six technical projects spanning AI/ML and full-stack engineering, professional certifications, and career experience. The design follows a minimalist Samurai aesthetic with a dark color palette and sharp typography.

**Live:** [8shagrid.github.io](https://8shagrid.github.io/)

## Features

- Single-page application with smooth scroll navigation
- Responsive across mobile, tablet, and desktop viewports
- Scroll-triggered animations via Framer Motion
- Downloadable CV PDF
- Static export optimized for GitHub Pages

## Technology

| Category | Stack |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Typography | Playfair Display, Noto Serif JP, DM Sans |
| Hosting | GitHub Pages (GitHub Actions CI/CD) |

## Project Structure

```
src/
  app/            # Next.js App Router pages and layout
  components/     # Reusable UI components (11 components)
  lib/            # Shared utilities and content data
public/           # Static assets, CV PDF, screenshots
.github/          # GitHub Actions deployment workflow
```

## Development

### Prerequisites

- Node.js 20 or later
- npm

### Setup

```bash
npm install
npm run dev
```

The development server starts at `http://localhost:3000`.

### Build

```bash
npm run build
```

Outputs static files to the `out/` directory.

### Content Management

All portfolio content is centralized in `src/lib/data.ts`. Edit this single file to update:
- Personal information and taglines
- Product descriptions and tech stacks
- Project listings
- Skills, experience, education, and certifications

## Deployment

Deployment is automated via GitHub Actions. Every push to `main` triggers a build and deploys to GitHub Pages. The workflow configuration is at `.github/workflows/deploy.yml`.

## License

MIT (c) 2026 Dirga Halim Susilo

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
