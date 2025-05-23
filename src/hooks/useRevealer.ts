"use client";

import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

export const useRevealer = () => {
  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("hop", "0.9, 0, 0.1, 1");
  }, []);

  // Create the animation
  useGSAP(() => {
    gsap.to(".revealer", {
      scaleY: 0,
      duration: 1.25,
      delay: 1,
      ease: "hop",
    });
  }, []);

  return null;
};

export default useRevealer;
