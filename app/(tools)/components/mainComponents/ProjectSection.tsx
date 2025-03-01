"use client";
import React from "react";

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
      className="w-full h-[100svh] bg-fillLit flex flex-col snap-start animate-bounce-once p-3 "
    >
      <div className="h-full panel-width mx-auto bg-fillLitSolid rounded-lg  overflow-hidden shrink flex items-center justify-between flex-col ">
        <TitleProject project={project} evenOdd={evenOdd} />
        <div className="h-[85svh] flex items-center justify-between flex-col md:flex-row md:p-10 w-full">
          <div className=" h-[28svh] md:h-[85svh] relative overflow-hidden w-full md:w-1/2 flex items-center justify-center">
            {/* ----------------------------- image ---------------------------- */}

            <AnimatePresence>
              <motion.div
                key={project.id}
                variants={evenOdd === "even" ? enterImageRight : enterImageleft}
                initial="initial"
                whileInView="animate"
                exit="exit"
                viewport={{ once: true }}
                className="h-full md:h-auto md:w-[80%]  overflow-hidden mx-auto flex items-center justify-center relative "
              >
                <Image
                  rel="preload"
                  placeholder="empty"
                  src={`/images/projects/${project.slug}/${project.main_image}.jpg`}
                  width={700}
                  height={600}
                  className="h-full md:h-auto w-auto md:w-full  mx-auto object-covers  "
                  alt={project.main_image}
                  loading="lazy"
                />
                <button
                  onClick={() => openModal(project)}
                  className=" h-12 w-12 sm:h-16 sm:w-16  overflow-hidden  absolute z-20 bottom-0 right-6 md:right-16"
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
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
          <ProjectInfo project={project} evenOdd={evenOdd} />
        </div>
      </div>
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
      viewport={{ once: true }}
    >
      <motion.h3
        viewport={{ once: true }}
        variants={enterTitleVariants}
        className={
          evenOdd === "even"
            ? " leading-5 text-drk uppercase order-1 origin-left "
            : " leading-5 text-drk uppercase order-1 sm:order-0  "
        }
      >
        {project.title}
      </motion.h3>
      <Image
        rel="preload"
        placeholder="empty"
        src={`/images/projects/${project.slug}/${project.img_logo}.png`}
        width={50}
        height={50}
        className="h-6 sm:h-10 w-auto object-covers rounded-full overflow-hidden bg-white  mx-2"
        alt={project.slug}
        loading="eager"
      />
    </motion.div>
  );
};

const ProjectInfo = ({ project, evenOdd }: Props) => {
  return (
    <div
      className={
        evenOdd === "even"
          ? "  project-info md:order-last "
          : " project-info order-last  md:order-first "
      }
    >
      <div className="h-full md:h-fit  overflow-y-scroll scrollbar-none shrink scrollbar-thin">
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
