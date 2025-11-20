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
      className={`bg-white lg:h-[293px] relative rounded-[20px] lg:rounded-[43px] shrink-0 ${width}`}
    >
      <div className="box-border flex flex-col gap-2 lg:gap-2.5 h-full lg:content-stretch items-center justify-center overflow-clip px-4 lg:px-[76px] py-4 lg:py-[37px] relative w-full">
        <div className="flex flex-col gap-4 lg:gap-[30px] items-center justify-center lg:justify-end lg:content-stretch relative shrink-0">
          <div className="flex flex-col items-center justify-start lg:justify-between lg:content-stretch lg:h-[144px] relative shrink-0 w-auto lg:w-[143px]">
            <div className="relative shrink-0 flex items-center justify-center">
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
            <p
              className={`leading-[20px] lg:leading-[38px] ${title === "Phone" ? "whitespace-nowrap" : ""}`}
            >
              {title === "Address"
                ? (() => {
                    const firstCommaIndex = content.indexOf(",");
                    if (firstCommaIndex === -1) return content;
                    return (
                      <>
                        {content.substring(0, firstCommaIndex + 1)}
                        <br />
                        {content.substring(firstCommaIndex + 1).trim()}
                      </>
                    );
                  })()
                : content}
            </p>
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
              className="relative text-[#585858] text-[15px] lg:text-[24px] text-center tracking-[-0.5px] lg:tracking-[-1.12px] w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[702px] font-light"
              style={{ fontFamily: "Inter Tight" }}
            >
              <p
                className="leading-[22px] lg:leading-[34px] whitespace-normal"
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
        <div className="hidden py-4 lg:flex absolute content-stretch gap-[32px] items-center justify-center left-1/2 top-0 transform -translate-x-1/2 md:scale-100 lg:scale-[0.8] xl:scale-100 lg:origin-top">
          {/* Left Column - Contact Cards */}
          <div className="content-stretch flex flex-col gap-5 h-[602px] items-end justify-start relative shrink-0 w-[379px] md:w-[379px] lg:w-[303px] xl:w-[379px]">
            {/* Phone Card */}
            <ContactCard
              icon={
                <div className="w-[72px] h-[72px] rounded-full bg-[#F5F5F5] flex items-center justify-center">
                  <Image
                    src="/contact/phone.svg"
                    alt="Phone icon"
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px]"
                  />
                </div>
              }
              title="Phone"
              content="+1 (925) 332-0011"
              width="w-[248px]"
            />

            {/* Email Card */}
            <ContactCard
              icon={
                <div className="w-[72px] h-[72px] rounded-full bg-[#F5F5F5] flex items-center justify-center">
                  <Image
                    src="/contact/email.svg"
                    alt="Email icon"
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px]"
                  />
                </div>
              }
              title="Email"
              content="contact@bixana.com"
            />
          </div>

          {/* Center Image */}
          <div className="bg-center bg-cover bg-no-repeat h-[602px] rounded-[43px] shrink-0 w-[496px] md:w-[496px] lg:w-[397px] xl:w-[496px] relative overflow-hidden">
            <Image
              src="/contact/contact.png"
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
                <div className="w-[72px] h-[72px] rounded-full bg-[#F5F5F5] flex items-center justify-center">
                  <Image
                    src="/contact/location.svg"
                    alt="Location icon"
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px]"
                  />
                </div>
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
                configuration of Toothfairy product
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center justify-center px-4 py-8 space-y-8">
          {/* Image First */}
          <div className="w-full max-w-[400px] h-[300px] rounded-[20px] relative overflow-hidden">
            <Image
              src="/contact/contact.png"
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
                <div className="w-[72px] h-[72px] rounded-full bg-[#F5F5F5] flex items-center justify-center">
                  <Image
                    src="/contact/phone.svg"
                    alt="Phone icon"
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px]"
                  />
                </div>
              }
              title="Phone"
              content="+1 (925) 332-0011"
              width="w-full"
            />

            {/* Email Card */}
            <ContactCard
              icon={
                <div className="w-[72px] h-[72px] rounded-full bg-[#F5F5F5] flex items-center justify-center">
                  <Image
                    src="/contact/email.svg"
                    alt="Email icon"
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px]"
                  />
                </div>
              }
              title="Email"
              content="contact@bixana.com"
              width="w-full"
            />

            {/* Address Card */}
            <ContactCard
              icon={
                <div className="w-[72px] h-[72px] rounded-full bg-[#F5F5F5] flex items-center justify-center">
                  <Image
                    src="/contact/location.svg"
                    alt="Location icon"
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px]"
                  />
                </div>
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
                configuration of Toothfairy product
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
