mo‑commerce – Modern E‑commerce + Admin Panel 🚀
A modern, responsive e‑commerce app with admin features, built with React + TypeScript + TailwindCSS + shadcn/ui.
Core focus on state management (Zustand), auth + RBAC, and clean UI/UX.
Live demo (read‑only): https://seyedmohammadahmadi.github.io/mo-commerce/

⚡ Features
🔐 Auth & RBAC (username login) — protected /users (ADMIN only)
🧑‍💼 Admin Panel (Users) — CRUD in development (json‑server), read‑only in demo
🛒 Dynamic Cart (Zustand) — add/remove/update quantities instantly
🛍️ Products Grid — responsive layout, search, category filter, sort by stock/price
📄 Product Detail — price, stock, description, add to cart
🖱️ Smooth UI — Framer Motion animations + Swiper slider on home
📱 Responsive Design (Desktop + Mobile)
🛠 Tech Stack
⚛ React 18 + Vite
📘 TypeScript
🎨 TailwindCSS + shadcn/ui
🗃 Zustand (state)
🧾 React Hook Form + Zod (forms & validation)
🌀 Framer Motion (animations)
🖼 Swiper (slider)
🔌 json‑server (dev API)
🧭 React Router (routing)
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
Dev: full CRUD on /users (ADMIN).
Demo: data served from static JSON; admin panel is read‑only.
Live demo: https://seyedmohammadahmadi.github.io/mo-commerce/
