import React from "react";
import D3TagCloud from "./d3TagCloud";

export default function TechnologiesSection() {
  return (
    <section>
      <div className="py-20 md:py-20 md:max-w-screen-lg mx-auto px-8">
        <h1 className="section-header  mb-16">Technologies I use.</h1>

        <div className="flex justify-center items-center">
          <D3TagCloud />
        </div>
      </div>
    </section>
  );
}
