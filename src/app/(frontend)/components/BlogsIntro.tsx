"use client";

export default function BlogsIntro() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1
          className="text-black mb-6"
          style={{
            fontFamily: "Inter Tight",
            fontWeight: 300,
            fontSize: "clamp(36px, 6vw, 64px)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          Blogs & Insights
        </h1>

        {/* Description */}
        <p
          className="text-[#6B7390] max-w-3xl mx-auto"
          style={{
            fontFamily: "Inter Tight",
            fontWeight: 300,
            fontSize: "clamp(16px, 2.5vw, 20px)",
            lineHeight: 1.6,
            letterSpacing: "-0.01em",
          }}
        >
          Dive into thoughtful articles, in-depth analyses, and fresh ideas
          designed to inspire, educate, and keep you ahead of the curve.
        </p>
      </div>
    </section>
  );
}
