"use client";

import React from "react";
import Navbar from "../components/Navbar";
import AIHero from "../components/AIHero";
import AIFeatures from "../components/AIFeatures";
import AIWhyUs from "../components/AIWhyUs";
import AIHowItWorksWithTextReveal from "../components/AIHowItWorksWithTextReveal";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import CTABanner from "../components/CTABanner";

export default function AIPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="dark" />

      {/* AI Hero Section */}
      <AIHero />
      <AIFeatures />
      <AIWhyUs />
      <AIHowItWorksWithTextReveal />
      <Testimonials />
      <Blog />
      <CTABanner />
      <Footer />
    </div>
  );
}
