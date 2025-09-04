import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { useUserStore } from "../../store/AuthStore/authStore";
import { LogOut, User, ShoppingCart } from "lucide-react";
import { CartDrawer } from "../CartDrawer/cartDrawer";

interface NavbarProps {
  logo: string;
}

function Navbar({ logo }: NavbarProps) {
  const { user, logout } = useUserStore();

  return (
    <header className="w-full border-b bg-white shadow-sm px-4 py-3 mb-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary">
          {logo}
        </Link>

        {/* Links */}
        <nav className="flex items-center gap-4">
          <Link to="/products">
            <Button variant="ghost">Products</Button>
          </Link>
          {user?.role === "ADMIN" && (
            <Link to="/users">
              <Button variant="ghost">Users</Button>
            </Link>
          )}
        </nav>

        {/* Auth */}
        <div className="flex items-center gap-4">
          <CartDrawer />

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarFallback>{user.username.charAt(0)}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem disabled>
                  <User className="mr-2 h-4 w-4" />
                  {user.username}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/login">
              <Button variant="default">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
