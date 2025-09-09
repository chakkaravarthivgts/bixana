import Hero from "./components/Hero";
import About from "./components/About";
import Clients from "./components/Clients";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero
        videoSrc="/dental_background.mp4"
        posterSrc="/dental_background.mp4"
        overlayOpacity={0.1}
      />
      <About />
      <Clients />
      <Benefits />
      <Features />
      <Testimonials />
      <Blog />
      <CTABanner />
      <Footer />
    </div>
  );
}
