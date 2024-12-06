import React from "react";
import TopMenu from "@/components/visitor-side/TopMenu/TopMenu";
import Carousel from "@/components/visitor-side/Carousel/Carousel";
import Footer from "@/components/visitor-side/Footer/Footer";
import { db } from "@/db";
import TagUnit from "@/components/common/TagUnit";
import Link from "next/link";

export async function generateStaticParams() {
  const items = await db.portfolioItem.findMany();

  return items.map((item) => ({
    itemId: item.id,
  }));
}

export default async function PortfolioItemPage({
  params,
}: {
  params: { itemId: string };
}) {
  const { itemId } = params;

  const portfolioItem = await db.portfolioItem.findUnique({
    where: { id: itemId },
    include: {
      features: true, // Include related features
      technologiesUsed: true,
      roles: true,
    },
  });

  if (!portfolioItem) {
    throw new Error("Item not found");
  }

  type ImageData = { name: string; id: string }[];

  const imageData = JSON.parse(portfolioItem.fileNamesArr) as ImageData;

  // console.log(itemId);
  return (
    <>
      <section className="relative w-full md:min-h-screen min-h-[130vh] bg-green2 pb-40">
        <TopMenu />
        <div className="z-[1] absolute right-0 top-0 bg-[url('/img//bg/bg-white.svg')] w-[30vw] h-[50vh] bg-cover"></div>
        <div className="z-[1] absolute right-0 bottom-0 bg-[url('/img//bg/bg-purple2.svg')] w-[30vw] h-[20vh] bg-cover"></div>
        <Carousel imageData={imageData} />
        <div className="max-w-[90vh] mx-auto mt-10 ">
          <h2 className="text-[24px]">{portfolioItem.heading}</h2>

          {portfolioItem.technologiesUsed && (
            <>
              <h4 className="text-[18px] mt-4">Technologies used:</h4>
              <p>
                {portfolioItem.technologiesUsed.map((technology) => {
                  return (
                    <TagUnit key={technology.id}>{technology.name}</TagUnit>
                  );
                })}
              </p>
            </>
          )}

          {portfolioItem.features && (
            <>
              <h4 className="text-[18px] mt-4">Features:</h4>
              <p>
                {portfolioItem.features.map((feature) => {
                  return <TagUnit key={feature.id}>{feature.name}</TagUnit>;
                })}
              </p>
            </>
          )}

          {portfolioItem.roles && (
            <>
              <h4 className="text-[18px] mt-4">My role:</h4>
              <p>
                {portfolioItem.roles.map((role) => {
                  return <TagUnit key={role.id}>{role.name}</TagUnit>;
                })}
              </p>
            </>
          )}

          {portfolioItem.liveLink && (
            <>
              <h4 className="text-[18px] mt-4">Live Link:</h4>
              <p className="text-[18px] text-violet3 hover:underline">
                <Link href={portfolioItem.liveLink || ""}>
                  {portfolioItem.liveLink}
                </Link>
              </p>
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
