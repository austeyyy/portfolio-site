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
      <div className="absolute inset-0 sm:shadow-[inset_0_0_150px_rgba(0,0,0,0.1)] md:shadow-[inset_0_0_150px_rgba(0,0,0,0.5)] pointer-events-none z-10"></div>

      {/* Blur effects container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="relative h-full">
          {/* Existing blurs */}

          <div className="before:content-[''] before:bg-orange-400/20 before:absolute before:top-[15rem] before:md:top-[-6rem] before:right-[11rem] before:h-[20rem] before:w-[20rem] before:rounded-full before:blur-[5rem] before:sm:h-[31.25rem] before:sm:w-[31.25rem]"></div>

          <div className="before:content-[''] before:bg-[#98f5cef8]/25 before:md:bg-[#98f5cef8]/45 before:absolute before:top-[-1rem] before:-left-[-10rem] before:h-[20rem] before:w-[20rem] before:rounded-full before:blur-[5rem] before:sm:h-[31.25rem] before:sm:w-[31.25rem] before:md:left-[-15rem] before:lg:left-[-10rem]"></div>

          {/* Tropical/Earthy Colored Blurs */}

          {/* Coral/Terracotta blur */}

          <div className="before:content-[''] before:bg-[#e07a5f]/20 before:absolute before:top-[40rem] before:right-[-5rem] before:h-[18rem] before:w-[18rem] before:rounded-full before:blur-[6rem] before:sm:h-[25rem] before:sm:w-[25rem]"></div>

          {/* Jungle Green blur */}

          <div className="before:content-[''] before:bg-[#3a9278]/20 before:absolute before:top-[70rem] before:left-[5rem] before:h-[15rem] before:w-[15rem] before:rounded-full before:blur-[4rem] before:sm:h-[22rem] before:sm:w-[22rem]"></div>

          {/* Sunset Pink/Peach blur */}

          <div className="before:content-[''] before:bg-[#ffb4a2]/25 before:absolute before:top-[100rem] before:right-[8rem] before:h-[17rem] before:w-[17rem] before:rounded-full before:blur-[5rem] before:sm:h-[24rem] before:sm:w-[24rem]"></div>

          {/* Warm Sand/Golden blur */}

          <div className="before:content-[''] before:bg-[#e9c46a]/20 before:absolute before:top-[130rem] before:left-[-8rem] before:h-[20rem] before:w-[20rem] before:rounded-full before:blur-[7rem] before:sm:h-[28rem] before:sm:w-[28rem]"></div>

          {/* Turquoise Ocean blur */}

          <div className="before:content-[''] before:bg-[#81b29a]/15 before:absolute before:top-[20rem] before:left-[15rem] before:h-[12rem] before:w-[12rem] before:rounded-full before:blur-[6rem] before:sm:h-[18rem] before:sm:w-[18rem]"></div>

          {/* Palm Leaf Green blur */}

          <div className="before:content-[''] before:bg-[#588157]/15 before:absolute before:top-[85rem] before:right-[-10rem] before:h-[22rem] before:w-[22rem] before:rounded-full before:blur-[8rem] before:sm:h-[30rem] before:sm:w-[30rem]"></div>

          {/* Earthy Clay blur */}

          <div className="before:content-[''] before:bg-[#cb997e]/20 before:absolute before:top-[50rem] before:left-[-12rem] before:h-[16rem] before:w-[16rem] before:rounded-full before:blur-[7rem] before:sm:h-[23rem] before:sm:w-[23rem]"></div>

          {/* Tropical Deep blue blur */}

          <div className="before:content-[''] before:bg-[#219ebc]/10 before:absolute before:top-[110rem] before:left-[20rem] before:h-[14rem] before:w-[14rem] before:rounded-full before:blur-[5rem] before:sm:h-[20rem] before:sm:w-[20rem]"></div>
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
