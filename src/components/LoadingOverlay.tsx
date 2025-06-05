"use client";

import { useEffect, useState } from "react";

interface LoadingOverlayProps {
  onFinish: () => void;
}

export default function LoadingOverlay({ onFinish }: LoadingOverlayProps) {
  const [count, setCount] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (count < 100) {
      const id = setTimeout(() => setCount(count + 2), 20);
      return () => clearTimeout(id);
    }
    // When count reaches 100, show welcome for 1s then finish
    if (count === 100) {
      setShowWelcome(true);
      const id = setTimeout(() => onFinish(), 1000);
      return () => clearTimeout(id);
    }
  }, [count, onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-neutral-100 text-green-900 z-50 select-none transition-all">
      {!showWelcome && <span className="text-5xl">{count}</span>}
      {showWelcome && <span className="text-5xl font-semibold">Welcome!</span>}
    </div>
  );
}
