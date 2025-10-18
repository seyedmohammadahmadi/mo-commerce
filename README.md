mo‑commerce — Modern E‑commerce + Admin Panel 🚀
A production‑style e‑commerce app built with React + TypeScript to showcase Core Logic: state management, authentication, role‑based access control, and real‑world UI/UX.

Live demo: https://seyedmohammadahmadi.github.io/mo-commerce/

⚡ Features
Admin Panel
Users list with Create / Update / Delete (CRUD) in development (json-server)
Read‑only in the GitHub Pages demo
Authentication + RBAC
Login by username
Protected route: /users (ADMIN only)
Dynamic Shopping Cart (Zustand)
Add / remove / quantity updates
Products
Responsive grid, search, category filter, sort (price/stockCount)
Product Detail
Price, stock, category, description, Add to Cart
Smooth UI
Framer Motion animations, Swiper slider
Strong forms
React Hook Form + Zod validation
Dev/Prod data source split
Dev → json-server
Prod → static JSON from public/data/db.json
🛠 Tech Stack
React + Vite + TypeScript
Zustand (state management)
TailwindCSS + shadcn/ui (UI components)
React Hook Form + Zod (forms + schema validation)
Framer Motion (animations)
Swiper (carousel/slider)
React Router (routing)
json-server (dev API)
🗺 Routes
/ → Home: slider of featured products
/login → Login (username only)
/products → All products (responsive grid, search/filter/sort)
/products/:id → Product detail
/users → Users table (Protected: ADMIN only)
In dev: full CRUD via json-server
In demo (GitHub Pages): read‑only (static JSON)
📦 Data Models
User

{ username: string; role: 'ADMIN' | 'CUSTOMER' }
Product

{ id: number; name: string; image: string; url: string; stockCount: number; maxBuyCount: number; price: number; category?: string; description?: string; }
🧑‍💻 Development (with json‑server)
Clone & install
Bash

git clone https://github.com/seyedmohammadahmadi/mo-commerce.git
cd mo-commerce
npm install
Start JSON API (dev)
Database: data/db.json
Bash

npx json-server --watch data/db.json --port 3000
Run the app
Bash

npm run dev
Notes

In dev, /users and /products CRUD are fully functional against json-server.
Login is username‑only (e.g., admin, customer from db.json).
🚀 Production (GitHub Pages)
The demo is deployed as static files. Data is read from public/data/db.json (copied to docs/data/db.json after build).

Vite config (vite.config.ts)

TypeScript

import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  base: "/mo-commerce/",      // repo name with trailing slash
  build: {
    outDir: "docs",           // GitHub Pages serves from /docs
    emptyOutDir: true,
  },
});
Router (main.tsx)

React

import { BrowserRouter } from "react-router-dom";
const basename = import.meta.env.BASE_URL; // dev: '/', prod: '/mo-commerce/'
<BrowserRouter basename={basename}>
  <App />
</BrowserRouter>
Static data

Place your data in public/data/db.json
After build it will be available at docs/data/db.json
App fetches from ${BASE_URL}/data/db.json in production
Deploy

Bash

npm run build
git add docs -A
git commit -m "build: publish docs"
git push origin main
GitHub Pages settings

Settings → Pages → Build and deployment
Source: Deploy from a branch
Branch: main
Folder: /docs
Demo

App: https://seyedmohammadahmadi.github.io/mo-commerce/

🔐 RBAC / Access
ADMIN → can access /users
Full CRUD in dev (json-server)
Read‑only in demo (static JSON)
CUSTOMER → public routes only (home, products, cart, product detail)
Quick test usernames (from db.json)

admin (ADMIN)
customer (CUSTOMER)
mohammad (CUSTOMER)
🧠 Engineering Notes
Dev/Prod data split
Dev: http://localhost:3000 (json-server)
Prod: ${BASE_URL}/data/db.json (static)
Cart: Zustand store, reactive updates and persistence ready
Forms: RHF + Zod for typesafe validation
GH Pages compatibility:
Vite base + Router basename with import.meta.env.BASE_URL
Static data under public/data
Optional cache-busting: ?t=${Date.now()} on fetch
Protected routing: simple guard for /users by role
