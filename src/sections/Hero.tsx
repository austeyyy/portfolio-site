"use client";

import dynamic from "next/dynamic";
import SetViewportHeight from "@/components/SetViewportHeight";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Spline from "@splinetool/react-spline";

const CircularButton = dynamic(() => import("@/components/CircularButton"), {
  ssr: false,
});

export const HeroSection = () => {
  return (
    <section className="hero-section touch-none select-none relative">
      <SetViewportHeight />

      {/* 3D Spline scene */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/JK-2gyURL1-S7OCF/scene.splinecode" />
      </div>

      {/* Social icons */}
      <div className="absolute left-0 bottom-0 hidden lg:block z-20">
        <div className="flex gap-6 px-7 py-5">
          <a
            href="https://github.com/austeyyy"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <GithubIcon className="opacity-50 hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://www.linkedin.com/in/austenyoung/"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <LinkedinIcon className="opacity-50 hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>

      {/* Explore button */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10">
        <CircularButton
          text="EXPLORE NOW "
          href="/main"
          textColor="#15803d"
          iconColor="#15803d"
          repeatText={2}
          letterSpacing={1.01}
          size={{
            sm: 140,
            md: 140,
            lg: 160,
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
