import Navbar from "../components/Navbar";
import ContactHero from "../components/ContactHero";
import Footer from "../components/Footer";
import Blog from "../components/Blog";
import CTABanner from "../components/CTABanner";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />
      <CTABanner />
      <Footer />
    </main>
  );
}
