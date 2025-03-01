"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { enterVariant } from "@/app/style/variants";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section
      id="header"
      className="panel-width h-fit  flex flex-col snap-start mx-auto  "
    >
      <div className="h-fit flex flex-col gap-2 p-3 pt-14 2xl:pt-24 w-full bg-fillLitSolid rounded-b-md pr-20 lg:pr-56 pl-0 lg:pl-32 2xl:pl-44">
        {/* -------------------- IMAGE AND ABOUT ME TEXT ------------------- */}
        <motion.div
          variants={enterVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full flex items-end justify-end gap-5   "
        >
          <h1 key="me" className=" text-accent">
            About me
          </h1>
          <motion.div
            key="my-image"
            className=" w-28 2xl:w-40 aspect-square overflow-hidden col-span-2 rounded-md "
          >
            <Image
              priority
              height={300}
              width={300}
              src="/images/profile_pic.jpg"
              alt="main image"
              className=" object-center object-cover w-full h-full"
            />
          </motion.div>

          {/* -------------------------- BOTTOM LINE ------------------------- */}
        </motion.div>

        <div className="  flex flex-col gap-2 h-[250px] lg:h-[120px] items-start justify-start ">
          <p className="  text-right  ">
            I was an architect for quite some time until that moment when the
            COVID hit, then I thought, &#39;Life is too short!&#39;and decided
            to invest my money and time in learning programming and Mandarin.
            The two things I&#39;m interested in, had already dabbled on before,
            but never had the time to really focus on because of my previous
            job.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
