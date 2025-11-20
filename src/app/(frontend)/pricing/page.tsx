import Navbar from "../components/Navbar";
import PricingHero from "../components/PricingHero";
import PlanSimple from "../components/PlanSimple";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Blog from "../components/Blog";
import CTABanner from "../components/CTABanner";

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PricingHero />
      {/* Header moved inside PlanSimple component */}
      <PlanSimple />
      <FAQ />
      <Blog />
      <CTABanner />
      <Footer />
    </main>
  );
}
