"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { enterVariantChild } from "../style/variants";
import { projects } from "../(tools)/data/data";
import Project from "../(tools)/components/mainComponents/Project";

export default function Home() {
  return (
    <main className="absolute w-full top-0 z-0">
      <section id="header" className="w-full h-screen flex flex-col snap-end ">
        <div className="h-full w-full lg:max-w-[80%] bg-fillLitSolid mx-auto rounded-b-lg shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-7 pr-48 h-full">
            <motion.div
              variants={enterVariantChild}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className=" w-full bottom-0 left-0 overflow-hidden col-span-2 "
            >
              <Image
                priority
                height={1000}
                width={350}
                src="/images/profile_pic.jpg"
                alt="main image"
                className=" object-center object-cover w-full h-full"
              />
            </motion.div>

            <div className="text-right col-span-5 p-10 relative">
              <div className=" absolute bottom-14">
                <h1>Hi! I’m Riza Hariati (依扎/Icha)</h1>
                <h2 className=" text-accent">
                  I build website and apps (mainly) using React.JS
                </h2>
                <h5>
                  Whether it's for personal purpose or for small business, it
                  will be my pleasure to create interesting reliable websites
                  and apps that reflect your goals and personality.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="h-36 w-full lg:max-w-[80%] mx-auto grid grid-cols-4 items-center ">
          <p className="text-textDrk font-oswald text-[30px] tracking-[2px] text-right w-full  animate-pulse pr-3 h-1/2">
            My experiments
          </p>
          <div className="flex flex-col h-full">
            <div className="  h-full"></div>
            <div className="  w-full h-full border-t-2 border-r-2 rounded-tr-lg border-DrkBorder"></div>
          </div>
        </div>
      </section>
      {projects.map((project, index: number) => {
        return (
          <Project
            key={project.id}
            project={project}
            evenOdd={index % 2 === 0 ? "even" : "odd"}
          />
        );
      })}
      <section
        id="image-2"
        className="w-full h-screen bg-green-300 snap-start "
      >
        <div className="h-36 w-full lg:max-w-[80%]">
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </section>
    </main>
  );
}
