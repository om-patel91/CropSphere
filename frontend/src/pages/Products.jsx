import ProductCard from "../components/ProductCard";
import products from "../data/products"

const Products = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">
          <h1 className="text-5xl font-bold text-primary">
            Our Products
          </h1>
          <p className="mt-4 text-gray-600 max-w-lg">
            High-quality agricultural products trusted by farmers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;