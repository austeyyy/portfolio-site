"use client";
import { AboutSection } from "@/sections/About";
import { Header } from "@/components/Header";
import { ProjectsSection } from "@/sections/Projects";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import Image from "next/image";
import palmLeaves from "@/assets/images/palm-leaves.png";
import monsteraLeaves from "@/assets/images/monstera-leaves.png";

export default function Main() {
  {
    /*f1efea*/
  }
  return (
    <div className="bg-[#f5f4f1] relative">
      {/* Vignette effect */}
      <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] md:shadow-[inset_0_0_150px_rgba(0,0,0,0.5)] pointer-events-none z-10"></div>

      {/* Blur effects container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="relative h-full">
          {/* Top mint/green blur */}

          <div className="before:content-[''] before:bg-[#98f5cef8]/25 before:md:bg-[#98f5cef8]/45 before:max-md:h-[10rem] before:max-md:w-[10rem] before:max-md:blur-[3rem] before:max-md:opacity-30 before:absolute before:top-[-1rem] before:-left-[-10rem] before:h-[20rem] before:w-[20rem] before:rounded-full before:blur-[5rem] before:sm:h-[31.25rem] before:sm:w-[31.25rem] before:md:left-[-15rem] before:lg:left-[-10rem]"></div>

          {/* Orange blur */}

          <div className="before:content-[''] before:bg-orange-400/40 before:md:bg-orange-400/20 before:max-md:h-[10rem] before:max-md:w-[10rem] before:max-md:blur-[3rem] before:max-md:opacity-30 before:absolute before:top-[15rem] before:md:top-[-6rem] before:right-[11rem] before:h-[20rem] before:w-[20rem] before:rounded-full before:blur-[5rem] before:sm:h-[31.25rem] before:sm:w-[31.25rem]"></div>

          {/* Coral/Terracotta blur for middle section */}

          <div className="before:content-[''] before:bg-[#e07a5f]/30 before:md:bg-[#e07a5f]/20 before:max-md:h-[9rem] before:max-md:w-[9rem] before:max-md:blur-[3rem] before:max-md:opacity-25 before:absolute before:top-[40rem] before:right-[-5rem] before:h-[18rem] before:w-[18rem] before:rounded-full before:blur-[6rem] before:sm:h-[25rem] before:sm:w-[25rem]"></div>

          {/* Sunset Pink/Peach blur for projects */}

          <div className="before:content-[''] before:bg-[#ffb4a2]/40 before:md:bg-[#ffb4a2]/25before:max-md:h-[8rem] before:max-md:w-[8rem] before:max-md:blur-[2.5rem] before:max-md:opacity-30 before:absolute before:top-[100rem] before:right-[8rem] before:h-[17rem] before:w-[17rem] before:rounded-full before:blur-[5rem] before:sm:h-[24rem] before:sm:w-[24rem]"></div>

          {/* Deep Green blur for contact section */}

          <div className="before:content-[''] before:bg-[#3a9278]/80 before:md:bg-[#3a9278]/20 before:max-md:h-[8rem] before:max-md:w-[8rem] before:max-md:blur-[2.5rem] before:max-md:opacity-25 before:absolute before:top-[140rem] before:left-[5rem] before:h-[15rem] before:w-[15rem] before:rounded-full before:blur-[4rem] before:sm:h-[22rem] before:sm:w-[22rem]"></div>
        </div>
      </div>
      <Header />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />

      {/*
      <div className="fixed bottom-0 left-0 ">
        <Image
          src={palmLeaves}
          alt="Palm leaves"
          width={500}
          height={400}
          className="object-contain blur-sm filter brightness-95 contrast-200"
        />
      </div>
  */}
      {/*
      <div className="fixed top-0 -right-56 ">
        <Image
          src={monsteraLeaves}
          alt="Palm leaves"
          width={1000}
          height={900}
          className="object-contain blur-sm filter brightness-95 contrast-150"
        />
      </div>
  */}
    </div>
  );
}
