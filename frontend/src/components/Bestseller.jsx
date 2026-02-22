import ProductCard from "./ProductCard";

const dummyProducts = [
  {
    id: 1,
    name: "Amruth Micro Growth Promoter",
    brand: "Amruth Traders",
    price: 309,
    oldPrice: 325,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    name: "Isabion Biostimulant",
    brand: "Syngenta",
    price: 207,
    oldPrice: 218,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 3,
    name: "Madhur Beetroot Seeds",
    brand: "Namdhari Seeds",
    price: 374,
    oldPrice: 640,
    image: "https://via.placeholder.com/200"
  },
];

const BestSellers = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-primary">
            Best Sellers
          </h2>
          <p className="mt-4 text-gray-600 max-w-lg">
            Trusted by thousands of farmers across the country.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BestSellers;