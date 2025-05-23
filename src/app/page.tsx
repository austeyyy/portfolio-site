"use client";
import { AboutSection } from "@/sections/About";
import { Header } from "@/components/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
}
