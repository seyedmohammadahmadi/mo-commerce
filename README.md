mo‑commerce – Modern E‑commerce + Admin Panel 🚀
A modern, responsive, and role‑based e‑commerce web app built with React + TypeScript + TailwindCSS + shadcn/ui.
Focuses on core business logic including state management, authentication, and RBAC (Role‑Based Access Control).

🌐 Live Demo (Read‑only): mo‑commerce on GitHub Pages

⚡ Features
🔐 Auth & RBAC — Username‑based login with protected admin routes
🧑‍💼 Admin Panel (Users) — CRUD (via json‑server) in development, read‑only in demo
🛒 Dynamic Cart — Add / remove / update items instantly using Zustand
🛍️ Products Grid — Search, category filters, and sort by price or stock
📄 Product Detail — View price, stock, description, and cart controls
🖱️ Smooth UI/UX — Powered by Framer Motion animations + Swiper slider
📱 Responsive Design — Perfect on desktop and mobile
🛠 Tech Stack
⚛ React 18 + Vite
📘 TypeScript
🎨 TailwindCSS + shadcn/ui
🗃 Zustand (state management)
🧾 React Hook Form + Zod (forms & validation)
🌀 Framer Motion (animations)
🖼 Swiper (slider)
🧭 React Router (routing)
🔌 json‑server (development API)
🧭 Routes
Path	Description
/	Home (Featured products slider)
/login	Login (username only)
/products	All products (grid + search/filter/sort)
/products/:id	Product details
/users	Users table (Protected – ADMIN only)
🧱 In the demo environment (GitHub Pages), /users is read‑only.
In development, full CRUD functionality is available through json‑server.

📦 Installation & Usage (Development)
Clone the repo and install dependencies:

Bash

git clone https://github.com/seyedmohammadahmadi/mo-commerce.git
cd mo-commerce
npm install
Run the API with json-server:

Bash

npx json-server --watch data/db.json --port 3000
Start the app:

Bash

npm run dev
🔑 Login (no password)
Use any username from data/db.json, for example:

admin → Role: ADMIN
customer or mohammad → Role: CUSTOMER
🌐 Demo (Production)
App (Static): GitHub Pages Demo
Data (Read‑only JSON): data/db.json
The demo uses a static JSON file only; CRUD operations are disabled there.

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
✨ Why mo‑commerce?
Demonstrates real‑world e‑commerce logic (Auth, RBAC, State, Forms)
Combines a clean, responsive UI with production‑ready patterns
Clear separation between Development (json‑server) and Production (static JSON) environments
