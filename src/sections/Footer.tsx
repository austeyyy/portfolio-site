import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white/20 backdrop-blur border border-green-900/15 relative z-50">
      <div className="py-14">
        <div className="container mx-auto ">
          {/*Icons*/}
          <div className="flex flex-row justify-center gap-8 pb-4">
            <Link
              href="https://github.com/austeyyy"
              className="hover:scale-110 transition"
            >
              <GithubIcon />
            </Link>

            <Link
              href="https://www.linkedin.com/in/austenyoung/"
              className="hover:scale-110 transition"
            >
              <LinkedinIcon />
            </Link>

            <Link
              href="mailto:austeytech@gmail.com"
              className="hover:scale-110 transition"
            >
              <MailIcon />
            </Link>
          </div>

          {/*Copyright*/}
          <div className="text-gray-600 text-center">
            Copyright &copy; Austen Young. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
