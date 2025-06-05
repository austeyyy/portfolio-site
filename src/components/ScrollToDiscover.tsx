"use client";
import { useEffect, useRef } from "react";

export default function ScrollToDiscover() {
  // Create a ref for the pointer element
  const pointerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle scroll event
    const handleScroll = () => {
      const pointer = pointerRef.current;
      if (!pointer) return; // Guard clause if element doesn't exist

      if (window.scrollY > 10) {
        pointer.style.opacity = "0";
        pointer.style.pointerEvents = "none";
      } else if (window.scrollY < 10) {
        pointer.style.opacity = "1";
        pointer.style.pointerEvents = "auto";
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={pointerRef}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-300 cursor-pointer"
    >
      <p className="text-sm mb-1">Scroll to Discover</p>
      <p className="animate-bounce">▾</p>
    </div>
  );
}
