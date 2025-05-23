import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import ColorStackLandingPage from "@/assets/images/colorstack-screen.png";
import BeautifulDreamersLandingPage from "@/assets/images/beautifuldreamers-screen.png";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";

import VSCode from "public/about/vscode.svg";
import HTML from "@/assets/icons/html5.svg";
import CSS from "@/assets/icons/css3.svg";
import JavaScript from "@/assets/icons/square-js.svg";

const portfolioProjects = [
  {
    company: "ColorStack",
    year: "2025",
    title: "ColorStack at Ohio State Website",
    techStack: [{ icon: HTML }, { icon: CSS }, { icon: JavaScript }],
    description:
      "A community platform for Black and Latinx students interested in tech careers. Features event calendars, resources, and membership management.",
    sitetype: "View Project",
    link: "https://colorstackosu.org/",
    image: ColorStackLandingPage,
  },
  {
    company: "AGNT",
    year: "2024",
    title: "Beautiful Dreamers Landing Page",
    techStack: [{ icon: HTML }, { icon: CSS }, { icon: JavaScript }],
    description:
      "An artistic e-commerce landing page for Beautiful Dreamers, featuring responsive design, custom animations, and seamless shopping integration.",
    sitetype: "View Project",
    link: "https://austeyyy.github.io/beautiful-dreamers-demo/",
    image: BeautifulDreamersLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section
      className="pb-12 sm:py-16 md:pb-20 md:pt-8 lg:pb-24 lg:pt-10"
      id="projects"
    >
      <div className="container">
        <div>
          <SectionHeader
            eyebrow="Real World Results"
            title="Featured Projects."
            description="See how I transformed concepts into engaging digital experiences"
          />
        </div>

        {/*Projects Wrapper*/}
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {/* For Each Project, Create a Card*/}
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="pt-8 px-8 pb-0 md:pt-12 md:px-10 lg:px-20 lg:pt-16 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/*lg-col-1*/}
                <div className="lg:pb-16">
                  <div className="text-green-700 inline-flex gap-2 font-bold uppercase tracking-widest text-sm">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-semibold text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title + "."}
                  </h3>

                  {/* Tech Stack Row */}
                  <div className="flex flex-row flex-wrap gap-4 items-center mt-6">
                    {project.techStack.map((tech, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 py-0 px-1 rounded-lg"
                      >
                        <tech.icon className="h-7 w-7 p-0 text-green-700" />
                      </div>
                    ))}
                  </div>

                  <hr className="border-t-2 border-gray-200 mt-4" />

                  {/* Description */}
                  <div className="mt-6">
                    <p className="text-gray-600">{project.description}</p>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-20"
                  >
                    <button className="bg-green-700 text-white h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-green-800 transition-colors z-20">
                      <span>{project.sitetype}</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>

                {/*lg-col-2*/}
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
