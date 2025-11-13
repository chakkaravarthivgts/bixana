import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc?: string;
}

const ServiceCard = ({
  title,
  description,
  imageSrc = "/about/whatwedo.jpg",
}: ServiceCardProps) => {
  return (
    <div className="bg-white relative rounded-bl-[50px] rounded-br-[30px] rounded-tl-[50px] rounded-tr-[50px] w-full border border-[#c3c3c3] overflow-hidden">
      <div className="relative w-full p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6">
          <div className="bg-center bg-cover bg-no-repeat h-56 sm:h-64 lg:h-[348px] rounded-[30px] w-full relative overflow-hidden group">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
          <div
            className="content-stretch flex flex-col font-light gap-4 items-center justify-start leading-[0] not-italic w-full"
            style={{ fontFamily: "Inter Tight" }}
          >
            <div className="text-2xl sm:text-3xl lg:text-[42px] text-black tracking-[-1.2px] text-center">
              <p className="leading-tight">{title}</p>
            </div>
            <div className="text-[#585858] text-base sm:text-lg lg:text-[20px] text-center tracking-[-0.5px] w-full">
              <p className="leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CARD_IMG_1 = "/services/cards/Frame 1321322666.png";
const CARD_IMG_2 = "/services/cards/Frame 1321322666-1.png";
const CARD_IMG_3 = "/services/cards/Frame 1321322666-2.png";
const CARD_IMG_4 = "/services/cards/Frame 1321322666-1 1.png";
const CARD_IMG_5 = "/services/cards/Frame 1321322666 1.png";

const services = [
  {
    title: "Customer Assistance",
    description:
      "We will work with you to build custom solutions for dental office needs in terms of automation, paperless and communication.",
    imageSrc: CARD_IMG_1,
  },
  {
    title: "Affordable Prices",
    description:
      "We offer comparative price range and free service to make you comfortable working with this bixana application.",
    imageSrc: CARD_IMG_2,
  },
  {
    title: "Demo & Training",
    description:
      "We help your associate to understand the process to use this application better to reduce manual intervention",
    imageSrc: CARD_IMG_3,
  },
  {
    title: "Innovative Ideas",
    description:
      "Introducing or using new ideas or methods an innovative approach/solution to the problem.",
    imageSrc: CARD_IMG_4,
  },
  {
    title: "Feature Update",
    description:
      "We will be adding enhanced solution often and the same will automatically be available for users.",
    imageSrc: CARD_IMG_5,
  },
  {
    title: "Synchronize Data",
    description:
      "Toothfairy offers a service which push and pull data between cloud and on-premises periodically",
    imageSrc: CARD_IMG_1,
  },
];

export default function WhatWeDo() {
  return (
    <div className="bg-neutral-100 box-border content-stretch flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[100px] py-16 sm:py-20 md:py-24 lg:py-28 xl:py-[229px] relative w-full">
      <div className="content-stretch flex flex-col gap-12 sm:gap-16 lg:gap-24 items-center justify-start w-full max-w-7xl">
        {/* Header Section */}
        <div className="content-stretch flex flex-col items-center justify-between w-full">
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="w-3 h-3 bg-gradient-to-b from-blue-600 to-white rounded-full"></div>
            <span className="text-black text-base font-light uppercase tracking-wide">
              WHAT WE DO
            </span>
          </div>
          <div
            className="font-light leading-[0] not-italic text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-black text-center tracking-[-2.04px] w-full max-w-[815px] px-4"
            style={{ fontFamily: "Inter Tight" }}
          >
            <p className="leading-tight sm:leading-[1.1] md:leading-[1.2] lg:leading-[78px]">
              Our Productive Services are Ready
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full">
          {services.map((s) => (
            <ServiceCard
              key={s.title}
              title={s.title}
              description={s.description}
              imageSrc={s.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
