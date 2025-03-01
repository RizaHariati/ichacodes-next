"use client";
import React from "react";

import dataskill from "../../data/dataskill.json";
import Image from "next/image";

type Props = {};

const SkillSection = (props: Props) => {
  return (
    <section
      id="skillSection"
      className="panel-width h-fit pb-5 bg-fillLitSolid flex flex-col  px-5 snap-start mx-auto rounded-b-md lg:rounded-b-lg "
    >
      <div className="h-full w-full panel-width mx-auto  rounded-lg  p-0 md:p-0 ">
        <div className=" h-full w-full flex flex-col items-center justify-start gap-2">
          {dataskill.map((item) => {
            if (item.id === "skill-05") {
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-3 2xl:grid-cols-9 h-fit w-full bg-fillLit bg-opacity-30 rounded-md gap-2"
                >
                  <div className="w-full h-full border-b border-white p-2 col-span-3 2xl:border-b-0 2xl:border-r">
                    <p className="capitalize font-oswald">{item.category}</p>
                  </div>
                  <div className=" col-span-7 w-full items-center  p-5">
                    <p>
                      Write short articles, and do presentations using Canva and
                      PowerPoint. Speak and write in Bahasa Indonesia, English,
                      and Mandarin. Type 55 words per minute in English. 71 in
                      Bahasa Indonesia. Also, I can sketch and design houses and
                      offices.
                    </p>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-2 2xl:grid-cols-9 h-fit w-full bg-fillLit bg-opacity-30 rounded-md gap-2 "
                >
                  <div className="w-full h-full border-b border-white p-2 col-span-2 2xl:border-b-0 2xl:border-r">
                    <h2 className="capitalize  font-oswald">{item.category}</h2>
                  </div>
                  <div className="col-span-2 2xl:col-span-7 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 w-full items-center p-2  ">
                    {item.skills.map((skillitem) => {
                      return (
                        <div
                          className="flex flex-col items-center justify-center px-5 gap-1 p-2"
                          key={skillitem["id-cat"]}
                        >
                          <div
                            key={skillitem["id-cat"]}
                            className=" relative w-12 h-12 group "
                          >
                            <div className="absolute w-12 group-hover:w-28 aspect-square rounded-full overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer bg-black transition-all z-10 hover:z-20 ">
                              <Image
                                rel="preload"
                                placeholder="empty"
                                src={`/images/skills/${skillitem.img}.jpg`}
                                width={50}
                                height={50}
                                className="h-full w-auto mx-auto object-covers object-center bg-white group-hover:opacity-20  transition-all"
                                alt={skillitem.img}
                                loading="lazy"
                              />
                            </div>
                            <div className="absolute text-center  group-hover:block opacity-0 group-hover:opacity-100  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white font-poppins transition-all cursor-pointer leading-5   delay-200 z-40">
                              <p className="capitalized text-sm opacity-0 group-hover:opacity-100 transition-all">
                                {skillitem.title}
                              </p>
                              <p className="font-thin text-xs">used :</p>
                              <p className="font-thin capitalize text-sm">
                                {skillitem.frequency}
                              </p>
                            </div>
                          </div>
                          <div className="w-20 h-2 border rounded-full border-textLit">
                            <div
                              className="h-full bg-textMed"
                              style={{ width: skillitem.level }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
