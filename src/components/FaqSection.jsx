import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How accurate is the OMR paper checker?",
    answer:
      "Our AI-powered system provides up to 99.9% accuracy, ensuring reliable results for both small and large-scale assessments.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes! You can cancel or change your subscription plan anytime from your dashboard without hidden fees.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use secure cloud-based storage with end-to-end encryption to keep your data safe.",
  },
  {
    question: "Do you offer support?",
    answer:
      "Yes, our team provides email support for all plans and priority support for Pro and Enterprise plans.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-8"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="border rounded-lg p-4 shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-600"
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
