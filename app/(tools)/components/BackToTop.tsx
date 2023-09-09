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
      className=" fixed bottom-14 right-5 animate-pulse flex-center-center flex-col z-50 text-greyMed1"
    >
      <FontAwesomeIcon icon={faArrowAltCircleUp} className="h-10" />
      <p className="btn-2-bold">Top</p>
    </button>
  );
};

export default BackToTop;
