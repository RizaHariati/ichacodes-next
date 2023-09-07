import Image from "next/image";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="fixed w-full z-10">
      <div className=" w-full max-w-6xl h-16 mx-auto p-2 relative">
        <div className="flex items-center gap-2 ">
          <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm ">
            <Image
              loading="lazy"
              width={50}
              height={50}
              alt="main logo"
              src="/images/icons/icon192.png"
              rel="preload"
              placeholder="empty"
            />
          </div>
          <p className=" text-textMed font-poppins font-bold text-[32px] ">
            Icha<span className="text-accent">Codes</span>
          </p>
        </div>
        <div className="absolute  h-[400px] w-44 right-0 flex flex-col items-end gap-2 border-l-2 border-accent pt-5 ">
          <button className=" bg-white flex items-center gap-2 w-40 justify-between pr-2 rounded-sm shadow-sm">
            <div className="h-10 w-10 overflow-hidden rounded-sm">
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
          </button>
          <button className=" bg-white flex items-center gap-2 w-40 justify-between pr-2 rounded-sm shadow-sm">
            <div className="h-10 w-10 overflow-hidden rounded-sm">
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
          </button>
          <button className=" bg-white flex items-center gap-2 w-40 justify-between pr-2 rounded-sm shadow-sm">
            <div className="h-10 w-10 overflow-hidden rounded-sm">
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
