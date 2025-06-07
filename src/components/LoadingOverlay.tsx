"use client";

import { useEffect, useState } from "react";

interface LoadingOverlayProps {
  onFinish: () => void;
}

export default function LoadingOverlay({ onFinish }: LoadingOverlayProps) {
  const [count, setCount] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);

  useEffect(() => {
    if (count < 100) {
      const id = setTimeout(() => setCount((c) => c + 2), 20);
      return () => clearTimeout(id);
    }
    if (count === 100) {
      setShowWelcome(true);
      setTimeout(() => {
        setHideOverlay(true);
        setTimeout(onFinish, 500);
      }, 1000);
    }
  }, [count]);

  return (
    <div
      className={`fixed inset-0 flex flex-col justify-center items-center bg-neutral-100 text-green-900 z-50 select-none transition-opacity duration-500 ${
        hideOverlay ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {!showWelcome && <span className="text-5xl">{count}</span>}
      {showWelcome && <span className="text-5xl font-semibold">Welcome!</span>}
    </div>
  );
}
