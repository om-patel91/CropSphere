import { useEffect, useState } from "react";
import API from "../api/axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await API.get("/orders/myorders");
        setOrders(data);
      } catch (error) {
        console.log(error.response?.data);
      }
    };

    fetchOrders();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "processing":
        return "bg-yellow-100 text-yellow-700";
      case "shipped":
        return "bg-blue-100 text-blue-700";
      case "delivered":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  if (orders.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">No Orders Yet 📦</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-10">My Orders</h1>

        <div className="space-y-8">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white p-8 rounded-xl shadow"
            >
              {/* Order Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-gray-500">
                    Order ID
                  </p>
                  <p className="font-semibold">
                    {order._id}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(
                    order.orderStatus
                  )}`}
                >
                  {order.orderStatus}
                </span>
              </div>

              {/* Ordered Items */}
              <div className="space-y-4 mb-6">
                {order.orderItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div>
                        <p className="font-medium">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          ₹{item.price} × {item.quantity}
                        </p>
                      </div>
                    </div>

                    <p className="font-semibold">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              {/* Order Footer */}
              <div className="border-t pt-6 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">
                    Payment Method
                  </p>
                  <p className="font-medium">
                    {order.paymentMethod}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Total
                  </p>
                  <p className="text-xl font-bold text-primary">
                    ₹{order.totalAmount}
                  </p>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="mt-6 text-sm text-gray-600">
                <p className="font-medium mb-1">
                  Shipping Address:
                </p>
                <p>
                  {order.shippingAddress.fullName},{" "}
                  {order.shippingAddress.address},{" "}
                  {order.shippingAddress.city} -{" "}
                  {order.shippingAddress.postalCode}
                </p>
                <p>Phone: {order.shippingAddress.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;