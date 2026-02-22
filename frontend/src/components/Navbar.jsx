import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useAuth();
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          🌾 CropSphere
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-10">
          <input
            type="text"
            placeholder="Search seeds, fertilizers..."
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-6 text-gray-700 font-medium">
          <Link to="/products" className="hover:text-secondary transition">
            Shop
          </Link>
          <Link to="/rentals" className="hover:text-secondary transition">
            Rentals
          </Link>
          <Link to="/education" className="hover:text-secondary transition">
            Education
          </Link>

          <Link to="/cart" className="relative">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs px-2 rounded-full">
              0
            </span>
          </Link>

         {user ? (
  <div className="flex items-center gap-4">
    {user.role === "admin" && (
      <Link to="/admin" className="hover:text-secondary">
        Admin
      </Link>
    )}

    <button
      onClick={logout}
      className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition"
    >
      Logout
    </button>
  </div>
) : (
  <Link
    to="/login"
    className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition"
  >
    Login
  </Link>
)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;