import React from "react";
import { BorderStraight } from "../Borders";
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

type Props = {
  project: ProjectType;
  evenOdd: "even" | "odd";
};

const Project = ({ project, evenOdd }: Props) => {
  return (
    <section
      id={project.id}
      className="w-full h-screen bg-fillLit flex flex-col snap-center"
    >
      <BorderStraight />
      <div className="h-full w-full lg:max-w-[80%] mx-auto bg-fillLitSolid rounded-lg  overflow-hidden">
        <TitleProject project={project} evenOdd={evenOdd} />
        <div className=" h-full w-full flex items-center justify-between ">
          <ProjectInfo project={project} evenOdd={evenOdd} />
          <div className="h-full w-[55%] flex items-start justify-start overflow-hidden pb-16 ">
            <motion.div
              variants={evenOdd === "even" ? enterImageRight : enterImageleft}
              initial="initial"
              whileInView="animate"
              className="h-full w-full overflow-hidden "
            >
              <Image
                rel="preload"
                placeholder="empty"
                src={`/images/projects/${project.slug}/${project.main_image}.jpg`}
                width={800}
                height={700}
                className="h-full w-auto mx-auto object-covers object-center bg-white "
                alt={project.main_image}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <BorderStraight />
    </section>
  );
};

export default Project;

const TitleProject = ({ project, evenOdd }: Props) => {
  return (
    <motion.div
      className={
        evenOdd === "even" ? "project-title" : "project-title justify-end "
      }
    >
      <motion.h2
        variants={enterTitleVariants}
        initial="initial"
        whileInView="animate"
        className={
          evenOdd === "even"
            ? " text-drk uppercase order-1"
            : " text-drk uppercase "
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
        className="h-10 w-10 object-covers rounded-full overflow-hidden bg-white shadow-sm shadow-textLit"
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
        evenOdd === "even" ? " w-[45%] order-0 p-5" : " w-[45%] order-1 p-5"
      }
    >
      <div className="leading-5">
        {project.description.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      <div className="grid grid-cols-3 w-full gap-2 mt-2">
        <p className="transparant-button">Library/Framework</p>
        <p className=" col-span-2 p-1">{project.mainProgram}</p>

        <p className="transparant-button">Dependencies</p>
        <p className=" col-span-2 p-1">{project.dependencies}</p>

        <Link
          href={project.url}
          rel="noopener noreferrer"
          target="_blank"
          className=" project-visit-btn"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
          <p className="uppercase tracking-[2px]">Visit Website</p>
        </Link>
      </div>
    </div>
  );
};
