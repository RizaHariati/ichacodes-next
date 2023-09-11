"use client";
import React from "react";
import { BorderStraightBottom, BorderStraightTop } from "../Borders";
import { ProjectType } from "@/types.d";
import Image from "next/image";
import {
  enterTitleVariants,
  enterImageleft,
  enterImageRight,
} from "@/app/style/variants";
import { motion } from "framer-motion";
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
      className="w-full h-screen bg-fillLit flex flex-col snap-center animate-bounce-once"
    >
      <BorderStraightTop />
      <div className="h-full panel-width mx-auto bg-fillLitSolid rounded-lg  overflow-hidden">
        <TitleProject project={project} evenOdd={evenOdd} />
        <div className=" h-full w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 ">
          <ProjectInfo project={project} evenOdd={evenOdd} />
          <div className="h-full flex items-start justify-start overflow-hidden pb-0  md:pb-16 relative ">
            <motion.div
              variants={evenOdd === "even" ? enterImageRight : enterImageleft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="h-full overflow-hidden  relative mx-auto"
            >
              <Image
                rel="preload"
                placeholder="empty"
                src={`/images/projects/${project.slug}/${project.main_image}.jpg`}
                width={900}
                height={700}
                className="h-full w-auto md:w-full md:h-auto mx-auto object-covers object-center bg-white "
                alt={project.main_image}
                loading="lazy"
              />
              <motion.button
                onClick={() => openModal(project)}
                variants={evenOdd === "even" ? enterImageRight : enterImageleft}
                initial="initial"
                whileInView="animate"
                className=" h-12 w-12 md:h-20 md:w-20  overflow-hidden absolute  z-20 bottom-[5%]  right-[5%] "
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
          </div>
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
        evenOdd === "even" ? "project-title" : "project-title md:justify-end "
      }
    >
      <motion.h2
        variants={enterTitleVariants}
        className={
          evenOdd === "even"
            ? " leading-5 text-drk uppercase order-1 origin-left"
            : " leading-5 text-drk uppercase order-1 md:order-0 "
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
        className="h-6 md:h-10 w-auto   object-covers rounded-full overflow-hidden bg-white shadow-sm shadow-textLit"
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
          ? "  project-info order-1  md:order-0 "
          : " project-info  order-1  "
      }
    >
      <div className="mb-auto">
        <div className="leading-5 2xl:text-xl">
          {project.description.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-2 mt-2 2xl:text-xl">
          <p className="transparant-button">Library/Framework</p>
          <p className=" md:col-span-2 p-1 text-small-kit">
            {project.mainProgram}
          </p>

          <p className="transparant-button">Dependencies</p>
          <p className=" md:col-span-2 p-1 text-small-kit">
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
    </div>
  );
};
