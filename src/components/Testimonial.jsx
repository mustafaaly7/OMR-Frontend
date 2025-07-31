import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Sarah Khan",
    role: "Professor at EduTech University",
    feedback:
      "This tool has completely automated our paper checking process. It's fast, accurate, and has saved us countless hours.",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "John Patel",
    role: "High School Teacher",
    feedback:
      "The accuracy and ease of use are unmatched. My team and I rely on this every exam season.",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
  {
    name: "Emily Tan",
    role: "Researcher at DataLab",
    feedback:
      "The subscription pricing is perfect for our team, and the real-time tracking is a game-changer!",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          What Our Users Say
        </motion.h2>
        <p className="text-gray-600 mb-12">
          Trusted by educators and researchers worldwide.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-lg p-6 text-left"
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{t.feedback}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
