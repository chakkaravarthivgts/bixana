import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogsIntro from "../components/BlogsIntro";
import BlogsListing from "../components/BlogsListing";
import CTABanner from "../components/CTABanner";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BlogsIntro />
      <BlogsListing />
      <CTABanner />
      <Footer />
    </main>
  );
}
