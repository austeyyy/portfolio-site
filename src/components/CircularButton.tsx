"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import DownArrow from "@/assets/icons/arrow-down.svg";

// Define a type for the size prop
type SizeConfig = {
  sm?: number;
  md?: number;
  lg?: number;
  default?: number;
};

interface CircularButtonProps {
  text?: string;
  href?: string;
  className?: string;
  size?: number | SizeConfig;
  textColor?: string;
  iconColor?: string;
  repeatText?: number;
  letterSpacing?: number; // Control letter spacing directly
}

export const CircularButton = ({
  text = "EXPLORE NOW",
  href = "#",
  className = "",
  size = { sm: 80, md: 120, lg: 140, default: 120 },
  textColor = "#15803d",
  iconColor = "#15803d",
  repeatText = 2,
  letterSpacing = 1.0, // Multiplier for letter spacing (1.0 = default, higher = more space)
}: CircularButtonProps) => {
  const [mounted, setMounted] = useState(false);
  const [currentSize, setCurrentSize] = useState<number>(
    typeof size === "number" ? size : size.default || 120
  );

  useEffect(() => {
    setMounted(true);

    // Handle initial size
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // Size calculation function
    function handleResize() {
      const width = window.innerWidth;

      // Check if size is a number or an object
      if (typeof size === "number") {
        setCurrentSize(size);
        return;
      }

      // Now TypeScript knows size is an object
      if (width < 640 && size.sm !== undefined) {
        setCurrentSize(size.sm);
      } else if (width < 1024 && size.md !== undefined) {
        setCurrentSize(size.md);
      } else if (size.lg !== undefined) {
        setCurrentSize(size.lg);
      } else {
        setCurrentSize(size.default || 120);
      }
    }
  }, [size]);

  if (!mounted) {
    return null;
  }

  const radius = currentSize / 2 - 15; // Slightly smaller than button radius for text placement
  const center = currentSize / 2;
  const fontSize = currentSize <= 80 ? "10" : currentSize <= 120 ? "12" : "14";
  const iconSize = currentSize <= 80 ? "w-5 h-5" : "w-8 h-8";

  // Create repeated text without spaces (fixed TypeScript error)
  const createTextArray = (): string[] => {
    return text.repeat(repeatText).split("");
  };

  // Get the repeated letters array
  const letters = createTextArray();

  // Calculate exact spacing to fill the entire circle
  const totalAngle = 2 * Math.PI; // Full circle in radians
  const angleStep = (totalAngle / letters.length) * letterSpacing; // Apply letter spacing multiplier
  const startAngle = -Math.PI / 2; // Start at top of circle

  // Create text path for circular text
  const createTextPathData = () => {
    return letters.map((letter, i) => {
      // Calculate the angle for this letter with proper spacing
      const angle = startAngle + i * angleStep;

      // Calculate position on the circle
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);

      // Calculate rotation angle in degrees
      const rotation = angle * (180 / Math.PI) + 90; // +90 to make text face outward

      return (
        <text
          key={i}
          x={x}
          y={y}
          fontSize={fontSize}
          fontWeight="bold"
          fill={textColor}
          textAnchor="middle"
          dominantBaseline="middle"
          transform={`rotate(${rotation}, ${x}, ${y})`}
        >
          {letter}
        </text>
      );
    });
  };

  return (
    <Link href={href} className={className}>
      <div className="relative group">
        <svg
          width={currentSize}
          height={currentSize}
          viewBox={`0 0 ${currentSize} ${currentSize}`}
          className="animate-spin-slow"
        >
          {createTextPathData()}
        </svg>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 group-hover:scale-110 transition-transform duration-300">
          {/* Downward pointing arrow */}
          <DownArrow
            className={iconSize}
            style={{ color: iconColor }}
            fill="currentColor"
          />
        </div>
      </div>
    </Link>
  );
};

export default CircularButton;
