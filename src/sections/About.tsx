import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  GraduationCap,
  UsersRound,
  Briefcase,
  ArrowDownToLineIcon,
  GithubIcon,
  LinkedinIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollToDiscover from "@/components/ScrollToDiscover";
import austenImg from "@/assets/images/austen.png";
import heroShape from "@/assets/images/hero_shape.png";

interface InfoItem {
  icon: JSX.Element;
  text: string;
}

/* Experience */
interface ExperienceItem {
  company: string;
  role: string;
  years: string;
}

interface ExperienceCategory {
  title: string;
  data: ExperienceItem[];
}

/* Skills */
interface SkillItem {
  name: string;
}

interface ToolItem {
  imgPath: string;
}

interface SkillCategory {
  title: string;
  data: SkillItem[] | ToolItem[];
}

const infoData: InfoItem[] = [
  {
    icon: <User2 size={20} />,
    text: "Austen Young",
  },
  {
    icon: <MailIcon size={20} />,
    text: "austeytech@gmail.com",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelors in Computer Science At Ohio State University",
  },
];

const ExperienceData: ExperienceCategory[] = [
  {
    title: "experience",
    data: [
      {
        company: "AGNT",
        role: "UI/UX Designer",
        years: "Summer 2024",
      },
      {
        company: "Ohio State University",
        role: "Fullstack Web Developer",
        years: "2024 - Present",
      },
      {
        company: "SEO Tech Developer",
        role: "Software Engineer",
        years: "Summer 2025",
      },
    ],
  },
  {
    title: "professional development",
    data: [
      {
        company: "SEO Career",
        role: "Edge Fellow",
        years: "2024 - 2025",
      },
      {
        company: "ColorStack",
        role: "Web Development & Operations Chair",
        years: "2024 - Present",
      },
      {
        company: "Management Leadership for Tomorrow",
        role: "Career Prep Fellow",
        years: "2025 - Present",
      },
    ],
  },
];

const skillData: SkillCategory[] = [
  {
    title: "languages & frameworks",
    data: [
      {
        name: "HTLM5/CSS3",
      },
      {
        name: "React",
      },
      {
        name: "NextJs",
      },
      {
        name: "TypeScript",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Java",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "Tailwind",
      },
      {
        name: "C",
      },
    ] as SkillItem[],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/blender.svg",
      },
    ] as ToolItem[],
  },
];

