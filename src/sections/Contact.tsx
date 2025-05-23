import { SectionHeader } from "@/components/SectionHeader";
import { SendIcon } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export const ContactSection = () => {
  return (
    <section
      className="pb-12 sm:pb-16 sm:pt-7 md:pb-20 md:pt-8 lg:pb-24 lg:pt-8"
      id="contact"
    >
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <SectionHeader eyebrow="" title="Let's Work." description="" />
        </motion.div>
        <motion.p
          className="text-center md:text-lg lg:text-xl text-gray-600 mt-4 mx-auto"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          Interested in internships for{" "}
          <span className="italic font-semibold">
            Frontend Software Engineering & Software Development
          </span>
          . Let's get in touch!{" "}
          <span className="font-bold">austeytech@gmail.com</span>
        </motion.p>
        <motion.a
          href="#"
          className="block text-center"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <button className="bg-green-700 text-white h-12 px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-green-800 transition-colors ">
            Contact Me <SendIcon className="h-4 w-4" />
          </button>
        </motion.a>
      </div>
    </section>
  );
};
