import { useOrders } from "../context/OrderContext";

const Orders = () => {
  const { orders } = useOrders();

  return (
    <div className="min-h-screen py-24 px-6">
      <h1 className="text-4xl font-bold text-primary mb-10">
        Your Orders
      </h1>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className="mb-8 p-6 bg-white shadow rounded-xl">
            <p className="text-sm text-gray-500">
              Order Date: {order.date}
            </p>

            {order.items.map(item => (
              <div key={item.id}>
                {item.name} - ₹{item.price}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;