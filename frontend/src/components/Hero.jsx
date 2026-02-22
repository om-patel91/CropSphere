import heroImage from "../assets/hero.jpg";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative h-[92vh] flex items-center justify-center text-center">

            {/* Background Image */}
            <img
                src={heroImage}
                alt="Agriculture"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-black/40"></div>

            {/* Content */}
           <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative z-10 max-w-4xl px-6 text-white mx-auto"
>
                <div className="max-w-2xl">

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Smart Agriculture for a Better Tomorrow
                    </h1>

                    <p className="mt-6 text-lg text-gray-200">
                        Buy seeds, fertilizers, rent machinery, explore government schemes,
                        get weather updates and AI-powered farming assistance — all in one platform.
                    </p>

                    <div className="mt-8 flex justify-center gap-4">
                        <button
                            onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
                            className="bg-secondary px-8 py-3 rounded-full text-white font-semibold hover:scale-105 transition"
                        >
                            Explore Products
                        </button>

                        <button className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition">
                            Learn More
                        </button>
                    </div>

                </div>
            </motion.div>
        </section>
    );
};

export default Hero;