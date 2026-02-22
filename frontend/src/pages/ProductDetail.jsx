import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Hybrid Tomato Seeds",
    brand: "AgroTech",
    price: 299,
    oldPrice: 350,
    image: "https://via.placeholder.com/300",
    description: "High yield hybrid tomato seeds suitable for all climates.",
  },
  {
    id: 2,
    name: "Organic Fertilizer",
    brand: "GreenGrow",
    price: 499,
    oldPrice: 550,
    image: "https://via.placeholder.com/300",
    description: "Eco-friendly organic fertilizer for healthy soil growth.",
  },
  {
    id: 3,
    name: "Advanced Pesticide Spray",
    brand: "FarmCare",
    price: 699,
    oldPrice: 750,
    image: "https://via.placeholder.com/300",
    description: "Effective protection against insects and crop diseases.",
  },
];

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (p) => p.id === parseInt(id)
  );

  if (!product) {
    return <div className="p-20 text-center">Product Not Found</div>;
  }

  return (
    <div className="min-h-screen py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* Image */}
        <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-96 object-contain"
          />
        </div>

        {/* Info */}
        <div>
          <p className="text-sm text-gray-500">{product.brand}</p>

          <h1 className="text-4xl font-bold text-primary mt-2">
            {product.name}
          </h1>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-3xl font-bold text-primary">
              ₹{product.price}
            </span>
            <span className="text-lg text-gray-400 line-through">
              ₹{product.oldPrice}
            </span>
          </div>

          <p className="mt-8 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <button className="mt-10 bg-primary text-white px-8 py-4 rounded-xl hover:bg-secondary transition">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;