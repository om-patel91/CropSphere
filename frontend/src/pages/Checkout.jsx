import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
    setLoading(true);  
    await API.post("/orders", {
      shippingAddress,
      paymentMethod,
    });
    navigate("/order-success");
  } catch (error) {
    alert(error.response?.data?.message || "Order failed");
  } finally {
    setLoading(false);  
  }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="fullName" placeholder="Full Name" onChange={handleChange} required className="input" />
        <input name="phone" placeholder="Phone" onChange={handleChange} required className="input" />
        <input name="address" placeholder="Address" onChange={handleChange} required className="input" />
        <input name="city" placeholder="City" onChange={handleChange} required className="input" />
        <input name="postalCode" placeholder="Postal Code" onChange={handleChange} required className="input" />

        <select onChange={(e) => setPaymentMethod(e.target.value)} className="input">
          <option value="COD">Cash on Delivery</option>
          <option value="UPI">UPI</option>
        </select>

        <button
          disabled={loading}
          className="bg-green-600 text-white px-4 py-3 rounded w-full"
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default Checkout;