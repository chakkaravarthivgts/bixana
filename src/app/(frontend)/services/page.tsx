import Blog from "../components/Blog";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServicesHero from "../components/ServicesHero";
import ServicesIntro from "../components/ServicesIntro";
import WhatWeDo from "../components/WhatWeDo";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicesHero />
      <ServicesIntro />
      <WhatWeDo />
      <Blog />
      <CTABanner />
      <Footer />
    </main>
  );
}
