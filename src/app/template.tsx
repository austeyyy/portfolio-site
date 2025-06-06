"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import LoadingOverlay from "@/components/LoadingOverlay";
import { animatePageIn } from "@/lib/animations";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loadingDone, setLoadingDone] = useState(false);
  const [checkedStorage, setCheckedStorage] = useState(false);
  const isInitialLoad = useRef(true); // ⬅️ Track initial site load

  // Check if loading was done this session
  useEffect(() => {
    if (sessionStorage.getItem("loadingDone") === "true") {
      setLoadingDone(true);
    }
    setCheckedStorage(true);
  }, []);

  // Animate after loading
  useEffect(() => {
    if (loadingDone) {
      const delayNeeded = pathname === "/" && !isInitialLoad.current;

      if (delayNeeded) {
        const timeout = setTimeout(() => {
          animatePageIn();
        }, 1200);

        return () => clearTimeout(timeout);
      } else {
        animatePageIn();
      }

      isInitialLoad.current = false; // Mark first load as done
    }
  }, [loadingDone, pathname]);

  const handleLoadingFinish = () => {
    sessionStorage.setItem("loadingDone", "true");
    setLoadingDone(true);
  };

  if (!checkedStorage) return null;

  return (
    <>
      {!loadingDone && <LoadingOverlay onFinish={handleLoadingFinish} />}

      <div
        style={{
          filter: !loadingDone ? "blur(4px)" : "none",
          pointerEvents: !loadingDone ? "none" : "auto",
        }}
      >
        {/* Stair banners */}
        <div
          id="banner-1"
          className="min-h-screen bg-neutral-100 z-50 fixed top-0 left-0 w-1/4"
        />
        <div
          id="banner-2"
          className="min-h-screen bg-neutral-100 z-50 fixed top-0 left-1/4 w-1/4"
        />
        <div
          id="banner-3"
          className="min-h-screen bg-neutral-100 z-50 fixed top-0 left-2/4 w-1/4"
        />
        <div
          id="banner-4"
          className="min-h-screen bg-neutral-100 z-50 fixed top-0 left-3/4 w-1/4"
        />
        {children}
      </div>
    </>
  );
}
