"use client";
import LinkButton from "@/components/common/LinkButton";
import TopMenu from "@/components/visitor-side/TopMenu/TopMenu";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full md:min-h-screen min-h-[130vh]">
      <div className="z-[-1] absolute right-0 top-0 w-full bg-cover md:bg-right bg-[right_-300px_top] min-h-[100%] md:min-h-screen bg-[url('/img//bg/bg-green.svg')]"></div>
      <div className="z-[-2] absolute right-0 md:bottom-0 top-0 w-full bg-no-repeat bg-right-bottom min-h-[100%] md:min-h-full bg-[url('/img//bg/bg-purple.svg')]"></div>
      <TopMenu />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "backInOut",
        }}
        className="relative flex gap-10 flex-col md:flex-row justify-between md:max-w-screen-lg mx-auto"
      >
        <div className="flex flex-col-reverse md:flex-row  gap-20 md:h-[calc(100vh-68px)]">
          <div className="flex justify-center flex-col flex-1 gap-10 px-8 pb-8 md:p-0 md:pl-8">
            <h1 className="text-[40px] font-baskerville font-bold leading-[113.5%]">
              Hi, I’m Ivan — frontend developer focused on React and NextJs.
            </h1>
            <p className="text-gray4 leading-[195.2%] text-[18px]">
              I build fast, user-friendly interfaces with a focus on modern,
              responsive design. I’m passionate about creating seamless
              experiences and bringing ideas to life on the web.
            </p>
            <div className="text-center md:text-left">
              <LinkButton href="" sizeRatio={1.2}>
                My portfolio
              </LinkButton>
            </div>
          </div>
          <div className="flex items-center md:justify-center flex-1 pl-8 pt-[50px] md:p-0 ">
            <div className="w-[60vw] h-[79vw] md:w-[392px] md:h-[522px] bg-[url('/img/photo/photo.jpg')] rounded-[12px] bg-cover bg-left-top shadow-photo"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
