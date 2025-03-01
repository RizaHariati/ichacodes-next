import dayjs from "dayjs";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section
      id="copyright"
      className="w-full h-20 snap-end flex items-center justify-center"
    >
      <p className="h-full col-span-2 text-small-kit pt-5">
        By Riza Hariati for Ichacodes copyright &copy;
        {dayjs().format("YYYY")}
      </p>
    </section>
  );
};

export default Footer;
