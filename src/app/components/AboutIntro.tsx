"use client";

export default function AboutIntro() {
  return (
    <section className="bg-white" id="about-intro">
      <div className="mx-auto max-w-8xl md:px-10 lg:px-12 py-16 md:py-20 lg:py-24 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Large Heading */}
          <div className="lg:col-span-5">
            <h2 className="text-black font-light font-['Helvetica_Neue'] text-[68px] leading-[78px] tracking-[-2.04px]">
              <span className="block">Our Path to</span>
              <span className="block">Transforming Dental</span>
              <span className="block">Care</span>
            </h2>
          </div>

          {/* Right: Paragraph */}
          <div className="lg:col-span-7">
            <p className="text-[#585858] font-light font-['Helvetica_Neue'] text-[32px] leading-[48px] tracking-[-1.28px]">
              At Bixana, we are redefining dental practice management with
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
