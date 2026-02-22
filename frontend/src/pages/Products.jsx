import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Hybrid Tomato Seeds",
    brand: "AgroTech",
    price: 299,
    oldPrice: 350,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Organic Fertilizer",
    brand: "GreenGrow",
    price: 499,
    oldPrice: 550,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Advanced Pesticide Spray",
    brand: "FarmCare",
    price: 699,
    oldPrice: 750,
    image: "https://via.placeholder.com/200",
  },
];

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