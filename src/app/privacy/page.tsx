import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Single Page Section */}
      <section className="bg-white pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-gradient-to-b from-blue-600 to-white rounded-full" />
              <span
                className="text-black text-sm sm:text-base font-light uppercase tracking-wide"
                style={{ fontFamily: "Inter Tight" }}
              >
                Privacy Policy
              </span>
            </div>
            <h1
              className="text-black font-light text-[40px] sm:text-[52px] md:text-[62px] lg:text-[76px] xl:text-[80px] leading-tight tracking-[-0.8px] sm:tracking-[-1.0px] md:tracking-[-1.4px] lg:tracking-[-2.04px] mb-4"
              style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
            >
              Privacy Policy
            </h1>
            <p
              className="text-[#585858] text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] tracking-[-0.02em]"
              style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
            >
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-7 lg:space-y-8">
            {/* Section 1 */}
            <div>
              <h2
                className="text-black font-light text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight mb-3 sm:mb-4 tracking-[-0.02em]"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                1. Information We Collect
              </h2>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3
                    className="text-black font-normal text-[20px] sm:text-[24px] md:text-[28px] mb-2 sm:mb-3 tracking-[-0.02em]"
                    style={{ fontFamily: "Inter Tight", fontWeight: 400 }}
                  >
                    A. Personal and Clinic Information
                  </h3>
                  <p
                    className="text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em]"
                    style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
                  >
                    When you register or use Bixana, we collect:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1.5 text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em] ml-4">
                    <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                      Name, email, phone number
                    </li>
                    <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                      Clinic name, address, and NPI or license information
                    </li>
                    <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                      Payment and billing details (for paid plans)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3
                    className="text-black font-normal text-[20px] sm:text-[24px] md:text-[28px] mb-3 sm:mb-4 tracking-[-0.02em]"
                    style={{ fontFamily: "Inter Tight", fontWeight: 400 }}
                  >
                    B. Patient Data
                  </h3>
                  <p
                    className="text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em]"
                    style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
                  >
                    You may upload or generate data on your patients, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1.5 text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em] ml-4">
                    <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                      Appointments, forms, treatment plans
                    </li>
                    <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                      Messages and consents
                    </li>
                    <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                      Eligibility and insurance details
                    </li>
                  </ul>
                </div>

                <div>
                  <h3
                    className="text-black font-normal text-[20px] sm:text-[24px] md:text-[28px] mb-3 sm:mb-4 tracking-[-0.02em]"
                    style={{ fontFamily: "Inter Tight", fontWeight: 400 }}
                  >
                    C. Technical Data
                  </h3>
                  <p
                    className="text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em]"
                    style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
                  >
                    We collect metadata like:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1.5 text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em] ml-4">
                    <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                      Device/browser info
                    </li>
                    <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                      Log data (IP address, timestamps)
                    </li>
                    <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                      Usage metrics for analytics
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2
                className="text-black font-light text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight mb-3 sm:mb-4 tracking-[-0.02em]"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                2. How We Use Your Information
              </h2>
              <p
                className="text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em] mb-3"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                We use the collected data to:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em] ml-4">
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Provide, maintain, and improve our services
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Respond to support inquiries
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Send important service notifications
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Ensure security and compliance
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Offer updates and new features (marketing, if consented)
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2
                className="text-black font-light text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight mb-3 sm:mb-4 tracking-[-0.02em]"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                3. Data Sharing and Disclosure
              </h2>
              <p
                className="text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em] mb-3"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                We do not sell your personal or patient data. We may share
                limited information:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em] ml-4">
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  With trusted vendors (e.g., cloud storage, SMS providers)
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  When required by law or legal process
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  To protect Bixana&apos;s rights or prevent fraud
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2
                className="text-black font-light text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight mb-3 sm:mb-4 tracking-[-0.02em]"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                4. HIPAA & Data Security
              </h2>
              <ul className="list-disc list-inside space-y-1.5 text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em] ml-4">
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Bixana is designed with HIPAA-compliant features and
                  encryption standards.
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  You are responsible for properly using the platform in
                  compliance with HIPAA regulations.
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  We offer secure data storage and access controls.
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2
                className="text-black font-light text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight mb-3 sm:mb-4 tracking-[-0.02em]"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                5. User Rights
              </h2>
              <p
                className="text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em] mb-3"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em] ml-4">
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Access, modify, or delete your account information
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Request deletion of patient data (with appropriate
                  permissions)
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Opt out of non-essential communications
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2
                className="text-black font-light text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight mb-3 sm:mb-4 tracking-[-0.02em]"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                6. Data Retention
              </h2>
              <p
                className="text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em]"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                We retain data as long as necessary to deliver services or
                comply with legal obligations. Upon account termination, data
                may be deleted per our retention policy.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2
                className="text-black font-light text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight mb-3 sm:mb-4 tracking-[-0.02em]"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                7. Children&apos;s Privacy
              </h2>
              <p
                className="text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em]"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                Bixana is not intended for use by individuals under 18 without
                proper authorization.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2
                className="text-black font-light text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight mb-3 sm:mb-4 tracking-[-0.02em]"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                8. Policy Updates
              </h2>
              <p
                className="text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em]"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                We may update this policy from time to time. Any material
                changes will be communicated via email or in-app notifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
