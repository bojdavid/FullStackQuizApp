# AI Quiz App - Frontend

Welcome to the **AI Quiz App** frontend. This is a high-performance, modern web application built with **Svelte 5** and **Tailwind CSS 4.0**, designed to provide a premium learning experience through AI-generated quizzes.

## 🚀 Tech Stack

- **Framework**: [Svelte 5](https://svelte.dev/) (utilizing Runes for reactive state management)
- **Meta-framework**: [SvelteKit](https://kit.svelte.dev/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/) with native OKLCH color support
- **Icons**: [@lucide/svelte](https://lucide.dev/)
- **UI Components**: [Bits UI](https://bits-ui.com/) (Headless components) + Custom UI wrappers
- **Animations**: Native Svelte transitions & Tailwind animations

## 📁 Project Structure

```text
frontend/
├── src/
│   ├── lib/
│   │   ├── assets/       # Static assets (images, icons)
│   │   ├── components/   # UI Components
│   │   │   ├── auth/     # Authentication specific components
│   │   │   ├── common/   # Reusable global components (e.g., LightSwitch)
│   │   │   ├── dashboard/# Dashboard specific components
│   │   │   ├── quiz/      # Quiz interaction components
│   │   │   └── ui/       # Generic UI primitives (Buttons, Inputs, etc.)
│   │   ├── server/       # Server-only logic (Mock DB, API helpers)
│   │   ├── styles/       # Global CSS & Tailwind configuration
│   │   └── utils.ts      # Shared utility functions
│   └── routes/           # SvelteKit Page Routing
│       ├── auth/         # Login/Registration pages
│       ├── dashboard/    # User statistics, rankings, and library
│       ├── quiz/         # Active quiz sessions
│       └── api/          # Internal API endpoints (simulated backend)
├── static/               # Static public files (e.g., hero-ai.png)
└── tailwind.config.js     # Tailwind 4 configuration
```

## 🎨 Design System

The application follows a **Premium Glassmorphism** aesthetic with a focus on depth, vibrant gradients, and smooth transitions.

### Color Scheme (OKLCH)
The theme uses CSS variables defined in `src/lib/styles/app.css` for both light and dark modes.

| Token | Light Value | Dark Value |
|-------|-------------|------------|
| `--background` | `#F0F8FF` (Alice Blue) | `#050A30` (Deep Navy) |
| `--foreground` | `#050A30` (Navy) | `#7EC8E3` (Light Blue) |
| `--primary` | `#2563EB` (Blue) | `#60A5FA` (Light Blue) |
| `--accent` | `#7EC8E3` | `#456 0.089 264` |

### Key Utility Classes
- `.glass-card`: Applies a backdrop blur, subtle border, and hover elevation to elements.
- `.text-gradient`: Uses a linear gradient clip for hero text and branding.

## 🛠 Development Guide

### Prerequisites
- Node.js (Latest LTS)
- npm or pnpm

### Installation
```bash
npm install
```

### Running Locally
```bash
npm run dev
```

### Key Concepts for Developers
1. **Runes**: We use Svelte 5 Runes ($state, $props, $derived). Avoid using the old Svelte 4 stores or reactive declarations ($:) unless necessary.
2. **Server-Side Rendering**: Prefer loading data through `+page.ts` or `+page.server.ts` loaders.
3. **Mock Backend**: For development, all data persists in `src/lib/server/db.ts`. When moving to production, replace these with real database queries.
4. **Tailwind 4**: Note the use of `@theme` blocks in CSS instead of a traditional `tailwind.config.js` for better performance and native CSS variable integration.

## 🧩 Component Architecture
When building new features:
- Place generic primitives in `$lib/components/ui`.
- Domain-specific logic should go in `$lib/components/[feature]`.
- Use the `cn()` utility (located in `$lib/utils.ts`) for merging tailwind classes dynamically.

---
**Maintained by**: Antigravity AI
