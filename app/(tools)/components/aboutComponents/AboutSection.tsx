"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  enterTitleVariants,
  enterVariant,
  enterVariantChild,
} from "@/app/style/variants";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section id="header" className="w-full h-screen flex flex-col snap-end ">
      <div className="h-full panel-width bg-fillLitSolid mx-auto rounded-b-lg shadow-sm relative overflow-hidden">
        <div className="flex flex-col gap-2 pr-48 h-full pt-14 w-full px-10 ">
          <motion.div className=" flex flex-col gap-2 w-full ">
            {/* -------------------- IMAGE AND ABOUT ME TEXT ------------------- */}
            <motion.div
              variants={enterVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="w-full flex items-end justify-end gap-5"
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
                className=" w-28 aspect-square bottom-0 left-0 overflow-hidden col-span-2 rounded-md "
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
            </motion.div>
            {/* -------------------------- BOTTOM LINE ------------------------- */}
          </motion.div>

          <motion.div className="  flex flex-col gap-2  h-full">
            <p className="leading-5">
              I was an architect for quite some time until that moment when
              COVID hit, then I thought, ‘Live is too short’ and decided to
              invest my money and time in learning programming and Mandarin. The
              two things I’m interested in, had already dabbled on before, but
              never had the time to really focus on because of my previous job.
              I had no idea nor direction of which one to learn first, so I
              tried everything: Java, Python, JavaScript, and PHP. I also
              learned the frameworks and libraries, Laravel, React.JS,
              Gatsby.JS, Next.JS, Express.JS, Node.JS. Plus designing tools:
              Figma, CSS, Tailwind CS`S, Material UI, etc.
            </p>
            <h4 className="text-center px-10 tracking=[2px]">
              I still have a lot to learn, but after experimenting with many
              Projects, my focus now is designing UI/UX and creating Front End
              using React JS as my main library.
            </h4>
            <p className="leading-5">
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
      <div className="h-36 panel-width mx-auto grid grid-cols-4 items-center ">
        <p className="text-textDrk font-oswald text-[30px] tracking-[2px] text-right w-full  animate-pulse pr-3 h-1/2">
          My Skills
        </p>
        <div className="flex flex-col h-full">
          <div className="  h-full"></div>
          <div className="  w-full h-full border-t-2 border-r-2 rounded-tr-lg border-DrkBorder"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
