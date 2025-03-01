"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../context/AppProvider";
import { AnimatePresence, motion } from "framer-motion";
import {
  enterOpacity,
  enterOpacityChild,
  enterTitleVariants,
} from "@/app/style/variants";
import Image from "next/image";

type Props = {};

const Modal = (props: Props) => {
  const { closeModal, showModal, showProject } = useGlobalContext();

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          id="modalbackground"
          variants={enterOpacity}
          initial="initial"
          animate="animate"
          exit="exit"
          className="modal-bg"
        >
          <motion.div
            id="imageModal"
            variants={enterOpacityChild}
            className="modal"
          >
            <button
              onClick={() => closeModal()}
              className="absolute top-2 right-2 md:top-5 md:right-5 h-6 w-6 bg-fillLitSolid rounded-full overflow-hidden hover:bg-fillMed active:bg-fillMed hover:text-fillLitSolid cursor-pointer transition-all flex items-center justify-center border border-fillMed"
            >
              <FontAwesomeIcon icon={faClose} className="h-6 " />
            </button>
            {showProject && (
              <div className="h-full w-full flex items-center justify-between flex-col">
                <div className="h-full w-full  mx-auto shrink overflow-hidden ">
                  {window.innerWidth > 450 && (
                    <Image
                      rel="preload"
                      loading="eager"
                      placeholder="empty"
                      src={`/images/projects/${showProject.slug}/${showProject.modal_image}.jpg`}
                      width={1400}
                      height={1000}
                      className="h-full w-auto mx-auto object-cover object-center "
                      alt={showProject.modal_image}
                    />
                  )}
                  {window.innerWidth <= 450 && (
                    <Image
                      rel="preload"
                      placeholder="empty"
                      src={`/images/projects/${showProject.slug}/${showProject.phone_image}.jpg`}
                      width={400}
                      height={800}
                      className="h-auto w-full mx-auto object-cover object-center "
                      alt={showProject.phone_image}
                      loading="eager"
                    />
                  )}
                </div>
                <motion.div className="project-title absolute bottom-0 justify-end  border-t w-full shrink-0 z-30 bg-fillLitSolid p-1">
                  <motion.h4
                    variants={enterTitleVariants}
                    initial="initial"
                    whileInView="animate"
                    className=" text-drk uppercase "
                  >
                    {showProject.title}
                  </motion.h4>
                  <Image
                    rel="preload"
                    placeholder="empty"
                    src={`/images/projects/${showProject.slug}/${showProject.img_logo}.png`}
                    width={50}
                    height={50}
                    className="h-8 w-8 object-covers rounded-full overflow-hidden bg-white shadow-sm shadow-textLit"
                    alt={showProject.slug}
                    loading="lazy"
                  />
                </motion.div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
