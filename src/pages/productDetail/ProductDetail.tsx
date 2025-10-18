import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { ShoppingCart, PackageCheck, AlertCircle } from "lucide-react";
import { Skeleton } from "../../components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "../../store/CartStore/cartStore";

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

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCartStore();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/products/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Product not found");
          return res.json();
        })
        .then((data) => setProduct(data))
        .catch(() => setProduct(null))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Skeleton className="w-[320px] h-[420px] rounded-xl" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-lg font-semibold">
        <AlertCircle className="w-5 h-5 mr-2" />
        Product not found!
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen p-6 md:p-12 bg-gradient-to-br from-gray-50 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Product Image */}
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded-2xl shadow-xl"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Product Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight">{product.name}</h1>

          {/* Category Badge */}
          {product.category && (
            <Badge
              variant="secondary"
              className="w-fit px-3 py-1 rounded-full text-sm"
            >
              {product.category.toUpperCase()}
            </Badge>
          )}

          {/* Price & Stock */}
          <div className="flex items-center gap-4 mt-3">
            <span className="text-2xl font-bold text-green-600">
              ${product.price.toLocaleString()}
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-600">
              {product.stockCount > 0 ? (
                <>
                  <PackageCheck className="w-4 h-4 text-green-500" />{" "}
                  {product.stockCount} in stock
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 text-red-500" /> Out of stock
                </>
              )}
            </span>
          </div>

          {/* Description */}
          {product.description && (
            <p className="text-gray-700 leading-relaxed mt-2">
              {product.description}
            </p>
          )}

          {/* Add to Cart */}
          <motion.div whileHover={{ scale: 1.03 }} className="mt-6">
            <Button
              disabled={product.stockCount <= 0}
              onClick={() =>
                addItem({
                  id: product.id,
                  title: product.name,
                  price: product.price,
                  image: product.image,
                })
              }
            >
              {product.stockCount <= 0 ? (
                "Out of Stock"
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
                </>
              )}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
