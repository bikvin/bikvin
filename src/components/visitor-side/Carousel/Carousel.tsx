import React from "react";
import EmblaCarousel from "@/components/visitor-side/Carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";
import TagUnit from "./TagUnit";

export default function Carousel() {
  const projectsData = [
    { id: "1", name: "1.png" },
    { id: "2", name: "2.png" },
    { id: "3", name: "3.png" },
    { id: "4", name: "4.png" },
    { id: "5", name: "5.png" },
    { id: "6", name: "6.png" },
    { id: "8", name: "8.png" },
    { id: "9", name: "full.png" },
  ];

  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <div className="z-[2] relative mt-10 pb-40 px-4 md:px-0">
      <EmblaCarousel slides={projectsData} options={OPTIONS} />
      <div className="max-w-[90vh] mx-auto mt-10 ">
        <h2 className="text-[24px]">Website for a psychologist</h2>
        <h4 className="text-[18px] mt-4">Technologies used:</h4>
        <p>
          <TagUnit>NextJs</TagUnit>
          <TagUnit>React</TagUnit>
          <TagUnit>Framer Motion</TagUnit>
          <TagUnit>React Quill</TagUnit>
          <TagUnit>Next Auth</TagUnit>
          <TagUnit>Typescript</TagUnit>
          <TagUnit>Prisma</TagUnit>
          <TagUnit>Postgresql</TagUnit>
        </p>
        <h4 className="text-[18px] mt-4">Features:</h4>
        <p className="text-[20px] text-violet3">
          <TagUnit>login</TagUnit>
          <TagUnit>password recovery</TagUnit>
          <TagUnit>parallax effect</TagUnit>
          <TagUnit>text editor</TagUnit>
          <TagUnit>image upload</TagUnit>
        </p>
        <h4 className="text-[18px] mt-4">My role:</h4>
        <p>
          <TagUnit>web design</TagUnit>
          <TagUnit>layout</TagUnit>
          <TagUnit>coding</TagUnit>
        </p>
        <h4 className="text-[18px] mt-4">Live Link:</h4>
        <p className="text-[18px] text-violet3 hover:underline">
          <Link href="https://kuzmina-psy.ru">https://kuzmina-psy.ru</Link>
        </p>
      </div>
    </div>
  );
}
