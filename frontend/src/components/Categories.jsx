import { Sprout, Droplet, Tractor, FlaskConical, Leaf } from "lucide-react";

const categories = [
  { title: "Seeds", icon: Sprout },
  { title: "Fertilizers", icon: Leaf },
  { title: "Pesticides", icon: FlaskConical },
  { title: "Irrigation", icon: Droplet },
  { title: "Rentals", icon: Tractor },
];

const Categories = () => {
  return (
    <section className="bg-light py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading - Left aligned (not centered) */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-primary">
            Explore by Category
          </h2>
          <p className="mt-4 text-gray-600 max-w-lg">
            Everything a modern farmer needs — from high-quality seeds
            to advanced irrigation systems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {categories.map((cat, index) => {
            const Icon = cat.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col items-start">

                  <div className="bg-accent p-4 rounded-xl group-hover:bg-secondary transition">
                    <Icon className="text-primary group-hover:text-white" size={32} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-gray-800 group-hover:text-primary transition">
                    {cat.title}
                  </h3>

                  <div className="w-10 h-[2px] bg-secondary mt-3 opacity-0 group-hover:opacity-100 transition"></div>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Categories;