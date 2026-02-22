import { Tractor, BookOpen, CloudSun, Bot } from "lucide-react";

const features = [
  {
    title: "Equipment Rentals",
    desc: "Book tractors and farming equipment easily at affordable rates.",
    icon: Tractor,
  },
  {
    title: "Educational Resources",
    desc: "Access farming guides and expert knowledge anytime.",
    icon: BookOpen,
  },
  {
    title: "Weather Updates",
    desc: "Real-time weather forecasts tailored to your location.",
    icon: CloudSun,
  },
  {
    title: "AI Farming Assistant",
    desc: "Get smart suggestions and crop guidance powered by AI.",
    icon: Bot,
  },
];

const WhySection = () => {
  return (
    <section className="py-32 bg-light">
      <div className="max-w-7xl mx-auto px-6">

        {/* Bigger Heading */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-primary">
            Why CropSphere?
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            A complete ecosystem designed to empower modern farmers.
          </p>
        </div>

        {/* Bigger Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="space-y-6">
                
                {/* Bigger Icon */}
                <Icon size={48} className="text-secondary" />

                <h3 className="text-2xl font-semibold text-gray-800">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.desc}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhySection;