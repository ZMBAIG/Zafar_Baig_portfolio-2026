# Alex Rivera — Portfolio Website

A modern, dark-themed portfolio built with **React**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

## Features

- Fully responsive (mobile-first)
- Smooth scroll navigation
- Animated sections with Framer Motion
- Reusable components
- Contact form (demo – connect to Formspree / EmailJS for production)
- Glassmorphism navbar on scroll

## Project Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css          # Tailwind + custom theme
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
└── README.md
```

## How to Run

### 1. Prerequisites
- Node.js 18+ (recommended 20+)
- npm or yarn or pnpm

### 2. Install dependencies

```bash
cd portfolio
npm install
```

### 3. Start development server

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### 4. Build for production

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

### 5. Preview production build

```bash
npm run preview
```

## Customization

| What to change              | File / Location                          |
|----------------------------|------------------------------------------|
| Your name & title          | `Hero.jsx`, `Navbar.jsx`, `index.html`   |
| About text & stats         | `About.jsx`                              |
| Skills list                | `Skills.jsx`                             |
| Projects                   | `Projects.jsx`                           |
| Contact email / phone      | `Contact.jsx`                            |
| Social links               | `Hero.jsx`, `Contact.jsx`, `Footer.jsx`  |
| Colors                     | `src/index.css` (`@theme` section)       |

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Framer Motion
- React Icons

---

Feel free to fork and make it your own!
