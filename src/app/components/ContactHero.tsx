"use client";

import Image from "next/image";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  width?: string;
}

const ContactCard = ({
  icon,
  title,
  content,
  width = "w-full",
}: ContactCardProps) => {
  return (
    <div
      className={`bg-white h-[180px] lg:h-[293px] relative rounded-[20px] lg:rounded-[43px] shrink-0 ${width}`}
    >
      <div className="box-border content-stretch flex flex-col gap-2 lg:gap-2.5 h-full items-center justify-center overflow-clip px-4 lg:px-[76px] py-4 lg:py-[37px] relative w-full">
        <div className="content-stretch flex flex-col gap-4 lg:gap-[30px] items-center justify-end relative shrink-0">
          <div className="content-stretch flex flex-col h-[100px] lg:h-[144px] items-center justify-between relative shrink-0 w-[100px] lg:w-[143px]">
            <div className="relative shrink-0 size-[50px] lg:size-[75px] flex items-center justify-center">
              {icon}
            </div>
            <div
              className="capitalize font-light leading-[0] not-italic relative shrink-0 text-[20px] lg:text-[30px] text-black text-nowrap tracking-[-0.5px] lg:tracking-[-1.14px]"
              style={{ fontFamily: "Inter Tight" }}
            >
              <p className="leading-[28px] lg:leading-[44px] whitespace-pre">
                {title}
              </p>
            </div>
          </div>
          <div
            className="leading-[0] not-italic relative shrink-0 text-[#777777] text-[14px] lg:text-[20px] text-center tracking-[-0.3px] lg:tracking-[-0.72px]"
            style={{ fontFamily: "Inter Tight" }}
          >
            <p className="leading-[20px] lg:leading-[38px]">{content}</p>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#c3c3c3] border-solid inset-0 pointer-events-none rounded-[20px] lg:rounded-[43px]"
      />
    </div>
  );
};

const ContactHero = () => {
  return (
    <div className="bg-white relative w-full">
      {/* Header Section */}
      <div className="h-[140px] lg:h-[200px] relative w-full">
        <div className="absolute bg-white h-[320px] lg:h-[460px] left-0 overflow-clip top-0 w-full">
          <div
            className="absolute content-stretch flex flex-col h-[100px] lg:h-[140px] items-center justify-between leading-[0] left-1/2 not-italic top-[24px] lg:top-[48px] translate-x-[-50%] px-4"
            style={{ fontFamily: "Inter Tight" }}
          >
            <div className="relative shrink-0 text-[32px] lg:text-[72px] text-black text-nowrap tracking-[-0.8px] lg:tracking-[-2.52px] font-light">
              <p className="leading-[40px] lg:leading-[100px] whitespace-pre">
                Contact Us
              </p>
            </div>
            <div
              className="relative shrink-0 text-[#585858] text-[16px] lg:text-[24px] text-center tracking-[-0.5px] lg:tracking-[-1.12px] w-full max-w-[300px] lg:max-w-[702px] font-light"
              style={{ fontFamily: "Inter Tight" }}
            >
              <p
                className="leading-[15px] lg:leading-[38px]"
                style={{ letterSpacing: "-0.5px" }}
              >
                For inquiries or assistance, our professionals are ready to
                help.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Cards and Image Section */}
      <div className="h-auto lg:h-[646px] relative w-full bg-white">
        {/* Desktop Layout */}
        <div className="hidden lg:flex absolute content-stretch gap-[32px] items-center justify-center left-1/2 top-0 transform -translate-x-1/2 md:scale-100 lg:scale-[0.8] xl:scale-100 lg:origin-top">
          {/* Left Column - Contact Cards */}
          <div className="content-stretch flex flex-col gap-5 h-[602px] items-end justify-start relative shrink-0 w-[379px] md:w-[379px] lg:w-[303px] xl:w-[379px]">
            {/* Phone Card */}
            <ContactCard
              icon={
                <svg
                  className="w-[50px] h-[50px] text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              }
              title="Phone"
              content="+1 (925) 332-0011"
              width="w-[248px]"
            />

            {/* Email Card */}
            <ContactCard
              icon={
                <svg
                  className="w-[70px] h-[70px] text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              }
              title="Email"
              content="contact@bixana.com"
            />
          </div>

          {/* Center Image */}
          <div className="bg-center bg-cover bg-no-repeat h-[602px] rounded-[43px] shrink-0 w-[496px] md:w-[496px] lg:w-[397px] xl:w-[496px] relative overflow-hidden">
            <Image
              src="/contact/Frame 1321323096.png"
              alt="Professional in medical setting"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column - Address Card and Info */}
          <div className="content-stretch flex flex-col gap-[31px] h-[602px] items-start justify-start relative shrink-0 w-[379px] md:w-[379px] lg:w-[303px] xl:w-[379px]">
            {/* Address Card */}
            <ContactCard
              icon={
                <svg
                  className="w-[60px] h-[60px] text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              }
              title="Address"
              content="15068 San Pedro Ave, San Antonio, TX 78232"
            />

            {/* Information Text */}
            <div
              className="font-light leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-1.12px] w-[291px]"
              style={{ fontWeight: 300, fontFamily: "Inter Tight" }}
            >
              <p className="leading-[38px]">
                We shall touch base with you as soon as possible to address your
                query. If you need help with product installation, setup and
                configuration of ToothFairy product
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center justify-center px-4 py-8 space-y-8">
          {/* Image First */}
          <div className="w-full max-w-[400px] h-[300px] rounded-[20px] relative overflow-hidden">
            <Image
              src="/contact/Frame 1321323096.png"
              alt="Professional in medical setting"
              fill
              className="object-cover"
            />
          </div>

          {/* Contact Cards Stacked */}
          <div className="w-full max-w-[400px] space-y-6">
            {/* Phone Card */}
            <ContactCard
              icon={
                <svg
                  className="w-[60px] h-[60px] text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              }
              title="Phone"
              content="+1 (925) 332-0011"
              width="w-full"
            />

            {/* Email Card */}
            <ContactCard
              icon={
                <svg
                  className="w-[60px] h-[60px] text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              }
              title="Email"
              content="contact@bixana.com"
              width="w-full"
            />

            {/* Address Card */}
            <ContactCard
              icon={
                <svg
                  className="w-[60px] h-[60px] text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              }
              title="Address"
              content="15068 San Pedro Ave, San Antonio, TX 78232"
              width="w-full"
            />
          </div>

          {/* Information Text */}
          <div className="w-full max-w-[400px] text-center">
            <div
              className="font-light leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.8px]"
              style={{ fontWeight: 300, fontFamily: "Inter Tight" }}
            >
              <p className="leading-[28px]">
                We shall touch base with you as soon as possible to address your
                query. If you need help with product installation, setup and
                configuration of ToothFairy product
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
