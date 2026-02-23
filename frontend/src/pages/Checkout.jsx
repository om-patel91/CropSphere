import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems } = useCart();
  const { placeOrder } = useOrders();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    placeOrder(cartItems);
    localStorage.removeItem("cart");
    navigate("/orders");
  };

  return (
    <div className="min-h-screen py-24 px-6 bg-light">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-primary mb-10">
          Checkout
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow space-y-6">

          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between">
              <div>
                <h2 className="font-semibold">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-sm">
                  ₹{item.price} × {item.quantity}
                </p>
              </div>

              <div className="font-semibold">
                ₹{item.price * item.quantity}
              </div>
            </div>
          ))}

          <hr />

          <div className="flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>₹{totalPrice}</span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full mt-6 bg-primary text-white py-4 rounded-xl"
          >
            Confirm Order
          </button>

        </div>

      </div>
    </div>
  );
};

export default Checkout;