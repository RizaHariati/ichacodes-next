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
        <div className="grid grid-cols-1 md:grid-cols-7 pr-20 lg:pr-48 h-full">
          <motion.div
            variants={enterImageleft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="h-full w-full  overflow-hidden col-span-2 relative pt-14  shadow-sm md:shadow-none shadow-textLit"
          >
            <Image
              priority
              height={1000}
              width={350}
              src="/images/profile_pic.jpg"
              alt="main image"
              className=" object-center object-cover w-full h-auto md:w-auto md:h-full 2xl:h-[80%] absolute bottom-1/2 translate-y-1/2 2xl:rounded-r-lg"
            />
          </motion.div>

          <div className="text-right md:col-span-5 md:p-10 relative">
            <div className=" absolute bottom-14 2xl:bottom-24">
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
