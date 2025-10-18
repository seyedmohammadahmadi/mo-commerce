mo‑commerce — Modern E‑commerce + Admin Panel 🚀
A modern, responsive e‑commerce app built with React + TypeScript + TailwindCSS + shadcn/ui.
Focuses on Core Logic: state management, authentication, and role‑based access control (RBAC).
Live demo (read‑only): https://seyedmohammadahmadi.github.io/mo-commerce/

⚡ Features
🔐 Auth & RBAC — Username login, protected /users (ADMIN only)
🧑‍💼 Admin Panel (Users) — CRUD in development (json‑server), read‑only in demo
🛒 Dynamic Cart (Zustand) — add / remove / update quantity instantly
🛍️ Products Grid — responsive layout, search, category filter, sort by price/stock
📄 Product Detail — price, stock, description, add to cart
🖱️ Smooth UI — Framer Motion animations + Swiper slider
📱 Responsive Design — desktop & mobile friendly
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
🧭 Routes
/ — Home (featured products slider)
/login — Login (username only)
/products — All products (grid + search/filter/sort)
/products/:id — Product detail
/users — Users table (Protected: ADMIN only)
In demo (GitHub Pages), /users is read‑only; in development it’s full CRUD (json‑server).

📦 Installation & Usage (Dev)
Clone the repo and install dependencies:

Bash

git clone https://github.com/seyedmohammadahmadi/mo-commerce.git
cd mo-commerce
npm install
Run API with json‑server:

Bash

npx json-server --watch data/db.json --port 3000
Start the app:

Bash

npm run dev
Login (no password): use a username from data/db.json
Examples: admin (ADMIN), customer, mohammad

🌐 Demo (Prod)
App (static): https://seyedmohammadahmadi.github.io/mo-commerce/
Data (static JSON): https://seyedmohammadahmadi.github.io/mo-commerce/data/db.json
The demo uses a static JSON file (read‑only). CRUD actions are disabled there.

🧩 Data Models
User

TypeScript

{ username: string; role: 'ADMIN' | 'CUSTOMER' }
Product

TypeScript

{
  id: number;
  name: string;
  image: string;
  url: string;
  stockCount: number;
  maxBuyCount: number;
  price: number;
  category?: string;
  description?: string;
}

✨ Why this project?
Demonstrates real‑world core logic (Auth + RBAC + state + forms).
Clean, responsive UI with production‑ready patterns.
Clear separation of dev vs prod data sources (json‑server vs static JSON).
