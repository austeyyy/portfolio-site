"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import DownArrow from "@/assets/icons/arrow-down.svg";
import { animatePageOut } from "@/lib/animations";

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
  letterSpacing?: number;
}

export const CircularButton = ({
  text = "EXPLORE NOW",
  href = "#",
  className = "",
  size = { sm: 80, md: 120, lg: 140, default: 120 },
  textColor = "#15803d",
  iconColor = "#15803d",
  repeatText = 2,
  letterSpacing = 1.0,
}: CircularButtonProps) => {
  const [mounted, setMounted] = useState(false);
  const [currentSize, setCurrentSize] = useState<number>(
    typeof size === "number" ? size : size.default || 120
  );

  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    setMounted(true);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

    function handleResize() {
      const width = window.innerWidth;
      if (typeof size === "number") {
        setCurrentSize(size);
      } else if (width < 640 && size.sm !== undefined) {
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

  if (!mounted) return null;

  const radius = currentSize / 2 - 15;
  const center = currentSize / 2;
  const fontSize = currentSize <= 80 ? "10" : currentSize <= 120 ? "12" : "14";
  const iconSize = currentSize <= 80 ? "w-5 h-5" : "w-8 h-8";

  const letters = text.repeat(repeatText).split("");
  const totalAngle = 2 * Math.PI;
  const angleStep = (totalAngle / letters.length) * letterSpacing;
  const startAngle = -Math.PI / 2;

  const createTextPathData = () =>
    letters.map((letter, i) => {
      const angle = startAngle + i * angleStep;
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);
      const rotation = angle * (180 / Math.PI) + 90;

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

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathName !== href && href) {
      await animatePageOut(href, router);
    }
  };

  return (
    <button onClick={handleClick} className={className}>
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
          <DownArrow
            className={iconSize}
            style={{ color: iconColor }}
            fill="currentColor"
          />
        </div>
      </div>
    </button>
  );
};

export default CircularButton;
