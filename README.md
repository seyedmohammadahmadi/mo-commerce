mo‑commerce – Modern E‑commerce + Admin Panel 🚀
A modern, responsive e‑commerce app built with React + TypeScript + TailwindCSS + shadcn/ui.
Supports 🔐 Auth & RBAC (ADMIN) and 🔗 dev/prod data sources (json‑server in dev, static JSON in demo).
Live demo: https://seyedmohammadahmadi.github.io/mo-commerce/

⚡ Features
🔐 Auth & RBAC (username login) — protected /users (ADMIN only)
🧑‍💼 Admin Panel (Users) — CRUD in development (json‑server), read‑only in demo
🛒 Dynamic Cart (Zustand) — add / remove / update quantity instantly
🛍️ Products Grid — responsive layout, search, category filter, sort by price/stock
📄 Product Detail — price, stock, description, add to cart
🖱️ Smooth UI — Framer Motion animations + Swiper slider on Home
📱 Responsive Design (Desktop + Mobile friendly)
🛠 Tech Stack
⚛ React 18 + Vite
📘 TypeScript
🎨 TailwindCSS + shadcn/ui
🗃 Zustand (state management)
🧾 React Hook Form + Zod (forms & validation)
🌀 Framer Motion (animations)
🖼 Swiper (slider)
🧭 React Router (routing)
🔌 json‑server (dev API)
📦 Installation & Usage
Clone the repo and install dependencies:

Bash

git clone https://github.com/seyedmohammadahmadi/mo-commerce.git
cd mo-commerce
npm install
Run API (development) with json‑server:

Bash

npx json-server --watch data/db.json --port 3000
Start the app:

Bash

npm run dev
Notes:

In dev, /users has full CRUD via json‑server (ADMIN).
In demo (GitHub Pages), data is served from static JSON and admin panel is read‑only.
