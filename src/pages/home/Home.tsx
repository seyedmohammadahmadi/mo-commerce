// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ShoppingCart } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
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

// export default function HomePage() {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.slice(0, 8))); // فقط ۸ محصول اول
//   }, []);

//   const { addItem } = useCartStore();

//   return (
//     <motion.div
//       className="min-h-screen p-4 md:p-12 bg-white"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
//       {/* Header */}
//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-bold mb-2">Welcome to Our Store</h1>
//         <p className="text-muted-foreground text-sm">
//           Discover our top products picked just for you
//         </p>
//       </div>

//       {/* Swiper Slider */}
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         {products.map((product) => (
//           <SwiperSlide key={product.id}>
//             <motion.div
//               className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
//               whileHover={{ scale: 1.02 }}
//             >
//               <Link to={`/products/${product.id}`}>
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-64 object-cover"
//                 />
//               </Link>
//               <div className="p-4 flex flex-col gap-2">
//                 <Link to={`/products/${product.id}`}>
//                   <h2 className="text-xl font-semibold">{product.name}</h2>
//                   <p className="text-muted-foreground text-sm line-clamp-2">
//                     {product.description}
//                   </p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-lg font-bold text-primary">
//                       {product.price.toLocaleString()} $
//                     </span>
//                   </div>
//                 </Link>
//                 <Button
//                   className="mt-2 w-full"
//                   onClick={() =>
//                     addItem({
//                       id: product.id,
//                       title: product.name,
//                       price: product.price,
//                       image: product.image,
//                     })
//                   }
//                 >
//                   <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
//                 </Button>
//               </div>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </motion.div>
//   );
// }

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ShoppingCart } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
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

// const dbUrl = () =>
//   new URL("data/db.json", import.meta.env.BASE_URL).toString();

// export default function HomePage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const { addItem } = useCartStore();

//   useEffect(() => {
//     const isDev = import.meta.env.DEV;
//     const url = isDev ? "http://localhost:3000/products" : dbUrl();
//     (async () => {
//       try {
//         const res = await fetch(url);
//         const data = await res.json();
//         const list = Array.isArray(data) ? data : data.products ?? [];
//         const normalized = list.map((p: any) => ({
//           ...p,
//           id: Number(p.id),
//           price: Number(p.price),
//         }));
//         setProducts(normalized.slice(0, 8));
//       } catch (e) {
//         console.error("fetch products (home) failed:", e);
//         setProducts([]);
//       }
//     })();
//   }, []);

//   return (
//     <motion.div
//       className="min-h-screen p-4 md:p-12 bg-white"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-bold mb-2">Welcome to Our Store</h1>
//         <p className="text-muted-foreground text-sm">
//           Discover our top products picked just for you
//         </p>
//       </div>
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         {products.map((product) => (
//           <SwiperSlide key={product.id}>
//             <motion.div
//               className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
//               whileHover={{ scale: 1.02 }}
//             >
//               <Link to={`/products/${product.id}`}>
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-64 object-cover"
//                 />
//               </Link>
//               <div className="p-4 flex flex-col gap-2">
//                 <Link to={`/products/${product.id}`}>
//                   <h2 className="text-xl font-semibold">{product.name}</h2>
//                   <p className="text-muted-foreground text-sm line-clamp-2">
//                     {product.description}
//                   </p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-lg font-bold text-primary">
//                       {product.price.toLocaleString()} $
//                     </span>
//                   </div>
//                 </Link>
//                 <Button
//                   className="mt-2 w-full"
//                   onClick={() =>
//                     addItem({
//                       id: product.id,
//                       title: product.name,
//                       price: product.price,
//                       image: product.image,
//                     })
//                   }
//                 >
//                   <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
//                 </Button>
//               </div>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </motion.div>
//   );
// }

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addItem } = useCartStore();

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
        }));

        setProducts(normalized.slice(0, 8));
      } catch (e) {
        console.error("fetch products (home) failed:", e);
        setProducts([]);
      }
    })();
  }, []);

  return (
    <motion.div
      className="min-h-screen p-4 md:p-12 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Welcome to Our Store</h1>
        <p className="text-muted-foreground text-sm">
          Discover our top products picked just for you
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <motion.div
              className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </Link>

              <div className="p-4 flex flex-col gap-2">
                <Link to={`/products/${product.id}`}>
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">
                      {product.price.toLocaleString()} $
                    </span>
                  </div>
                </Link>

                <Button
                  className="mt-2 w-full"
                  onClick={() =>
                    addItem({
                      id: product.id,
                      title: product.name,
                      price: product.price,
                      image: product.image,
                    })
                  }
                >
                  <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                </Button>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
