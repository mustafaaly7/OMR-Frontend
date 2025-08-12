import { AnimatePresence,motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const SubscriptionModal = ({ isOpen, onClose, onSuccess, selectedPlan }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const devUrl = import.meta.env.VITE_DEV_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${devUrl}user/subscribe`, {
        email,
        subscriptionPlan: selectedPlan,
      });

      if (!response.data.err) {
        toast.success(response.data.message || "Subscription request sent!");
        onSuccess?.();
        setEmail("");
        onClose();
      } else {
        toast.error(response.data.message || "Subscription failed.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl p-8 w-96 relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
              Subscribe to {selectedPlan}
            </h2>
            <p className="text-gray-500 text-center mb-6">
              Enter your email to request the {selectedPlan} plan.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {loading ? "Sending Request..." : `Confirm ${selectedPlan} Plan`}
              </motion.button>
            </form>

            <button
              onClick={onClose}
              className="block w-full text-center mt-4 text-sm text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubscriptionModal;
