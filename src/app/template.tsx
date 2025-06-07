"use client";

import { useEffect, useState } from "react";
import LoadingOverlay from "@/components/LoadingOverlay";
import { animatePageIn } from "@/lib/animations";

export default function Template({ children }: { children: React.ReactNode }) {
  const [loadingDone, setLoadingDone] = useState(false);
  const [checkedStorage, setCheckedStorage] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("loadingDone") === "true") {
      setLoadingDone(true);
    }
    setCheckedStorage(true);
  }, []);

  useEffect(() => {
    if (loadingDone) {
      animatePageIn();
    }
  }, [loadingDone]);

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
          opacity: loadingDone ? 1 : 0.75,
          transition: "opacity 0.3s ease",
          pointerEvents: loadingDone ? "auto" : "none",
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
