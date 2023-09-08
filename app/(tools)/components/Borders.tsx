import React from "react";

type Props = {};

const Borders = (props: Props) => {
  return <div>Borders</div>;
};

export default Borders;

export const BorderStraight = () => {
  return (
    <div className="h-[10%] w-full lg:max-w-[80%] mx-auto">
      <div className="w-1/2  h-full border-r-2 border-DrkBorder"></div>
    </div>
  );
};
