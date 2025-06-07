import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white/20 backdrop-blur border border-green-900/15 relative z-20">
      <div className="py-14">
        <div className="container mx-auto ">
          {/*Icons*/}
          <div className="flex flex-row justify-center gap-8 pb-4">
            <a
              href="https://github.com/austeyyy"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <GithubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/austenyoung/"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <LinkedinIcon />
            </a>

            <a
              href="mailto:austeytech@gmail.com"
              className="hover:scale-110 transition"
            >
              <MailIcon />
            </a>
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
