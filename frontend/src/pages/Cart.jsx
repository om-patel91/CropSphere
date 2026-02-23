import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
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
              className="inline-block mt-6 bg-primary text-white px-6 py-3 rounded-xl hover:bg-secondary transition"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-6 bg-white shadow rounded-2xl flex justify-between items-center"
                >
                  <div>
                    <h2 className="text-lg font-semibold">
                      {item.name}
                    </h2>
                    <p className="text-gray-600">
                      ₹{item.price}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 font-semibold hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Total + Checkout */}
            <div className="mt-12 bg-white p-8 rounded-2xl shadow flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                Total: ₹{totalPrice}
              </h2>

              <Link
                to="/checkout"
                className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-secondary transition"
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