import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-primary">
        🌾 CropSphere
      </Link>

      <div className="flex items-center gap-6">

        {/* NOT LOGGED IN */}
        {!user && (
          <>
            <Link className="hover:text-primary" to="/login">
              Login
            </Link>
            <Link className="hover:text-primary" to="/register">
              Register
            </Link>
          </>
        )}

        {/* FARMER */}
        {user && user.role !== "admin" && (
          <>
            <Link className="hover:text-primary" to="/dashboard">
              Dashboard
            </Link>

            <Link className="hover:text-primary" to="/products">
              Products
            </Link>

            <Link className="hover:text-primary" to="/cart">
              Cart
            </Link>

            <Link className="hover:text-primary" to="/weather">
              Weather
            </Link>

            <Link className="hover:text-primary" to="/my-rentals">
              My Rentals
            </Link>
          </>
        )}

        {/* ADMIN */}
        {user && user.role === "admin" && (
          <>
            <Link
              className="bg-primary text-white px-4 py-2 rounded-lg"
              to="/admin"
            >
              Admin Panel
            </Link>
          </>
        )}

        {/* USER NAME */}
        {user && (
          <span className="text-gray-600 text-sm">
            Hi, {user.name}
          </span>
        )}

        {/* LOGOUT */}
        {user && (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        )}

      </div>

    </nav>
  );
};

export default Navbar;