import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-primary mb-12">
          🧑‍💼 Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <Link to="/admin/products" className="p-6 bg-white shadow rounded-xl">
            📦 Manage Products
          </Link>

          <Link to="/admin/orders" className="p-6 bg-white shadow rounded-xl">
            🛒 Manage Orders
          </Link>

          <Link to="/admin/rentals" className="p-6 bg-white shadow rounded-xl">
            🚜 Manage Rentals
          </Link>

          <Link to="/equipments" className="p-6 bg-white shadow rounded-xl">
            ➕ Add Equipment
          </Link>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;