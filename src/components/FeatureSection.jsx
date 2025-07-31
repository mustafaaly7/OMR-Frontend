import { motion } from "framer-motion";
import { Brain, FileText, AlertTriangle, Cloud, BarChart, FileDown } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    { title: "AI-powered paper scanning", icon: Brain },
    { title: "Multiple file formats", icon: FileText },
    { title: "Detailed error reports", icon: AlertTriangle },
    { title: "Secure cloud-based storage", icon: Cloud },
    { title: "Real-time progress tracking", icon: BarChart },
    { title: "Export reports in PDF format", icon: FileDown },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-br from-indigo-50 to-white text-center"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-900 mb-4"
        >
          Powerful Features
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-12 text-lg"
        >
          Everything you need to scan, analyze, and manage papers effortlessly.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-lg border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              custom={i}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="flex justify-center mb-4"
              >
                <f.icon className="w-10 h-10 text-indigo-600" />
              </motion.div>
              <p className="text-lg font-medium text-gray-800">{f.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
