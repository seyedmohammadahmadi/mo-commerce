// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Input } from "../../components/ui/input";
// import { Button } from "../../components/ui/button";
// import { Card, CardContent } from "../../components/ui/card";
// import { ShoppingCart } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useCartStore } from "../../store/CartStore/cartStore";

// interface Product {
//   id: number;
//   name: string;
//   image: string;
//   url: string;
//   stockCount: number;
//   maxBuyCount: number;
//   price: number;
//   category?: string;
//   description?: string;
// }

// export default function ProductsPage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState<string | null>(null);

//   useEffect(() => {
//     fetch("http://localhost:3000/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);

//   const filteredProducts = products
//     .sort((a, b) => b.stockCount - a.stockCount) // اضافه شد
//     .filter(
//       (product) =>
//         product.name.toLowerCase().includes(search.toLowerCase()) &&
//         (!filter || product.category === filter)
//     );

//   const { addItem } = useCartStore();

//   return (
//     <>
//       <div className="min-h-screen bg-gray-50 p-4 md:p-8">
//         {/* Header */}
//         <header className="w-full mb-8">
//           <h1 className="text-3xl font-bold text-center mb-2">Our Products</h1>
//           <p className="text-center text-muted-foreground">
//             The latest and best products for you
//           </p>
//         </header>

//         {/* Controls */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
//           <Input
//             placeholder="Search products..."
//             className="w-full md:w-1/2"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <div className="flex gap-2">
//             <Button
//               variant={filter === null ? "default" : "outline"}
//               onClick={() => setFilter(null)}
//             >
//               All
//             </Button>

//             <Button
//               variant={filter === "mobile" ? "default" : "outline"}
//               onClick={() => setFilter("mobile")}
//             >
//               Mobile
//             </Button>

