import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Users from "./pages/users/Users";
import NotFound from "./pages/notFound/NotFound";
import ProtectedRoute from "./routes/ProtectedRoute/ProtectedRoute";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar logo="Mohammad" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route
          path="/users"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster richColors position="top-center" />
    </>
  );
}

export default App;
