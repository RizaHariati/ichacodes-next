"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { enterImageleft } from "@/app/style/variants";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section
      id="header"
      className="w-full h-[100svh] flex flex-col snap-end pb-16 "
    >
      <div className="h-[calc(100svh-64px)]  panel-width bg-fillLitSolid mx-auto rounded-b-lg shadow-sm relative overflow-hidden">
        <div className=" grid grid-cols-1 sm:grid-cols-10 pr-20 sm:pr-0  h-full pb-5 lg:pb-32">
          <motion.div
            variants={enterImageleft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="hw-full sm:max-w-[300px] rounded-br-md  lg:rounded-br-lg  overflow-hidden col-span-2 relative pt-0 h-[calc(20svh+250px)]  "
          >
            <Image
              loading="eager"
              priority
              height={1000}
              width={350}
              src="/images/profile_pic.jpg"
              alt="main image"
              className=" object-center object-cover w-full h-auto sm:w-auto sm:h-full  rounded-br-md  2xl:rounded-br-lg  overflow-hidden "
            />
          </motion.div>

          <div className=" col-span-6 0 h-full w-full">
            <div className=" flex items-end justify-start lg:justify-end h-full flex-col px-10 pr-0 ">
              <h1>Hi! I’m Riza Hariati </h1>
              <h2>(热依扎 Icha)</h2>
              <h2 className=" text-accent2 ">I build websites and apps</h2>
              <h5 className=" text-right">
                Whether it&apos;s for personal purpose or for small business, it
                will be my pleasure to create interesting reliable websites and
                apps that reflect your goals and personality.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
