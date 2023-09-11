"use client";
import React from "react";
import { BorderStraightBottom, BorderStraightTop } from "../Borders";
import dataskill from "../../data/dataskill.json";
import Image from "next/image";

type Props = {};

const SkillSection = (props: Props) => {
  return (
    <section
      id="skillSection"
      className="w-full h-screen bg-fillLit flex flex-col"
    >
      <BorderStraightTop />
      <div className="h-full w-full panel-width mx-auto bg-fillLitSolid rounded-lg overflow-hidden p-10">
        <div className=" h-full w-full flex flex-col items-center justify-start gap-2">
          {dataskill.map((item) => {
            if (item.id === "skill-05") {
              return (
                <div
                  key={item.id}
                  className="flex items-center h-24 w-full bg-fillLit bg-opacity-30 rounded-md gap-2"
                >
                  <div className="w-44 h-full border-r border-white p-2">
                    <p className="capitalize text-[25px] font-oswald">
                      {item.category}
                    </p>
                  </div>
                  <div className="flex w-full items-center  px-5">
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
                  className="flex items-center h-24 w-full bg-fillLit bg-opacity-30 rounded-md gap-2"
                >
                  <div className="w-44 h-full border-r border-white p-2">
                    <p className="capitalize text-[25px] font-oswald">
                      {item.category}
                    </p>
                  </div>
                  <div className="flex w-full items-center ">
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
                            <div className="absolute w-12 group-hover:w-24 aspect-square rounded-full overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer bg-black transition-all ">
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
                            <div className="absolute text-center  group-hover:block opacity-0 group-hover:opacity-100  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white font-poppins transition-all cursor-pointer leading-5   delay-200">
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

      <BorderStraightBottom />
    </section>
  );
};

export default SkillSection;
