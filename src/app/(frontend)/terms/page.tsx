import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsPage() {
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
                Terms of Service
              </span>
            </div>
            <h1
              className="text-black font-light text-[40px] sm:text-[52px] md:text-[62px] lg:text-[76px] xl:text-[80px] leading-tight tracking-[-0.8px] sm:tracking-[-1.0px] md:tracking-[-1.4px] lg:tracking-[-2.04px] mb-4"
              style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
            >
              Terms of Service
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

          {/* Introduction */}
          <div className="mb-6 sm:mb-7 lg:mb-8">
            <p
              className="text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em]"
              style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
            >
              Welcome to Toothfairy! These Terms of Service (&quot;Terms&quot;)
              govern your access to and use of our cloud-based dental practice
              platform (&quot;Service&quot;) provided by Bixana Inc.
              (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By using
              Bixana, you agree to be bound by these Terms.
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
                1. Eligibility
              </h2>
              <p
                className="text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em]"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                To use our services, you must be at least 18 years old and
                authorized to represent a dental practice or clinic.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2
                className="text-black font-light text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight mb-3 sm:mb-4 tracking-[-0.02em]"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                2. Services Provided
              </h2>
              <p
                className="text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em] mb-3"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                Bixana offers a digital platform for:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em] ml-4">
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Appointment scheduling and management
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Patient communication via text and email
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Treatment plan sharing and digital consent
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Eligibility benefit verification
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Integration with OpenDental and other third-party tools
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2
                className="text-black font-light text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight mb-3 sm:mb-4 tracking-[-0.02em]"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                3. Account Responsibility
              </h2>
              <p
                className="text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em] mb-3"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em] ml-4">
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Maintaining the security of your login credentials
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Ensuring your data is accurate and updated
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Managing user access in your organization
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2
                className="text-black font-light text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight mb-3 sm:mb-4 tracking-[-0.02em]"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                4. Subscription & Billing
              </h2>
              <ul className="list-disc list-inside space-y-1.5 text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em] ml-4">
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  We offer a Free plan and Standard paid subscriptions on
                  monthly or yearly billing cycles.
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  By subscribing, you agree to pay all applicable fees.
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Subscriptions auto-renew unless canceled before the renewal
                  date.
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2
                className="text-black font-light text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight mb-3 sm:mb-4 tracking-[-0.02em]"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                5. Data & Compliance
              </h2>
              <ul className="list-disc list-inside space-y-1.5 text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em] ml-4">
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  You are responsible for ensuring the data you upload complies
                  with all applicable laws (e.g., HIPAA).
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  We implement security measures to safeguard patient data, but
                  ultimate compliance rests with your clinic.
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2
                className="text-black font-light text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight mb-3 sm:mb-4 tracking-[-0.02em]"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                6. Prohibited Activities
              </h2>
              <p
                className="text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em] mb-3"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em] ml-4">
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Use Bixana for illegal or unauthorized purposes
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Reverse engineer or attempt to access the source code
                </li>
                <li style={{ fontFamily: "Inter Tight", fontWeight: 300 }}>
                  Upload or distribute harmful or offensive content
                </li>
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <h2
                className="text-black font-light text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight mb-3 sm:mb-4 tracking-[-0.02em]"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                7. Termination
              </h2>
              <p
                className="text-[#585858] text-[16px] sm:text-[18px] leading-[1.6] tracking-[-0.02em]"
                style={{ fontFamily: "Inter Tight", fontWeight: 300 }}
              >
                We reserve the right to suspend or terminate access if these
                Terms are violated. You may cancel at any time via your account
                dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
