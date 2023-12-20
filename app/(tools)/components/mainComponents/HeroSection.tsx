"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { enterImageleft, enterVariantChild } from "@/app/style/variants";
import { BorderIntro } from "../Borders";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section id="header" className="w-full h-screen flex flex-col snap-end ">
      <div className="h-full  panel-width bg-fillLitSolid mx-auto rounded-b-lg shadow-sm relative overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-7  lg:pr-44 h-full">
          <motion.div
            variants={enterImageleft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="h-full w-full sm:max-w-[300px] sm:rounded-r-lg sm:rounded-r-none sm:h-full  overflow-hidden col-span-2 relative pt-0 2xl:pt-20  pr-20 sm:pr-0"
          >
            <Image
              priority
              height={1000}
              width={350}
              src="/images/profile_pic.jpg"
              alt="main image"
              className=" object-center object-cover w-full h-auto sm:w-auto sm:h-full 2xl:h-[80%]  2xl:rounded-r-lg shadow-sm sm:shadow-none shadow-textLit "
            />
          </motion.div>

          <div className="text-left sm:text-right sm:col-span-5 sm:p-10 relative p-5 ">
            <div className="relative sm:absolute bottom-0 sm:bottom-20 2xl:bottom-40 sm:pr-20 lg:pr-0">
              <h1>Hi! I’m Riza Hariati (依扎/Icha)</h1>
              <h2 className=" text-accent">
                I build website and apps (mainly) using React.JS
              </h2>
              <h5>
                Whether it&apos;s for personal purpose or for small business, it
                will be my pleasure to create interesting reliable websites and
                apps that reflect your goals and personality.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <BorderIntro text="My Experiment" />
    </section>
  );
};

export default HeroSection;
