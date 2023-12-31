"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  enterTitleVariants,
  enterVariant,
  enterVariantChild,
} from "@/app/style/variants";
import { BorderIntro } from "../Borders";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section id="header" className="w-full h-fit  flex flex-col snap-start">
      <div className="h-fit  over panel-width bg-fillLitSolid mx-auto rounded-b-lg shadow-sm  ">
        <div className="h-full flex flex-col gap-2 p-5 pt-14 2xl:pt-24 w-full ">
          {/* -------------------- IMAGE AND ABOUT ME TEXT ------------------- */}
          <motion.div
            variants={enterVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full flex items-end justify-between md:justify-end gap-5  pr-14 lg:pr-52 "
          >
            <motion.h1
              key="me"
              variants={enterTitleVariants}
              className=" text-accent"
            >
              About me
            </motion.h1>
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

          <motion.div className="  flex flex-col gap-2 h-full md:min-h-[350px] 2xl:min-h-[450px] lg:px-10 ">
            <p className="leading-5  pr-14 lg:pr-36 2xl:leading-normal 2xl:text-lg  ">
              I was an architect for quite some time until that moment when the
              COVID hit, then I thought, &#39;Life is too short!&#39;and decided
              to invest my money and time in learning programming and Mandarin.
              The two things I&#39;m interested in, had already dabbled on
              before, but never had the time to really focus on because of my
              previous job.
            </p>
            <p className="leading-5 md:pr-14 lg:pr-36 2xl:leading-normal 2xl:text-lg">
              I had no idea nor direction of which one to learn first, so I
              tried everything: Java, Python, JavaScript, and PHP. I also
              learned the frameworks and libraries, Laravel, React.JS,
              Gatsby.JS, Next.JS, Express.JS, Node.JS. Plus designing tools:
              Figma, CSS, Tailwind CS`S, Material UI, etc.
            </p>

            <h4 className="text-center px-5 md:px-10 tracking=[2px] md:pr-14 lg:pr-52  2xl:leading-normal 2xl:text-lxl">
              I still have a lot to learn, but after experimenting with many
              Projects, my focus now is designing UI/UX and creating Front End
              using React JS as my main library.
            </h4>
            <p className="leading-5 md:pr-14 lg:pr-36 2xl:leading-normal 2xl:text-lg">
              I also had a great time learning Data Structures and algorithms. I
              still do it now and again whenever I get the spare time. Turns
              out, this helps a lot in structuring my design. Also, My Mandarin
              has gotten better. I can read more articles than before and do
              simple daily conversations using Mandarin. I hope to do more and
              better web and app designs that are useful for other people and
              fun to work on. I hope to collaborate with and learn from other
              programmers and people from this business. To use my time on earth
              doing good things.
            </p>
          </motion.div>
        </div>
      </div>
      <BorderIntro text="My Skills" />
    </section>
  );
};

export default AboutSection;
