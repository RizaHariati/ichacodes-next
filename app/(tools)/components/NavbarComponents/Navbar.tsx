import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { enterVariant, enterVariantChild } from "@/app/style/variants";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="w-full h-screen  ">
      <div className=" w-full h-[85%] lg:max-w-[80%] mx-auto overflow-hidden flex flex-row relative z-10">
        <AnimatePresence>
          {/* --------------------------- LOGO ATAS -------------------------- */}
          <Link href="/" className=" w-full absolute z-30">
            <motion.div
              key={pathname}
              variants={enterVariant}
              initial="initial"
              whileInView="animate"
              exit="exit"
              className="flex items-center gap-2 p-2  "
            >
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm ">
                <Image
                  loading="lazy"
                  width={50}
                  height={50}
                  alt="main logo"
                  src="/images/icons/icon192.png"
                  rel="preload"
                  placeholder="empty"
                  className=" object-cover object-center w-full h-full"
                />
              </div>
              <p className=" text-textMed font-poppins font-bold text-[32px] ">
                Icha<span className="text-accent">Codes</span>
              </p>
            </motion.div>
          </Link>
          {/* -------------------------- MENU KANAN -------------------------- */}
          <div className=" h-full w-44 py-14 absolute z-30 right-0 overflow-hidden">
            <motion.div
              key={pathname}
              variants={enterVariant}
              initial="initial"
              whileInView="animate"
              exit="exit"
              className=" h-full right-0 flex flex-col items-end gap-2 border-l-2 border-accent pl-5 pt-5 "
            >
              <AnimatePresence>
                <motion.button
                  key="btn-1"
                  variants={enterVariantChild}
                  className="nav-btn group"
                >
                  <div className="nav-btn-img">
                    <Image
                      loading="lazy"
                      width={40}
                      height={40}
                      alt="github"
                      src="/images/icons/github.jpg"
                      rel="preload"
                      placeholder="empty"
                      className=" object-center object-cover"
                    />
                  </div>
                  <h3> Github</h3>
                </motion.button>
                <motion.button
                  key="btn-2"
                  variants={enterVariantChild}
                  className="nav-btn group"
                >
                  <div className="nav-btn-img">
                    <Image
                      loading="lazy"
                      width={40}
                      height={40}
                      alt="github"
                      src="/images/icons/linkedin.jpg"
                      rel="preload"
                      placeholder="empty"
                      className=" object-center object-cover"
                    />
                  </div>
                  <h3> Linkedin</h3>
                </motion.button>
                <motion.button
                  onClick={() => router.push("/about")}
                  key="btn-3"
                  variants={enterVariantChild}
                  className="nav-btn group"
                >
                  <div className="nav-btn-img">
                    <Image
                      loading="lazy"
                      width={40}
                      height={40}
                      alt="github"
                      src="/images/icons/icha.jpg"
                      rel="preload"
                      placeholder="empty"
                      className=" object-center object-cover"
                    />
                  </div>
                  <h3> About</h3>
                </motion.button>
              </AnimatePresence>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
