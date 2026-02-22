import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
        
        <div className="h-48 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full object-contain group-hover:scale-105 transition"
          />
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-500">{product.brand}</p>

          <h3 className="mt-1 text-lg font-semibold text-gray-800">
            {product.name}
          </h3>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-xl font-bold text-primary">
              ₹{product.price}
            </span>
            <span className="text-sm text-gray-400 line-through">
              ₹{product.oldPrice}
            </span>
          </div>
        </div>

      </div>
    </Link>
  );
};

export default ProductCard;