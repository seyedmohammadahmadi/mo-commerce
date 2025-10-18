# mo‑commerce – Modern E‑commerce + Admin Panel 🚀

A modern, responsive, and role‑based e‑commerce app built with **React + TypeScript + TailwindCSS + shadcn/ui**.  
Focuses on **core logic** — authentication, state management, and **RBAC (Role‑Based Access Control)**.

---

## ✨ Live Demo
[🔗 View Read‑only Demo](https://seyedmohammadahmadi.github.io/mo-commerce/)

---

## ⚡ Features
- 🔐 **Auth & RBAC** – Username login and protected admin routes  
- 👨‍💼 **Admin Panel (Users)** – CRUD via `json-server` in dev, read‑only in demo  
- 🛒 **Dynamic Cart (Zustand)** – Add / remove / update quantity instantly  
- 🛍️ **Products Grid** – Search, category filter, sort by price or stock  
- 📄 **Product Detail Page** – Price, stock, description, add‑to‑cart  
- 🖱️ **Smooth Animations** – Framer Motion + Swiper integration  
- 📱 **Responsive Design** – Optimized for desktop and mobile

---

## 🛠 Tech Stack
- ⚛ **React 18 + Vite**  
- 📘 **TypeScript**  
- 🎨 **TailwindCSS + shadcn/ui**  
- 🗃 **Zustand** (state management)  
- 🧾 **React Hook Form + Zod** (forms & validation)  
- 🌀 **Framer Motion** (animations)  
- 🖼️ **Swiper** (image slider)  
- 🧭 **React Router** (routing)  
- 🔌 **json‑server** (development API)

---

## 🧭 Routes

| Path | Description |
|------|--------------|
| `/` | Home (featured products slider) |
| `/login` | Login (username only) |
| `/products` | All products (grid + search/filter/sort) |
| `/products/:id` | Product detail |
| `/users` | Users table — *Protected: ADMIN only* |

> In the **GitHub Pages demo**, `/users` is read‑only.  
> In **development**, full CRUD actions are available via `json‑server`.

---

## 📦 Installation & Usage (Development)

Clone and install:

```bash
git clone https://github.com/seyedmohammadahmadi/mo-commerce.git
cd mo-commerce
npm install

Run the API:

```bash
npx json-server --watch data/db.json --port 3000
Start the app:

Bash

npm run dev
🔑 Login (no password)
Use any username from data/db.json, for example:

admin → ADMIN
customer, mohammad → CUSTOMER
🌐 Demo (Production)
💻 App (Static): Demo Link
📂 Data (Static JSON): data/db.json
The demo uses a static JSON file only — CRUD is disabled.

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
Real‑world e‑commerce logic (Auth, RBAC, State, Forms)
Clean, responsive UI with production‑ready structure
Clear environment separation:
🧪 Development → json-server (live CRUD)
🌐 Production → static JSON (read‑only)
