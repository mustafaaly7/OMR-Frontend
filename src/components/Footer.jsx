import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
    }),
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
          {/* Brand Section */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
          >
            <h2 className="text-2xl font-bold text-white mb-3">
              OMR <span className="text-indigo-400">Paper Checker</span>
            </h2>
            <p className="text-sm text-gray-400">
              Automate your OMR paper checking with speed and accuracy for
              researchers and educators.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
          >
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-indigo-400 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-indigo-400 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
          >
            <h3 className="text-lg font-semibold text-white mb-3">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-3">
              Subscribe to get updates and news.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-l bg-gray-800 text-white border border-gray-700 focus:outline-none"
              />
              <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-r text-white transition">
                Subscribe
              </button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
          >
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-indigo-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-indigo-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="mailto:support@omrchecker.com" className="hover:text-indigo-400 transition">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mt-6">
          <p>&copy; {new Date().getFullYear()} OMR Paper Checker. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
