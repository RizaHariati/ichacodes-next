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
