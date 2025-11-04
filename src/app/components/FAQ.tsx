"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="content-stretch flex flex-col gap-6 items-end justify-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full max-w-[1164px]">
        <div className="content-stretch flex items-start sm:items-center justify-between gap-4 relative shrink-0 w-full">
          <div className="font-['Inter_Tight'] font-light leading-[0] not-italic relative shrink-0 text-2xl sm:text-3xl md:text-[28px] lg:text-[28px] xl:text-[40px] text-black tracking-[-0.8px]">
            <p className="leading-tight sm:leading-[1.2] md:leading-[1.25] lg:leading-[1.25] xl:leading-[48px]">
              {question}
            </p>
          </div>
          <button
            onClick={onToggle}
            className="relative shrink-0 size-10 sm:size-12 md:size-[44px] lg:size-[48px] xl:size-[72px] flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            )}
          </button>
        </div>
        {isOpen && (
          <div className="font-['Inter_Tight'] font-light leading-[0] not-italic relative shrink-0 text-[#777777] text-base sm:text-lg md:text-xl lg:text-xl xl:text-[28px] tracking-[-0.6px] w-full max-w-[900px] xl:max-w-[1133px]">
            <p className="leading-relaxed sm:leading-[1.5] md:leading-[1.6] lg:leading-[1.5] xl:leading-[38px]">
              {answer}
            </p>
          </div>
        )}
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px] border-t border-gray-200"></div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const faqData = [
    {
      question: "Can I change plans anytime?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, we offer a 14-day free trial for all new users. No credit card required to get started.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use enterprise-grade encryption and follow strict security protocols to protect your data. All data is stored securely and backed up regularly.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[97px] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[163px] relative w-full">
      <div className="content-stretch flex flex-col gap-10 sm:gap-12 md:gap-14 items-center lg:items-end justify-center relative shrink-0 w-full">
        {/* Header Section */}
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-4 sm:gap-5 md:gap-6 items-start justify-start w-full max-w-[627px]">
            <div className="flex items-center justify-center gap-2 mb-10">
              <div className="w-3 h-3 bg-gradient-to-b from-blue-600 to-white rounded-full"></div>
              <span className="text-black text-base font-light uppercase tracking-wide">
                FAQ
              </span>
            </div>
            <div className="font-['Inter_Tight'] font-light leading-[0] not-italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] text-black tracking-[-2.04px] w-full">
              <p className="leading-tight sm:leading-[1.1] md:leading-[1.2] lg:leading-[1.25] xl:leading-[78px]">
                Frequently Asked Questions
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="content-stretch flex flex-col gap-5 items-center justify-start relative shrink-0 w-full max-w-[1164px]">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
