// components/LenisProvider.tsx
"use client";
import React, { PropsWithChildren, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisProvider: React.FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisProvider;
