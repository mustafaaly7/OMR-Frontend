import { motion } from "framer-motion";
import { CheckCircle, Users } from "lucide-react";

const HeroSection = () => {
  const scrollToPricing = () => {
    document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-800 text-white text-center py-28 overflow-hidden">
      {/* Background Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* Floating Icons */}
      <motion.div
        className="absolute top-32 right-1/4 text-white/20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Users size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-28 left-1/4 text-white/20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <CheckCircle size={40} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold leading-snug mb-4"
        >
          Automate Your{" "}
          <span className="bg-gradient-to-r from-yellow-200 to-pink-400 bg-clip-text text-transparent">
            OMR Paper Checking
          </span>
        </motion.h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-100 mb-6">
          Fast, accurate, and effortless paper checking for{" "}
          <span className="text-white font-semibold">researchers</span> and{" "}
          <span className="text-white font-semibold">educators</span>.
        </p>

        {/* Trust Badges */}
        <div className="flex justify-center gap-6 mb-8 text-xs md:text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Trusted by 500+ educators
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            99.9% accuracy rate
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={scrollToPricing}
            className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-indigo-500/40 hover:scale-105 transition-all"
          >
            Subscribe Now
          </button>
          <a
            href="#features"
            className="border border-white/80 text-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-700 hover:scale-105 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
