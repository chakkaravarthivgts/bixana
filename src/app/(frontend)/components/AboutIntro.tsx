"use client";

export default function AboutIntro() {
  return (
    <section className="bg-white" id="about-intro">
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-12 py-12 md:py-16 lg:py-20 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-start">
          {/* Left: Large Heading */}
          <div className="lg:col-span-5">
            <h2
              className="text-black font-light text-[32px] sm:text-[40px] md:text-[48px] lg:text-[68px] leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-[78px] tracking-[-0.8px] sm:tracking-[-1.0px] md:tracking-[-1.4px] lg:tracking-[-2.04px]"
              style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
            >
              Our Path to Transforming Dental Care
            </h2>
          </div>

          {/* Right: Paragraph */}
          <div className="lg:col-span-7">
            <p
              className="text-[#6B7390] font-light text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[48px] tracking-[-0.3px] sm:tracking-[-0.5px] md:tracking-[-0.8px] lg:tracking-[-1.28px]"
              style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
            >
              At Toothfairy, we are redefining dental practice management with
              smart, intuitive solutions designed for modern clinics. Our
              mission is to help dental teams streamline operations, enhance
              patient communication, and focus on what matters most: delivering
              exceptional care. By bridging the gap between front-office
              efficiency and clinical excellence, we simplify daily workflows
              and empower practices to grow with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
