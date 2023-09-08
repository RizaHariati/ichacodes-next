"use client";

import { projects } from "../(tools)/data/data";
import Project from "../(tools)/components/mainComponents/Project";
import HeroSection from "../(tools)/components/mainComponents/HeroSection";
import dayjs from "dayjs";

export default function Home() {
  return (
    <main className="absolute w-full top-0 z-0">
      <HeroSection />
      {projects.map((project, index: number) => {
        return (
          <Project
            key={project.id}
            project={project}
            evenOdd={index % 2 === 0 ? "even" : "odd"}
          />
        );
      })}
      <section id="copyright" className="w-full h-30 snap-start ">
        <div className="h-20 w-full lg:max-w-[80%]  mx-auto grid grid-cols-4 items-center ">
          <div className="col-span-2"></div>
          <div className="flex flex-col h-full col-span-2">
            <div className="grid grid-cols-3">
              <div className=" h-full out border-b-2 border-l-2 rounded-bl-lg border-DrkBorder -ml-0.5"></div>
              <p className="h-full col-span-2">
                By Riza Hariati for Ichacodes copyright &copy;
                {dayjs().format("YYYY")}
              </p>
            </div>
            <div className="  h-full"></div>
          </div>
        </div>
        <div>
          <div></div>
        </div>
      </section>
    </main>
  );
}
