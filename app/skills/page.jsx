"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
};
const feList = [
  {
    icon: <FaHtml5 />,
    name: "html 5",
  },
  {
    icon: <FaCss3 />,
    name: "Css 3",
  },
  {
    icon: <FaJs />,
    name: "Js",
  },
  {
    icon: <FaReact />,
    name: "React Js",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind Css",
  },
];
const beList = [
  {
    icon: <FaNodeJs />,
    name: "Node Js",
  },

  {
    icon: <SiNextdotjs />,
    name: "Next Js",
  },
];
const dsgnList = [
  {
    icon: <FaFigma />,
    name: "Figma",
  },
];

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      {/* Intro-description */}
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-6 xl:pb-8">
            <span className="text-xl mb-5 underline">My Skills</span>
            <p className="max-w-[700px] mb-6 text-white/80">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos minus quas, deleniti quisquam facilis omnis it
            </p>
          </div>
        </div>
      </section>
      {/* Sample tab*/}

      {/* Front end tab*/}
      <section>
        <div className="container mx-auto">
          <div className="flex flex-col items-center xl:flex-row  xl:pt-6 xl:pb-8 xl:gap-[40px]">
            <span className="text-xl mb-5 uppercase xl:mb-0 xl:w-[150px] xl:h-[150px] flex items-center justify-center text-accent">Front End and its framework</span>
            <ScrollArea className="w-full rounded-md p-4 xl:max-w-[750px]">
              <div className="w-max">
                <ul className="flex flex-row gap-4">
                  {feList.map((item, index) => (
                    <li key={index} className="flex-shrink-0">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[75px] h-[75px] bg-[#232329] rounded-xl flex justify-center items-center group xl:w-[150px] xl:h-[150px]">
                            <div className="text-6xl group-hover:text-accent transition-all duration-2">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
              <ScrollBar
                orientation="horizontal"
                className="h-2 bg-white/5 rounded-full"
              />
            </ScrollArea>
          </div>
        </div>
      </section>

      {/* Back end tab */}
          <section>
        <div className="container mx-auto">
          <div className="flex flex-col items-center xl:flex-row  xl:pt-6 xl:pb-8 xl:gap-[40px]">
            <span className="text-xl mb-5 uppercase xl:mb-0 xl:w-[150px] xl:h-[150px] flex items-center justify-center text-accent">BackEnd and its framework</span>
            <ScrollArea className="w-full rounded-md p-4 xl:max-w-[750px]">
              <div className="w-max">
                <ul className="flex flex-row gap-4">
                  {beList.map((item, index) => (
                    <li key={index} className="flex-shrink-0">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[75px] h-[75px] bg-[#232329] rounded-xl flex justify-center items-center group xl:w-[150px] xl:h-[150px]">
                            <div className="text-6xl group-hover:text-accent transition-all duration-2">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
              <ScrollBar
                orientation="horizontal"
                className="h-2 bg-white/5 rounded-full"
              />
            </ScrollArea>
          </div>
        </div>
      </section>

      {/* Design */}
             <section>
        <div className="container mx-auto">
          <div className="flex flex-col items-center xl:flex-row  xl:pt-6 xl:pb-8 xl:gap-[40px]">
            <span className="text-xl mb-5 uppercase xl:mb-0 xl:w-[150px] xl:h-[150px] flex items-center justify-center text-accent">Design</span>
            <ScrollArea className="w-full rounded-md p-4 xl:max-w-[750px]">
              <div className="w-max">
                <ul className="flex flex-row gap-4">
                  {dsgnList.map((item, index) => (
                    <li key={index} className="flex-shrink-0">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[75px] h-[75px] bg-[#232329] rounded-xl flex justify-center items-center group xl:w-[150px] xl:h-[150px]">
                            <div className="text-6xl group-hover:text-accent transition-all duration-2">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
              <ScrollBar
                orientation="horizontal"
                className="h-2 bg-white/5 rounded-full"
              />
            </ScrollArea>
          </div>
        </div>
      </section>

    </>
  );
};

export default Skills;
