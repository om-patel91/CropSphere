import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce(
  (total, item) => total + Number(item.price) * item.quantity,
  0
);

  return (
    <div className="min-h-screen py-24 px-6 bg-light">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-primary mb-10">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl shadow text-center">
            <p className="text-gray-600 text-lg">
              Your cart is empty.
            </p>
            <Link
              to="/products"
              className="inline-block mt-6 bg-primary text-white px-6 py-3 rounded-xl"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="p-6 bg-white shadow rounded-2xl flex justify-between items-center"
                >
                  <div>
                    <h2 className="text-lg font-semibold">
                      {item.name}
                    </h2>
                    <p className="text-gray-600">
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <span className="font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white p-8 rounded-2xl shadow flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                Total: ₹{totalPrice}
              </h2>

              <Link
                to="/checkout"
                className="bg-primary text-white px-8 py-4 rounded-xl"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Cart;