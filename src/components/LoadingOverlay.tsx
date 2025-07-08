"use client";

import { useEffect, useState } from "react";
import { AppleHelloEnglishEffect } from "@/components/ui/apple-hello-effect";

interface LoadingOverlayProps {
  onFinish: () => void;
}

export default function LoadingOverlay({ onFinish }: LoadingOverlayProps) {
  const [showAnimation, setShowAnimation] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);

  useEffect(() => {
    // start after hydration + idle to reduce stutter
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setShowAnimation(true));
    } else {
      setTimeout(() => setShowAnimation(true), 300);
    }
  }, []);

  const handleAnimationComplete = () => {
    setHideOverlay(true);
    setTimeout(onFinish, 500);
  };

  if (!showAnimation) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-neutral-100 text-green-900 z-50 select-none transition-opacity duration-500 ${
        hideOverlay ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <AppleHelloEnglishEffect
        speed={1}
        onAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
}
