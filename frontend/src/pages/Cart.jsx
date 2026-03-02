import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Your Cart is Empty 🛒</h2>
        <button
          onClick={() => navigate("/products")}
          className="bg-green-600 text-white px-6 py-3 rounded-xl"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Cart Items */}
        <div className="md:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white p-6 rounded-xl shadow"
            >
              <div className="flex items-center gap-6">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-24 h-24 object-contain"
                />

                <div>
                  <h3 className="text-lg font-semibold">
                    {item.product.name}
                  </h3>
                  <p className="text-gray-600">
                    ₹{item.product.price}
                  </p>

                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 text-sm mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    updateQuantity(item._id, item.quantity - 1)
                  }
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>

                <span className="font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    updateQuantity(item._id, item.quantity + 1)
                  }
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white p-8 rounded-xl shadow h-fit">
          <h2 className="text-xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-4">
            <span>Total Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="flex justify-between mb-6 text-lg font-semibold">
            <span>Total Price</span>
            <span>₹{totalPrice}</span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-green-600 text-white py-3 rounded-xl"
          >
            Proceed to Checkout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cart;