//             <Button
//               variant={filter === "laptop" ? "default" : "outline"}
//               onClick={() => setFilter("laptop")}
//             >
//               Laptop
//             </Button>
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredProducts.map((product) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Card className="hover:shadow-xl transition-shadow duration-300">
//                 <Link
//                   to={`/products/${product.id}`}
//                   className="no-underline text-inherit"
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-48 object-cover rounded-t-xl"
//                   />
//                 </Link>

//                 <CardContent className="p-4 flex flex-col gap-2">
//                   <Link
//                     to={`/products/${product.id}`}
//                     className="no-underline text-inherit"
//                   >
//                     <h2 className="text-lg font-semibold">{product.name}</h2>
//                     <p className="text-sm text-muted-foreground line-clamp-2">
//                       {product.description}
//                     </p>
//                   </Link>

//                   <div className="flex items-center justify-between">
//                     <span className="font-bold text-primary">
//                       {product.price.toLocaleString()} $
//                     </span>
//                   </div>

//                   <Button
//                     className="w-full mt-2"
//                     onClick={() =>
//                       addItem({
//                         id: product.id,
//                         title: product.name,
//                         price: product.price,
//                         image: product.image,
//                       })
//                     }
//                   >
//                     <ShoppingCart className="w-4 h-4 ml-2" /> Add to cart
//                   </Button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Input } from "../../components/ui/input";
// import { Button } from "../../components/ui/button";
// import { Card, CardContent } from "../../components/ui/card";
// import { ShoppingCart } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useCartStore } from "../../store/CartStore/cartStore";

// interface Product {
//   id: number; // روی dev عددیه؛ برای prod از db.json استرینگ میاد، پایین نرمال می‌کنیم
//   name: string;
//   image: string;
//   url: string;
//   stockCount: number;
//   maxBuyCount: number;
//   price: number;
//   category?: string;
//   description?: string;
// }

// const dbUrl = () =>
//   new URL("data/db.json", import.meta.env.BASE_URL).toString();

// export default function ProductsPage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState<string | null>(null);

//   useEffect(() => {
//     const isDev = import.meta.env.DEV;
//     const url = isDev ? "http://localhost:3000/products" : dbUrl();
//     (async () => {
//       try {
//         const res = await fetch(url);
//         const data = await res.json();
//         const list = Array.isArray(data) ? data : data.products ?? [];
//         // نرمال‌سازی: id را عددی کن (برای prod که "1" میاد)
//         const normalized = list.map((p: any) => ({
//           ...p,
//           id: Number(p.id),
//           price: Number(p.price),
//           stockCount: Number(p.stockCount),
//           maxBuyCount: Number(p.maxBuyCount),
//         }));
//         setProducts(normalized);
//       } catch (e) {
//         console.error("fetch products failed:", e);
//         setProducts([]);
//       }
//     })();
//   }, []);

//   const filteredProducts = products
//     .sort((a, b) => b.stockCount - a.stockCount)
//     .filter(
//       (product) =>
//         product.name.toLowerCase().includes(search.toLowerCase()) &&
//         (!filter || product.category === filter)
//     );

//   const { addItem } = useCartStore();

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
//       <header className="w-full mb-8">
//         <h1 className="text-3xl font-bold text-center mb-2">Our Products</h1>
//         <p className="text-center text-muted-foreground">
//           The latest and best products for you
//         </p>
//       </header>
//       <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
//         <Input
//           placeholder="Search products..."
//           className="w-full md:w-1/2"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <div className="flex gap-2">
//           <Button
//             variant={filter === null ? "default" : "outline"}
//             onClick={() => setFilter(null)}
//           >
//             All
//           </Button>
//           <Button
//             variant={filter === "mobile" ? "default" : "outline"}
//             onClick={() => setFilter("mobile")}
//           >
//             Mobile
//           </Button>
//           <Button
//             variant={filter === "laptop" ? "default" : "outline"}
//             onClick={() => setFilter("laptop")}
//           >
//             Laptop
//           </Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredProducts.map((product) => (
//           <motion.div
//             key={product.id}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <Card className="hover:shadow-xl transition-shadow duration-300">
//               <Link
//                 to={`/products/${product.id}`}
//                 className="no-underline text-inherit"
//               >
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-48 object-cover rounded-t-xl"
//                 />
//               </Link>

//               <CardContent className="p-4 flex flex-col gap-2">
//                 <Link
//                   to={`/products/${product.id}`}
//                   className="no-underline text-inherit"
//                 >
//                   <h2 className="text-lg font-semibold">{product.name}</h2>
//                   <p className="text-sm text-muted-foreground line-clamp-2">
//                     {product.description}
//                   </p>
//                 </Link>

//                 <div className="flex items-center justify-between">
//                   <span className="font-bold text-primary">
//                     {product.price.toLocaleString()} $
//                   </span>
//                 </div>

//                 <Button
//                   className="w-full mt-2"
//                   onClick={() =>
//                     addItem({
//                       id: product.id,
//                       title: product.name,
//                       price: product.price,
//                       image: product.image,
//                     })
//                   }
//                 >
//                   <ShoppingCart className="w-4 h-4 ml-2" /> Add to cart
//                 </Button>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/CartStore/cartStore";
import { isDev, dataUrl } from "../../utilse/env";

interface Product {
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

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>(null);

  useEffect(() => {
    const url = isDev ? "http://localhost:3000/products" : dataUrl("db.json");
    (async () => {
      try {
        const res = await fetch(url + (!isDev ? `?t=${Date.now()}` : ""));
        const data = await res.json();
        const list = Array.isArray(data) ? data : data.products ?? [];

        const normalized = list.map((p: any) => ({
          ...p,
          id: Number(p.id),
          price: Number(p.price),
          stockCount: Number(p.stockCount),
          maxBuyCount: Number(p.maxBuyCount),
        }));

        setProducts(normalized);
      } catch (e) {
        console.error("fetch products failed:", e);
        setProducts([]);
      }
    })();
  }, []);

  const filteredProducts = products
    .sort((a, b) => b.stockCount - a.stockCount)
    .filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        (!filter || product.category === filter)
    );

  const { addItem } = useCartStore();

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <header className="w-full mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">Our Products</h1>
        <p className="text-center text-muted-foreground">
          The latest and best products for you
        </p>
      </header>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <Input
          placeholder="Search products..."
          className="w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex gap-2">
          <Button
            variant={filter === null ? "default" : "outline"}
            onClick={() => setFilter(null)}
          >
            All
          </Button>
          <Button
            variant={filter === "mobile" ? "default" : "outline"}
            onClick={() => setFilter("mobile")}
          >
            Mobile
          </Button>
          <Button
            variant={filter === "laptop" ? "default" : "outline"}
            onClick={() => setFilter("laptop")}
          >
            Laptop
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <Link
                to={`/products/${product.id}`}
                className="no-underline text-inherit"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </Link>

              <CardContent className="p-4 flex flex-col gap-2">
                <Link
                  to={`/products/${product.id}`}
                  className="no-underline text-inherit"
                >
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </Link>

                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">
                    {product.price.toLocaleString()} $
                  </span>
                </div>

                <Button
                  className="w-full mt-2"
                  onClick={() =>
                    addItem({
                      id: product.id,
                      title: product.name,
                      price: product.price,
                      image: product.image,
                    })
                  }
                >
                  <ShoppingCart className="w-4 h-4 ml-2" /> Add to cart
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
