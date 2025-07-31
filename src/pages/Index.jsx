import { useState } from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import PricingSection from "../components/PricingSection";
import FeaturesSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import SubscriptionModal from "../components/SubscriptionModal";
import SuccessPopup from "../components/SuccessPop";
import TestimonialsSection from "../components/Testimonial";
import FAQSection from "../components/FaqSection";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    
      <>
      <Header />
      <HeroSection  />
      <FeaturesSection />
      <PricingSection onSubscribe={() => setShowModal(true)} />

      <TestimonialsSection />
      <FAQSection />

      <Footer />

      <SubscriptionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSuccess={() => setShowSuccess(true)}
      />
      <SuccessPopup
        isVisible={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
};

export default Index;
