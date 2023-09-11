"use client";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  elementId: string;
};

const BackToTop = ({ elementId }: Props) => {
  return (
    <button
      onClick={() => {
        const access = document?.getElementById(elementId);
        access?.scrollIntoView({ behavior: "smooth" });
      }}
      className=" fixed bottom-2 md:bottom-0 right-5 animate-pulse flex flex-col items-center justify-center z-50 text-white"
    >
      <FontAwesomeIcon icon={faArrowAltCircleUp} className="h-6 md:h-8" />
      <p className="btn-2-bold">Top</p>
    </button>
  );
};

export default BackToTop;
