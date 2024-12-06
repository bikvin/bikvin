import React from "react";
import EmblaCarousel from "@/components/visitor-side/Carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

export default function Carousel({
  imageData,
}: {
  imageData: { name: string; id: string }[];
}) {
  // console.log("imageData", imageData);

  // const projectsData = [
  //   { id: "1", name: "1.png" },
  //   { id: "2", name: "2.png" },
  //   { id: "3", name: "3.png" },
  //   { id: "4", name: "4.png" },
  //   { id: "5", name: "5.png" },
  //   { id: "6", name: "6.png" },
  //   { id: "8", name: "8.png" },
  //   { id: "9", name: "full.png" },
  // ];

  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <div className="z-[2] relative mt-10  px-4 md:px-0">
      <EmblaCarousel slides={imageData} options={OPTIONS} />
    </div>
  );
}
