import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Order Placed Successfully 🎉
      </h1>

      <p className="text-gray-600 mb-8">
        Thank you for shopping with CropSphere.
      </p>

      <button
        onClick={() => navigate("/orders")}
        className="bg-green-600 text-white px-6 py-3 rounded-xl"
      >
        View Orders
      </button>
    </div>
  );
};

export default OrderSuccess;