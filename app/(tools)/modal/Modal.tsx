"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../context/AppProvider";
import { AnimatePresence, motion } from "framer-motion";
import { enterOpacity, enterTitleVariants } from "@/app/style/variants";
import Image from "next/image";

type Props = {};

const Modal = (props: Props) => {
  const { closeModal, showModal, showProject } = useGlobalContext();
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          variants={enterOpacity}
          initial="initial"
          animate="animate"
          exit="exit"
          className="modal-bg"
        >
          <div className="modal">
            <button
              onClick={() => closeModal()}
              className="absolute top-5 right-5"
            >
              <FontAwesomeIcon icon={faClose} className="h-6" />
            </button>
            {showProject && (
              <div className="h-full w-full">
                <motion.div
                  variants={enterOpacity}
                  className="h-full w-fit overflow-hidden mx-auto "
                >
                  <Image
                    rel="preload"
                    placeholder="empty"
                    src={`/images/projects/${showProject.slug}/${showProject.modal_image}.jpg`}
                    width={1400}
                    height={1000}
                    className="h-full w-auto mx-auto object-covers object-center bg-white "
                    alt={showProject.modal_image}
                    loading="lazy"
                  />
                </motion.div>
                <motion.div className="project-title absolute bottom-0 justify-end  border-t w-full">
                  <motion.h2
                    variants={enterTitleVariants}
                    initial="initial"
                    whileInView="animate"
                    className=" text-drk uppercase "
                  >
                    {showProject.title}
                  </motion.h2>
                  <Image
                    rel="preload"
                    placeholder="empty"
                    src={`/images/projects/${showProject.slug}/${showProject.img_logo}.png`}
                    width={50}
                    height={50}
                    className="h-10 w-10 object-covers rounded-full overflow-hidden bg-white shadow-sm shadow-textLit"
                    alt={showProject.slug}
                    loading="lazy"
                  />
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
