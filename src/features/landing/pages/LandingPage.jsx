import React from "react";
import Header from "../../../layout/Header";
import HeroSection from "../components/HeroSection";
import "../styles/landing.css";

function LandingPage() {
  return (
    <div className="landingContainer">
      <Header />
      <HeroSection />
    </div>
  );
}

export default LandingPage;