export const AboutSection = () => {
  const getData = (
    arr: ExperienceCategory[],
    title: string
  ): ExperienceCategory | undefined => {
    return arr.find((item) => item.title === title);
  };

  const getSkillData = (
    arr: SkillCategory[],
    title: string
  ): SkillCategory | undefined => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className=" lg:h-[780px] pt-24 pb-[20px] md:pb-[60px] lg:pb-[300px] relative">
      <div className="container mx-auto">
        <div className="pt-14">
          <div className="flex flex-col lg:flex-row">
            <div className="hidden lg:flex flex-1 relative">
              <div className="w-[405px] h-[405px] relative">
                <Image
                  src={heroShape}
                  priority
                  alt="austen image"
                  className="object-cover absolute -top-2 scale-x-[-1]"
                />
                <Image
                  src={austenImg}
                  priority
                  alt="austen image"
                  className="absolute "
                />
              </div>
            </div>

            {/* Tabs */}
            <div className="flex-1">
              <Tabs defaultValue="personal">
                <div>
                  <TabsList className="w-full grid lg:grid-cols-3 lg:max-w-[520px] lg:border dark:border-none">
                    <TabsTrigger
                      className="w-[162px] lg:w-auto hover:bg-black/5 hover:text-green-900 transition-all duration-300"
                      value="personal"
                    >
                      Personal Info
                    </TabsTrigger>
                    <TabsTrigger
                      className="w-[162px] lg:w-auto hover:bg-black/5 hover:text-green-900 transition-all duration-300"
                      value="Experience"
                    >
                      Experience
                    </TabsTrigger>
                    <TabsTrigger
                      className="w-[162px] lg:w-auto hover:bg-black/5 hover:text-green-900 transition-all duration-300"
                      value="skills"
                    >
                      Skills
                    </TabsTrigger>
                  </TabsList>
                </div>
                {/*content*/}
                <div className="text-lg mt-12 lg:mt-8">
                  {/*Personal Tab*/}
                  <TabsContent value="personal">
                    <div className="text-center lg:text-left">
                      <h3 className="text-3xl font-semibold mb-3">
                        <span className="text-gray-600 font-medium">
                          Hi, I'm{" "}
                        </span>
                        Austen 👋
                      </h3>
                      <p className="text-gray-600 max-w-lg mx-auto lg:mx-0 text-lg mb-8 font-light">
                        As a self-taught graphic designer turned developer, I
                        utilize{" "}
                        <span className="font-normal italic">
                          Java, JavaScript, React, Figma, and Adobe Suite{" "}
                        </span>
                        to bring a unique blend of creative vision and technical
                        expertise to every project. My background in design
                        enables me to create solutions that are not only
                        functionally powerful but also visually compelling,
                        ensuring seamless experiences across all devices.
                      </p>
                      {/*Icons*/}
                      <div className="flex sm:flex-col lg:flex-row gap-4 mb-8">
                        <div>
                          <a
                            href="/Austen Young Resume.pdf"
                            download
                            className="relative"
                          >
                            <button className="bg-green-700 text-white h-10  md:w-auto px-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-green-800 transition-colors z-20">
                              Resume <ArrowDownToLineIcon className="h-4 w-4" />
                            </button>
                          </a>
                        </div>

                        <div className="flex flex-row gap-4 mx-auto lg:mx-0 mt-2 lg:mt-0">
                          <a
                            href="https://www.linkedin.com/in/austenyoung/"
                            className="relative"
                          >
                            <button className="bg-white text-green-700 size-10 md:size-10 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-black/5 transition-colors">
                              <LinkedinIcon className="size-4" />
                            </button>
                          </a>

                          <a
                            href="https://www.linkedin.com/in/austenyoung/"
                            className="relative"
                          >
                            <button className="bg-white text-green-700 size-10 md:size-10 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-black/5 transition-colors">
                              <GithubIcon className="size-4" />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/*Experience Tab*/}
                  <TabsContent value="Experience">
                    <div>
                      <h3 className="text-3xl font-semibold mb-6 text-center lg:text-left">
                        My Journey
                      </h3>

                      {/* Experience & prof dev wrapper */}
                      <div className="grid md:grid-cols-2 gap-y-6 lg:gap-x-16 sm:px-3">
                        {/* Experience */}
                        <div className="flex flex-col gap-y-4">
                          <div className="flex gap-x-3 items-center text-lg text-green-900">
                            <Briefcase size={18} />
                            <h4 className="capitalize font-medium">
                              {getData(ExperienceData, "experience")?.title}
                            </h4>
                          </div>
                          {/* list */}
                          <div className="flex flex-col gap-y-6">
                            {getData(ExperienceData, "experience")?.data.map(
                              (item, index) => {
                                const { company, role, years } = item;
                                return (
                                  <div
                                    className="flex gap-x-6 group"
                                    key={index}
                                  >
                                    <div className="h-[70px] w-[1px] bg-border relative ml-2">
                                      <div className="w-[9px] h-[9px] rounded-full bg-green-900 absolute -left-[4px] group-hover:translate-y-[70px] transition-all duration-500"></div>
                                    </div>
                                    <div>
                                      <div className="font-semibold text-lg leading-none mb-1">
                                        {company}
                                      </div>
                                      <div className="text-base leading-none text-gray-600 italic mb-2">
                                        {role}
                                      </div>
                                      <div className="text-sm font-medium">
                                        {years}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                        {/* Prof Dev and Leadership */}
                        <div className="flex flex-col gap-y-4">
                          <div className="flex gap-x-3 items-center text-lg text-green-900">
                            <UsersRound size={18} />
                            <h4 className="capitalize font-medium">
                              {
                                getData(
                                  ExperienceData,
                                  "professional development"
                                )?.title
                              }
                            </h4>
                          </div>
                          {/* list */}
                          <div className="flex flex-col gap-y-6">
                            {getData(
                              ExperienceData,
                              "professional development"
                            )?.data.map((item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-6 group" key={index}>
                                  <div className="h-[70px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[9px] h-[9px] rounded-full bg-green-900 absolute -left-[4px] group-hover:translate-y-[70px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-lg leading-none mb-1">
                                      {company}
                                    </div>
                                    <div className="text-base leading-none text-gray-600 italic mb-2">
                                      {role}
                                    </div>
                                    <div className="text-sm font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/*Skills*/}
                  <TabsContent value="skills">
                    <div className="text-center lg:text-left">
                      <h3 className="text-3xl font-semibold mb-6">
                        My Skillset
                      </h3>

                      {/*languages & frameworks list*/}
                      <div className="mb-12">
                        <h4 className="text-lg font-semibold mb-2">Skills</h4>
                        <div className="border-b border-border mb-3"></div>
                        {/*language list*/}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                          {getSkillData(
                            skillData,
                            "languages & frameworks"
                          )?.data.map((item, index) => {
                            const skillItem = item as SkillItem;
                            return (
                              <div
                                className="text-center lg:text-left"
                                key={index}
                              >
                                <div className="text-sm font-medium">
                                  {skillItem.name}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {/*tools list*/}
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Tools</h4>
                        <div className="border-b border-border mb-3"></div>

                        <div className="flex gap-x-6 justify-center lg:justify-start">
                          {getSkillData(skillData, "tools")?.data.map(
                            (item, index) => {
                              const toolItem = item as ToolItem;
                              return (
                                <div key={index}>
                                  <img
                                    src={toolItem.imgPath}
                                    width={36}
                                    height={36}
                                    alt={`Tool ${index}`}
                                  />
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <ScrollToDiscover />
    </section>
  );
};
