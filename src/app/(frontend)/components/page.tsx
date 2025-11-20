import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Clients from "./Clients";
import Benefits from "./Benefits";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import CTABanner from "./CTABanner";
import Footer from "./Footer";
import AboutHero from "./AboutHero";
import BenefitsSimple from "./BenefitsSimple";

export default function ComponentsShowcase() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Components Showcase</h1>
        <p className="text-gray-600 mb-10">
          This page renders all UI components in isolation to verify layout and
          styles.
        </p>
      </section>
      <Hero
        videoSrc="/dental_background.mp4"
        posterSrc="/dental_background.mp4"
        overlayOpacity={0.1}
      />
      <AboutHero />
      <About />
      <Clients />
      {/* <Benefits /> */}
      <BenefitsSimple />
      <Features />
      <Testimonials />
      <Blog />
      <CTABanner />
      <Footer />
    </main>
  );
}
