import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import WhatWeDo from "../components/WhatWeDo";
import WhatWeDoAbout from "../components/WhatWeDoAbout";
import OurValues from "../components/OurValues";
import BixanaThroughYears from "../components/BixanaThroughYears";
import OurStory from "../components/OurStory";
import AboutIntro from "../components/AboutIntro";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />
      <AboutIntro />
      <WhatWeDoAbout />
      <OurValues />
      <OurStory />
      <BixanaThroughYears />

      {/* Same sections as home page */}
      <Testimonials />
      <Blog />
      <CTABanner />
      <Footer />
    </main>
  );
}
