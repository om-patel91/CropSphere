import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import API from "../api/axios";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await API.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.log(error.response?.data);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="p-20 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-96 object-contain"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-primary mt-2">
            {product.name}
          </h1>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-3xl font-bold text-primary">
              ₹{product.price}
            </span>
          </div>

          <p className="mt-8 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-10 bg-primary text-white px-8 py-4 rounded-xl"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;