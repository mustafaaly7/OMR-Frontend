import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import PricingSection from "../components/PricingSection";
import FeaturesSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import SubscriptionModal from "../components/SubscriptionModal";
import SuccessPopup from "../components/SuccessPop";
import TestimonialsSection from "../components/Testimonial";
import FAQSection from "../components/FaqSection";
import { useState } from "react";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(""); // <-- ADD THIS

  const handleSubscribe = (planName) => {
    setSelectedPlan(planName);  // store selected plan
    setShowModal(true);         // open modal
  };

  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection onSubscribe={handleSubscribe} /> {/* <-- pass function */}

      <TestimonialsSection />
      <FAQSection />

      <Footer />

      <SubscriptionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSuccess={() => setShowSuccess(true)}
        selectedPlan={selectedPlan}  // <-- pass selected plan
      />
      <SuccessPopup
        isVisible={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
};

export default Index;
