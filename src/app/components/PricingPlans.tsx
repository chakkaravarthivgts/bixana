"use client";

interface FeatureItemProps {
  text: string;
  included: boolean;
  textColor?: string;
}

const FeatureItem = ({
  text,
  included,
  textColor = "text-black",
}: FeatureItemProps) => {
  return (
    <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-[18px] items-start justify-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-4 sm:size-5 md:size-6 mt-1">
        {included ? (
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <div
        className={`font-['Helvetica_Neue:Light',_sans-serif] leading-[0] not-italic relative shrink-0 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] text-left tracking-[-1.12px] flex-1 ${textColor}`}
      >
        <p className="leading-tight sm:leading-[1.2] md:leading-[1.3] lg:leading-[1.4] xl:leading-[1.5] 2xl:leading-[38px] break-words">
          {text}
        </p>
      </div>
    </div>
  );
};

interface PlanCardProps {
  title: string;
  price: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonStyle: "blue" | "white";
  isPopular?: boolean;
  features: FeatureItemProps[];
  cardStyle: "white" | "blue";
}

const PlanCard = ({
  title,
  price,
  subtitle,
  description,
  buttonText,
  buttonStyle,
  isPopular = false,
  features,
  cardStyle,
}: PlanCardProps) => {
  const isBlueCard = cardStyle === "blue";
  const textColor = isBlueCard ? "text-white" : "text-black";
  const titleColor = isBlueCard ? "text-white" : "text-[#777777]";
  const subtitleColor = isBlueCard ? "text-[#6ba7ff]" : "text-[#585858]";
  const featuresBg = isBlueCard ? "bg-[#0D61DE]" : "bg-neutral-100";
  const borderColor = isBlueCard ? "border-black" : "border-[#777777]";
  const dividerColor = isBlueCard ? "border-[#74acff]" : "border-[#999999]";

  return (
    <div
      className={`${isBlueCard ? "bg-gradient-to-br from-blue-600 to-blue-700" : "bg-white"} relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[40px] lg:rounded-[50px] shrink-0 w-full max-w-7xl`}
    >
      <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[70px] py-5 sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-[52px] relative w-full">
        <div className="content-stretch flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-[69px] items-center justify-start relative shrink-0 w-full">
          {/* Left Section - Pricing Info */}
          <div className="content-stretch flex flex-col gap-5 sm:gap-7 md:gap-8 items-start justify-start relative shrink-0 w-full lg:w-[280px]">
            <div className="content-stretch flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-[34px] items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 items-start sm:items-center justify-start relative shrink-0 w-full">
                  <div
                    className={`font-['Helvetica_Neue'] font-light leading-[0] not-italic relative shrink-0 text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-nowrap tracking-[-1.32px] ${titleColor}`}
                  >
                    <p className="leading-tight sm:leading-[1.2] md:leading-[1.3] lg:leading-[44px] whitespace-pre">
                      {title}
                    </p>
                  </div>
                  {isPopular && (
                    <div className="box-border content-stretch flex gap-2.5 h-[45px] items-center justify-center p-[10px] relative rounded-[200px] shrink-0 w-[103px] border-2 border-white">
                      <div className="font-['Helvetica_Neue'] font-light leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white uppercase">
                        <p className="leading-[1.3] whitespace-pre">popular</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="content-stretch flex flex-col font-['Helvetica_Neue'] font-light gap-2 sm:gap-2 md:gap-3 lg:gap-2 items-start justify-end leading-[0] not-italic relative shrink-0 text-nowrap w-full">
                  <div
                    className={`relative shrink-0 text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[64px] 2xl:text-[96px] text-center tracking-[2.8px] ${textColor}`}
                  >
                    <p className="leading-tight sm:leading-[1.1] md:leading-[1.2] lg:leading-[1.2] xl:leading-[1.2] 2xl:leading-[1.2] text-nowrap whitespace-pre">
                      {price}
                    </p>
                  </div>
                  <div
                    className={`relative shrink-0 text-base sm:text-lg md:text-xl lg:text-[20px] tracking-[-1.12px] ${subtitleColor}`}
                  >
                    <p className="leading-tight sm:leading-[1.2] md:leading-[1.3] lg:leading-[28px] text-nowrap whitespace-pre">
                      {subtitle}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`font-['Helvetica_Neue'] font-light leading-[0] not-italic relative shrink-0 text-sm sm:text-base md:text-lg lg:text-[18px] xl:text-[20px] 2xl:text-[22px] tracking-[-1.12px] w-full ${textColor}`}
              >
                <p className="leading-tight sm:leading-[1.3] md:leading-[1.4] lg:leading-[1.5] xl:leading-[1.5] 2xl:leading-[30px]">
                  {description}
                </p>
              </div>
            </div>
            <div
              className={`${buttonStyle === "blue" ? "bg-[#0052cc]" : "bg-white"} box-border content-stretch flex gap-2.5 h-10 sm:h-11 md:h-12 lg:h-[48px] items-center justify-center p-2 sm:p-3 md:p-[8px] relative rounded-[200px] shrink-0 w-full sm:w-36 md:w-40 lg:w-[180px]`}
            >
              <div
                className={`font-['Helvetica_Neue'] font-light leading-[0] not-italic relative shrink-0 text-xs sm:text-sm md:text-base lg:text-[16px] text-center text-nowrap uppercase ${buttonStyle === "blue" ? "text-white" : "text-[#0052cc]"}`}
              >
                <p className="leading-[1.3] whitespace-pre">{buttonText}</p>
              </div>
            </div>
          </div>

          {/* Right Section - Features */}
          <div
            className={`${featuresBg} box-border content-stretch flex flex-col gap-2 h-auto items-start justify-start px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-5 sm:py-6 md:py-8 lg:py-10 xl:py-12 relative rounded-2xl sm:rounded-3xl md:rounded-[40px] lg:rounded-[50px] shrink-0 w-full lg:flex-1`}
          >
            <div className="content-stretch flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-1.5 sm:gap-2 md:gap-3 h-auto items-start justify-start relative shrink-0 w-full">
                <div
                  className={`font-['Helvetica_Neue'] font-light leading-[0] not-italic relative shrink-0 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[42px] text-nowrap tracking-[-1.1px] ${textColor}`}
                >
                  <p className="leading-tight sm:leading-[1.1] md:leading-[1.2] lg:leading-[1.2] xl:leading-[1.25] 2xl:leading-[48px] whitespace-pre">
                    Available Features
                  </p>
                </div>
              </div>
              <div className="content-stretch grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 items-start justify-start relative shrink-0 w-full">
                {/* Left Column */}
                <div className="content-stretch flex flex-col gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 items-start justify-start relative shrink-0 w-full">
                  <div
                    aria-hidden="true"
                    className={`absolute ${dividerColor} border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none hidden lg:block`}
                  />
                  {features.slice(0, 7).map((feature, index) => (
                    <FeatureItem
                      key={index}
                      text={feature.text}
                      included={feature.included}
                      textColor={textColor}
                    />
                  ))}
                </div>
                {/* Right Column */}
                <div className="content-stretch flex flex-col gap-2.5 sm:gap-3 md:gap-4 items-start justify-start relative shrink-0 w-full">
                  {features.slice(7).map((feature, index) => (
                    <FeatureItem
                      key={index + 7}
                      text={feature.text}
                      included={feature.included}
                      textColor={textColor}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className={`absolute border ${borderColor} border-solid inset-0 pointer-events-none rounded-2xl sm:rounded-3xl md:rounded-[40px] lg:rounded-[50px]`}
      />
    </div>
  );
};

const PricingPlans = () => {
  const freeFeatures = [
    { text: "Schedule Appointments", included: true },
    { text: "Basic Reminders", included: true },
    { text: "Instant Messaging", included: true },
    { text: "Digital Consents", included: false },
    { text: "Treatment & Payment Plans", included: true },
    { text: "Eligibility Benefits Summary", included: false },
    { text: "1300+ Providers Supported", included: false },
    { text: "Review Requests", included: true },
    { text: "Communication Logs", included: false },
    { text: "Reschedule/Unschedule Appointments", included: true },
    { text: "Text & Email Templates", included: false },
    { text: "Inbuilt Templates", included: true },
    { text: "Treatment Finder", included: true },
    { text: "Application Support 24*7", included: false },
  ];

  const standardFeatures = [
    { text: "Schedule Appointments", included: true },
    { text: "Basic Reminders", included: true },
    { text: "Instant Messaging", included: true },
    { text: "Digital Consents", included: true },
    { text: "Treatment & Payment Plans", included: true },
    { text: "Eligibility Benefits Summary", included: true },
    { text: "1300+ Providers Supported", included: true },
    { text: "Review Requests", included: true },
    { text: "Communication Logs", included: true },
    { text: "Reschedule/Unschedule Appointments", included: true },
    { text: "Text & Email Templates", included: true },
    { text: "Inbuilt Templates", included: true },
    { text: "Treatment Finder", included: true },
    { text: "Application Support 24*7", included: true },
  ];

  const businessFeatures = standardFeatures; // Same features as Standard

  return (
    <div className="bg-neutral-100 box-border content-stretch flex gap-2.5 items-start justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[97px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-[143px] relative size-full">
      <div className="content-stretch flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-[131px] items-start justify-start relative shrink-0 w-full max-w-8xl">
        {/* Header Section */}
        <div className="content-stretch flex flex-col h-auto sm:h-48 md:h-56 items-center justify-between relative shrink-0 w-full">
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8 md:mb-10">
            <div className="w-3 h-3 bg-gradient-to-b from-blue-600 to-white rounded-full"></div>
            <span className="text-black text-sm sm:text-base font-light uppercase tracking-wide">
              PLANS
            </span>
          </div>
          <div className="font-['Helvetica_Neue'] font-light leading-[0] not-italic relative shrink-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[68px] text-black text-center tracking-[-2.04px] w-full max-w-4xl px-4">
            <p className="leading-tight sm:leading-[1.1] md:leading-[1.2] lg:leading-[1.3] xl:leading-[1.4] 2xl:leading-[78px]">
              Our Pricing is Affordable To all customer
            </p>
          </div>
        </div>

        {/* Plan Cards */}
        <div className="content-stretch flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-[67px] items-center justify-start relative shrink-0 w-full">
          {/* Free Plan */}
          <PlanCard
            title="Free"
            price="$0"
            subtitle="forever free"
            description="Best for small clinics looking to try the basic features"
            buttonText="get started"
            buttonStyle="blue"
            features={freeFeatures}
            cardStyle="white"
          />

          {/* Standard Plan */}
          <PlanCard
            title="Standard"
            price="$149"
            subtitle="/ month"
            description="Full access to all features with flexible billing"
            buttonText="get started"
            buttonStyle="white"
            isPopular={true}
            features={standardFeatures}
            cardStyle="blue"
          />

          {/* Business Plan */}
          <PlanCard
            title="Business"
            price="$1341"
            subtitle="1788/year"
            description="Best value—save 25% with full features"
            buttonText="get started"
            buttonStyle="blue"
            features={businessFeatures}
            cardStyle="white"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
