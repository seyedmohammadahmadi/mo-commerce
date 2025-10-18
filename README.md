mo‑commerce – Modern E‑commerce + Admin Panel 🚀
A modern, responsive, and role‑based e‑commerce app built with React + TypeScript + TailwindCSS + shadcn/ui.
Focuses on core logic — authentication, state management, and RBAC (Role‑Based Access Control).

✨ Live Demo
🔗 View Read‑only Demo

📸 Preview
Add screenshots here (Home, Products, Product Detail, Admin Users view)

⚡ Features
🔐 Auth & RBAC – Username login and protected admin routes
🧑‍💼 Admin Panel (Users) – CRUD via json-server in dev, read‑only in demo
🛒 Dynamic Cart (Zustand) – Add / remove / update items instantly
🛍️ Products Grid – Search, filter by category, sort by price or stock
📄 Product Detail Page – Price, stock, description, and cart controls
🖱️ Smooth Animations – Framer Motion + Swiper integration
📱 Responsive Design – Optimized for desktop and mobile
🛠 Tech Stack
⚛ React 18 + Vite
📘 TypeScript
🎨 TailwindCSS + shadcn/ui
🗃 Zustand (state management)
🧾 React Hook Form + Zod (forms & validation)
🌀 Framer Motion (animations)
🖼️ Swiper (image slider)
🧭 React Router (routing)
🔌 json‑server (development API)
🧭 Routes
Path	Description
/	Home (Featured products slider)
/login	Login (username only)
/products	All products (grid + search/filter/sort)
/products/:id	Product detail
/users	Users table — Protected (ADMIN only)
🧱 In the GitHub Pages demo, /users is read‑only.
In development, full CRUD actions are available using json‑server.

📦 Installation & Usage (Development)
Clone the repository and install dependencies:

Bash

git clone https://github.com/seyedmohammadahmadi/mo-commerce.git
cd mo-commerce
npm install
Run the API:

Bash

npx json-server --watch data/db.json --port 3000
Start the app:

Bash

npm run dev
Login (no password):
Use a username from data/db.json, for example:

admin → ADMIN
customer, mohammad → CUSTOMER
🌐 Demo (Production)
💻 App (Static): Live Demo
📂 Data (Static JSON): data/db.json
The demo uses a static JSON file only — CRUD actions are disabled.

🧩 Data Models
User

TypeScript

{
  username: string;
  role: 'ADMIN' | 'CUSTOMER';
}
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
✨ Why mo‑commerce
Focuses on real‑world business logic – Auth, RBAC, State, Forms
Clean, production‑ready UI with modern stack
Clear environment separation:
🧪 Development: json-server (live CRUD)
🌐 Production: static JSON (read‑only)
