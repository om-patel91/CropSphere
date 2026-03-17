import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-primary mb-12">
          👨‍🌾 Farmer Dashboard
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <Link to="/orders" className="p-6 bg-white shadow rounded-xl">
            📦 My Orders
          </Link>

          <Link to="/my-rentals" className="p-6 bg-white shadow rounded-xl">
            🚜 My Rentals
          </Link>

          <Link to="/weather" className="p-6 bg-white shadow rounded-xl">
            🌤 Weather
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;