"use client";

import React, { useState, useRef } from "react";

export default function AILiveDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full bg-[#F8F9FA] py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Tag */}
        <div
          className="flex items-center justify-center mb-6"
          style={{ gap: "8px" }}
        >
          <div
            className="rounded-full"
            style={{
              width: "12px",
              height: "12px",
              background: "linear-gradient(180deg, #0052CC 0%, #61A0FF 100%)",
            }}
          />
          <span
            className="uppercase"
            style={{
              fontFamily: "Inter Tight",
              fontWeight: 300,
              fontSize: "16px",
              lineHeight: "1.5em",
              color: "#0A0F29",
            }}
          >
            Live Demo
          </span>
        </div>

        {/* Main Heading */}
        <h2
          className="text-center text-black mb-10 sm:mb-16"
          style={{
            fontFamily: "Inter Tight",
            fontWeight: 300,
            fontSize: "clamp(32px, 6vw, 64px)",
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
          }}
        >
          See the Difference
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #0052CC 0%, #61A0FF 100%)",
            }}
          >
            with ToothFairy AI
          </span>
        </h2>

        {/* Demo Container */}
        <div className="relative max-w-5xl mx-auto px-0 sm:px-2">
          {/* Blue Background Container */}
          <div
            className="relative rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] p-4 sm:p-8 lg:p-12"
            style={{
              background: "linear-gradient(135deg, #003D99 0%, #0052CC 100%)",
            }}
          >
            {/* Laptop Mockup */}
            <div className="relative mx-auto w-full max-w-4xl">
              {/* Laptop Screen */}
              <div className="relative bg-gray-800 rounded-t-[10px] sm:rounded-t-[12px] p-1 sm:p-2">
                <div className="relative bg-white rounded-[8px] overflow-hidden aspect-video">
                  {/* Video Player Interface */}
                  <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
                    {/* Video Element */}
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      poster="/dental-png.jpg"
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      loop
                      muted
                    >
                      <source src="/dental_background.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Play/Pause Button Overlay */}
                    <div
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={togglePlayPause}
                    >
                      <div
                        className="w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{
                          background: "rgba(255, 255, 255, 0.9)",
                          backdropFilter: "blur(10px)",
                          border: "2px solid rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        {isPlaying ? (
                          // Pause Icon
                          <div className="flex items-center justify-center">
                            <div
                              className="w-1.5 h-5 sm:w-2 sm:h-6 mr-1"
                              style={{ backgroundColor: "#0052CC" }}
                            />
                            <div
                              className="w-1.5 h-5 sm:w-2 sm:h-6"
                              style={{ backgroundColor: "#0052CC" }}
                            />
                          </div>
                        ) : (
                          // Play Icon
                          <div className="w-0 h-0 border-l-[12px] sm:border-l-[16px] border-l-[#0052CC] border-t-[10px] sm:border-t-[12px] border-t-transparent border-b-[10px] sm:border-b-[12px] border-b-transparent ml-1" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Base */}
              <div className="bg-gray-800 rounded-b-[10px] sm:rounded-b-[12px] h-3 sm:h-4 relative">
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                  <span
                    className="text-gray-400 text-xs"
                    style={{
                      fontFamily: "Inter Tight",
                      fontWeight: 300,
                    }}
                  >
                    MacBook
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            className="bg-[#0052CC] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#003D99] transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{
              fontFamily: "Inter Tight",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "1.3em",
              letterSpacing: "-0.02em",
            }}
          >
            Try Live Demo
          </button>
        </div>
      </div>
    </section>
  );
}
