import { useOrders } from "../context/OrderContext";

const Orders = () => {
  const { orders } = useOrders();

  return (
    <div className="min-h-screen py-24 px-6 bg-light">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-primary mb-10">
          Your Orders
        </h1>

        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          orders.map((order) => {
            const orderTotal = order.items.reduce(
              (total, item) =>
                total + item.price * item.quantity,
              0
            );

            return (
              <div
                key={order.id}
                className="mb-8 p-8 bg-white shadow rounded-2xl"
              >
                <p className="text-sm text-gray-500 mb-6">
                  Order Date: {order.date}
                </p>

                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between"
                    >
                      <div>
                        {item.name}
                        <p className="text-sm text-gray-500">
                          ₹{item.price} × {item.quantity}
                        </p>
                      </div>

                      <div className="font-semibold">
                        ₹{item.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>

                <hr className="my-6" />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>₹{orderTotal}</span>
                </div>
              </div>
            );
          })
        )}

      </div>
    </div>
  );
};

export default Orders;