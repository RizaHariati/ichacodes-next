import React from "react";

type Props = {};

const Borders = (props: Props) => {
  return <div>Borders</div>;
};

export default Borders;

export const BorderStraightTop = () => {
  return (
    <div className="h-[5%] lg:h-[10%] panel-width mx-auto">
      <div className="w-1/2  h-full border-r-2 border-DrkBorder"></div>
    </div>
  );
};

export const BorderStraightBottom = () => {
  return (
    <div className=" h-[10%] panel-width mx-auto">
      <div className="w-1/2  h-full border-r-2 border-DrkBorder"></div>
    </div>
  );
};

type IntroProps = {
  text: string;
};
export const BorderIntro = ({ text }: IntroProps) => {
  return (
    <div className="h-28 panel-width mx-auto grid grid-cols-4 items-center ">
      <p className="text-textDrk font-oswald  text-[20px] md:text-[30px] tracking-0 md:tracking-[2px] text-right w-full  animate-pulse pr-3 h-1/2 mb-5 md:mb-0 whitespace-nowrap">
        {text}
      </p>
      <div className="flex flex-col h-full">
        <div className="  h-full"></div>
        <div className="  w-full h-full border-t-2 border-r-2 rounded-tr-lg border-DrkBorder"></div>
      </div>
    </div>
  );
};
