🛍️ mo‑commerce – Modern E‑commerce + Admin Panel 🚀
A modern, responsive, and role‑based e‑commerce web app built with React + TypeScript + TailwindCSS + shadcn/ui.
Focuses on core business logic: authentication, state management, and RBAC (Role‑Based Access Control).

🌐 Live Demo (Read‑only): mo‑commerce on GitHub Pages

⚡ Features
🔐 Auth & RBAC — Username login with protected admin routes
🧑‍💼 Admin Panel (Users) — Full CRUD with json‑server (Dev), read‑only in demo
🛒 Dynamic Cart — Add / remove / update quantity instantly (Zustand)
🛍️ Products Grid — Search, category filter, and sort by price or stock
📄 Product Detail — Price, stock, description, and cart controls
🖱️ Smooth UI/UX with Framer Motion animations and Swiper slider
📱 Responsive Design — Works great on desktop and mobile
🛠 Tech Stack
⚛ React 18 + Vite
📘 TypeScript
🎨 TailwindCSS + shadcn/ui
🗃 Zustand (state management)
🧾 React Hook Form + Zod (forms & validation)
🌀 Framer Motion (animations)
🖼 Swiper (image slider)
🧭 React Router (routing)
🔌 json‑server (development API)
🧭 Routes
Path	Description
/	Home (featured products slider)
/login	Login (username only)
/products	All products (grid + search/filter/sort)
/products/:id	Product detail page
/users	Users table (Protected: ADMIN only)
🧱 In the GitHub Pages Demo, /users is read‑only.
In development, full CRUD functionality is available via json‑server.

📦 Installation & Usage (Development)
Clone the repository and install dependencies:

Bash

git clone https://github.com/seyedmohammadahmadi/mo-commerce.git
cd mo-commerce
npm install
Run the API using json‑server:

Bash

npx json-server --watch data/db.json --port 3000
Start the app:

Bash

npm run dev
🔑 Login (no password)
Use any username from data/db.json, for example:

admin → Role: ADMIN
customer, mohammad → Role: CUSTOMER
🌐 Demo (Production)
💻 App (Static): GitHub Pages Demo
📂 Data (Static JSON): data/db.json
The demo uses a static JSON file (read‑only) — CRUD actions are disabled.

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
✨ Why mo‑commerce?
Demonstrates real‑world frontend logic (Auth, RBAC, State, Forms).
Combines a clean, responsive UI with production‑ready best practices.
Clear separation of environments:
🧪 Development → json‑server (live CRUD)
🌐 Production → Static JSON (read‑only demo)
