"use client";

import { useRef, useEffect } from "react";
export const ScrollToDiscover = () => {
  const pointerRef = useRef(null);
  useEffect(() => {
    const pointer = pointerRef.current;

    const handleScroll = () => {
      if (!pointer) return;

      if (window.scrollY > 10) {
        pointer.style.opacity = "0";
        pointer.style.pointerEvents = "none";
      } else if (window.scrollY < 10) {
        pointer.style.opacity = "1";

        pointer.style.pointerEvents = "auto";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      ref={pointerRef}
      className="fixed hidden lg:block bottom-8 left-1/2 transform -translate-x-1/2 text-center z-50 transition-opacity duration-300 opacity-100"
    >
      <p>Scroll to Explore </p>
      <p className="animate-bounce">▾</p>
    </div>
  );
};

export default ScrollToDiscover;
