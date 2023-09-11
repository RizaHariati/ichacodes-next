import dayjs from "dayjs";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section id="copyright" className="w-full h-30  snap-end ">
      <div className=" h-20 panel-width  mx-auto grid grid-cols-4 items-center ">
        <div className="col-span-2"></div>
        <div className="flex flex-col h-full col-span-2">
          <div className="grid grid-cols-3">
            <div className=" h-full out border-b-2 border-l-2 rounded-bl-lg border-DrkBorder -ml-0.5"></div>
            <p className="h-full col-span-2 text-small-kit pt-5">
              By Riza Hariati for Ichacodes copyright &copy;
              {dayjs().format("YYYY")}
            </p>
          </div>
          <div className="  h-full"></div>
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </section>
  );
};

export default Footer;
