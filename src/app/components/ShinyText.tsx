"use client";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  textColor?: string;
}

const ShinyText = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
  textColor = "#b5b5b5a4",
}: ShinyTextProps) => {
  // Create gradient - use blue shine for white text
  const isWhite =
    textColor === "#FFFFFF" || textColor === "#ffffff" || textColor === "white";
  const isBlue = textColor === "#0052CC" || textColor === "#0052cc";

  let gradientColors;
  if (isWhite) {
    // White text with blue shine effect - gradient goes from white to blue to white
    gradientColors =
      "rgba(255, 255, 255, 1) 40%, rgba(0, 82, 204, 1) 50%, rgba(255, 255, 255, 1) 60%";
  } else if (isBlue) {
    gradientColors =
      "rgba(0, 82, 204, 0) 40%, rgba(0, 82, 204, 0.8) 50%, rgba(0, 82, 204, 0) 60%";
  } else {
    gradientColors =
      "rgba(255, 255, 255, 1) 40%, rgba(0, 82, 204, 1) 50%, rgba(255, 255, 255, 1) 60%";
  }

  return (
    <span
      className={`bg-clip-text inline-block ${disabled ? "" : "animate-shine"} ${className}`}
      style={{
        color: textColor,
        backgroundImage: `linear-gradient(120deg, ${gradientColors})`,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
