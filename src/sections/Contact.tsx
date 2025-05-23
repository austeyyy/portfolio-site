import { SectionHeader } from "@/components/SectionHeader";
import { SendIcon } from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      className="pb-12 sm:pb-16 sm:pt-7 md:pb-20 md:pt-8 lg:pb-24 lg:pt-8"
      id="contact"
    >
      <div className="container mx-auto">
        <div>
          <SectionHeader eyebrow="" title="Let's Work." description="" />
        </div>
        <p className="text-center md:text-lg lg:text-xl text-gray-600 mt-4 mx-auto">
          Interested in internships for{" "}
          <span className="italic font-semibold">
            Frontend Software Engineering & Software Development
          </span>
          . Let's get in touch!{" "}
          <span className="font-bold">austeytech@gmail.com</span>
        </p>
        <a href="mailto:austeytech@gmail.com" className="block text-center">
          <button className="bg-green-700 text-white h-12 px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-green-800 transition-colors ">
            Contact Me <SendIcon className="h-4 w-4" />
          </button>
        </a>
      </div>
    </section>
  );
};
