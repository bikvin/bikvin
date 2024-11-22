import React from "react";
import TopMenu from "@/components/visitor-side/TopMenu/TopMenu";
import Carousel from "@/components/visitor-side/Carousel/Carousel";
import Footer from "@/components/visitor-side/Footer/Footer";

export default function PortfolioItemPage({
  params,
}: {
  params: { itemId: string };
}) {
  const { itemId } = params;
  return (
    <>
      <section className="relative w-full md:min-h-screen min-h-[130vh] bg-green2">
        <TopMenu />
        <div className="z-[1] absolute right-0 top-0 bg-[url('/img//bg/bg-white.svg')] w-[30vw] h-[50vh] bg-cover"></div>
        <div className="z-[1] absolute right-0 bottom-0 bg-[url('/img//bg/bg-purple2.svg')] w-[30vw] h-[20vh] bg-cover"></div>
        <Carousel />
      </section>
      <Footer />
    </>
  );
}
