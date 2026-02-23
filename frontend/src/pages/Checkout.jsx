import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems } = useCart();
  const { placeOrder } = useOrders();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    placeOrder(cartItems);
    localStorage.removeItem("cart");
    navigate("/orders");
  };

  return (
    <div className="min-h-screen py-24 px-6">
      <h1 className="text-4xl font-bold text-primary mb-10">
        Checkout
      </h1>

      {cartItems.map(item => (
        <div key={item.id} className="mb-4">
          {item.name} - ₹{item.price}
        </div>
      ))}

      <button
        onClick={handleCheckout}
        className="mt-8 bg-primary text-white px-8 py-4 rounded-xl"
      >
        Confirm Order
      </button>
    </div>
  );
};

export default Checkout;