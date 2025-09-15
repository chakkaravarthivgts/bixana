import Navbar from "../components/Navbar";
import PricingHero from "../components/PricingHero";
import PricingPlans from "../components/PricingPlans";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Blog from "../components/Blog";
import CTABanner from "../components/CTABanner";

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PricingHero />
      <PricingPlans />
      <FAQ />
      <Blog />
      <CTABanner />
      <Footer />
    </main>
  );
}
