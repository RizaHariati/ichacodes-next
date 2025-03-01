import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { enterVariant } from "@/app/style/variants";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="w-full h-[calc(20svh+250px)]   ">
      <div className="h-full  panel-width mx-auto overflow-hidden flex flex-row z-10  ">
        {/* --------------------------- LOGO ATAS -------------------------- */}

        <div
          key={pathname + "logo"}
          // variants={enterVariant}
          // initial="initial"
          // whileInView="animate"
          // exit="exit"
          className=" w-full z-30"
        >
          <Link href="/" className="flex items-center gap-2 p-2  ">
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
          </Link>
        </div>
        {/* -------------------------- MENU KANAN -------------------------- */}
        <div className=" h-full w-[72px] lg:w-60 py-0 lg:pb-20 z-30  overflow-hidden ">
          <motion.div
            key={pathname + "button"}
            variants={enterVariant}
            viewport={{ once: true }}
            initial="initial"
            whileInView="animate"
            className=" h-full flex flex-col items-end gap-2 border-l-2 border-accent pl-5 pt-5 "
          >
            <a
              href="https://github.com/RizaHariati"
              target="_blank"
              rel="noopener noreferrer"
              key="btn-1"
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
                  className=" object-center object-cover h-full w-auto"
                />
              </div>
              <h3 className="nav-btn-txt"> Github</h3>
            </a>
            <a
              href="https://id.linkedin.com/in/riza-hariati-2021"
              target="_blank"
              rel="noopener noreferrer"
              key="btn-2"
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
              <h3 className="nav-btn-txt"> Linkedin</h3>
            </a>
            <button
              onClick={() => router.push("/about")}
              key="btn-3"
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
              <h3 className="nav-btn-txt"> About</h3>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
