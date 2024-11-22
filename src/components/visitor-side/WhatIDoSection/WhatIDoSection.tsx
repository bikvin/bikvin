import React from "react";
import DoItem from "./DoItem";

export default function WhatIDoSection() {
  return (
    <section className="relative w-full md:min-h-screen\">
      <div className="relative flex gap-10 flex-col md:flex-row justify-between md:max-w-screen-lg mx-auto"></div>

      <div className="flex flex-col md:flex-row py-20 md:py-40 md:max-w-screen-lg mx-auto">
        <div className="w-full md:w-[40%] flex flex-col justify-center px-8 pb-8 md:p-0 md:px-8">
          <h1 className="section-header text-left">What I do.</h1>
          <p className="text-[18px] mt-4 leading-[150%]">
            These are the things that I can help with
          </p>
        </div>
        <div className="w-full md:w-[60%]  px-8 md:px-0">
          <ul className="flex flex-wrap gap-[24px]">
            <DoItem color="blue1">Web Design</DoItem>
            <DoItem color="violet1">
              Converting existing designs to responsive webpages with React
            </DoItem>
            <DoItem color="violet2">Fullstack websites with NextJS</DoItem>
            <DoItem color="green1">Responsive layouts with HTML and CSS</DoItem>
            <DoItem color="green1">Landing pages</DoItem>
            <DoItem color="green2">E-commerce websites</DoItem>
          </ul>
        </div>
      </div>
    </section>
  );
}
