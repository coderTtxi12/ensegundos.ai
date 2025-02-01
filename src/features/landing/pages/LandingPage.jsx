import React from "react";
import Header from "../../../layout/Header";
import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import TransitionsDemo from "../components/TransitionsDemo";
import "../styles/landing.css";

function LandingPage() {
  return (
    <div className="landingContainer">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <TransitionsDemo />
    </div>
  );
}

export default LandingPage;
