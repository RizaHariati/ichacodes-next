"use client";
import React from "react";
import { BorderStraightBottom, BorderStraightTop } from "../Borders";
import { ProjectType } from "@/types.d";
import Image from "next/image";
import {
  enterTitleVariants,
  enterImageleft,
  enterImageRight,
  enterOpacity,
} from "@/app/style/variants";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useGlobalContext } from "../../context/AppProvider";

type Props = {
  project: ProjectType;
  evenOdd: "even" | "odd";
};

const ProjectSection = ({ project, evenOdd }: Props) => {
  const { openModal } = useGlobalContext();
  return (
    <section
      id={project.id}
      className="w-full h-screen bg-fillLit flex flex-col snap-center animate-bounce-once   "
    >
      <BorderStraightTop />
      <div className="h-full panel-width mx-auto bg-fillLitSolid rounded-lg  overflow-hidden ">
        <TitleProject project={project} evenOdd={evenOdd} />
        <div className=" h-full w-full grid grid-cols-1 grid-rows-3 sm:grid-rows-4 sm:grid-cols-2">
          <div className="h-full sm:row-span-3 flex items-start justify-start overflow-hidden relative  ">
            <AnimatePresence>
              <motion.div
                key={project.id}
                variants={evenOdd === "even" ? enterImageRight : enterImageleft}
                initial="initial"
                whileInView="animate"
                exit="exit"
                viewport={{ once: true }}
                className="h-full overflow-hidden  relative mx-auto "
              >
                <Image
                  rel="preload"
                  placeholder="empty"
                  src={`/images/projects/${project.slug}/${project.main_image}.jpg`}
                  width={800}
                  height={700}
                  className="h-full w-auto  mx-auto object-covers object-center  "
                  alt={project.main_image}
                  loading="lazy"
                />
                <motion.button
                  variants={enterOpacity}
                  onClick={() => openModal(project)}
                  className=" h-12 w-12 sm:h-16 sm:w-16  overflow-hidden absolute  z-20 bottom-[5%] right-[5%] "
                >
                  <Image
                    rel="preload"
                    placeholder="empty"
                    src={`/images/icons/magnifying.png`}
                    width={50}
                    height={50}
                    className="h-full w-auto  object-covers object-center"
                    alt="magnifying"
                    loading="lazy"
                  />
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
          <ProjectInfo project={project} evenOdd={evenOdd} />
        </div>
      </div>
      <BorderStraightBottom />
    </section>
  );
};

export default ProjectSection;

export const TitleProject = ({ project, evenOdd }: Props) => {
  return (
    <motion.div
      variants={enterTitleVariants}
      initial="initial"
      whileInView="animate"
      className={
        evenOdd === "even" ? "project-title" : "project-title sm:justify-end "
      }
    >
      <motion.h2
        variants={enterTitleVariants}
        className={
          evenOdd === "even"
            ? " leading-5 text-drk uppercase order-1 origin-left"
            : " leading-5 text-drk uppercase order-1 sm:order-0 "
        }
      >
        {project.title}
      </motion.h2>
      <Image
        rel="preload"
        placeholder="empty"
        src={`/images/projects/${project.slug}/${project.img_logo}.png`}
        width={50}
        height={50}
        className="h-6 sm:h-10 w-auto   object-covers rounded-full overflow-hidden bg-white shadow-sm shadow-textLit"
        alt={project.slug}
        loading="lazy"
      />
    </motion.div>
  );
};

const ProjectInfo = ({ project, evenOdd }: Props) => {
  return (
    <div
      className={
        evenOdd === "even"
          ? "  project-info  sm:col-start-2  lg:pr-10 sm:pl-0 sm:pr-5 "
          : " project-info  lg:pl-10 sm:pr-0 sm:pl-5  "
      }
    >
      <div className="leading-normal sm:leading-4 lg:leading-5 2xl:text-xl my-auto h-[30vh] sm:h-fit overflow-y-scroll scrollbar-none">
        {project.description.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 w-full gap-2 2xl:text-xl ">
        <p className="transparant-button">Library/Framework</p>
        <p className=" sm:col-span-2 p-1 text-small-kit">
          {project.mainProgram}
        </p>

        <p className="transparant-button">Dependencies</p>
        <p className=" sm:col-span-2 p-1 text-small-kit">
          {project.dependencies}
        </p>

        <Link
          href={project.url}
          rel="noopener noreferrer"
          target="_blank"
          className=" project-visit-btn"
        >
          <FontAwesomeIcon icon={faPaperPlane} className="h-6" />
          <p className="uppercase tracking-[2px] ">Visit Website</p>
        </Link>
      </div>
    </div>
  );
};
