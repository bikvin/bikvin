import React from "react";
import PortfolioCard from "./PortfolioCard";
import { db } from "@/db";

export default async function PortFolioSection() {
  let portfolioItems: {
    id: string;
    fileNamesArr: string;
    heading: string;
    liveLink: string | null;
    order: number | null;
    createdAt: Date;
    updatedAt: Date;
  }[];

  try {
    portfolioItems = await db.portfolioItem.findMany({
      orderBy: [
        { order: "asc" }, // Primary sort by 'order' column
        { createdAt: "desc" }, // Secondary sort by 'createdAt' column
      ],
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message); // Safe access when `error` is an `Error`
    } else {
      console.error("An unknown error occurred:", error); // Fallback for non-Error types
    }

    return <h1>Error connecting to database</h1>;
  }

  return (
    <section className="bg-violet3 text-white overflow-hidden" id="portfolio">
      <div className="py-20 md:py-20 md:max-w-screen-lg mx-auto px-8">
        <h1 className="section-header mb-16">My Portfolio.</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems &&
            portfolioItems.map((portfolioItem) => {
              const imageFileName =
                JSON.parse(portfolioItem.fileNamesArr)[0]?.name || "";

              return (
                <PortfolioCard
                  header={portfolioItem.heading}
                  imageLink={`${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_PROTOCOL}://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_LINK}/images/${imageFileName}`}
                  portfolioItemlink={`/portfolioItem/${portfolioItem.id}`}
                  key={portfolioItem.id}
                />
              );
            })}
          {/* <PortfolioCard
            header="Website for a landscape designer"
            imageLink="/img/portfolio/marina-garden-soul/avatar.png"
          />
          <PortfolioCard
            header="Website for a psychologist"
            imageLink="/img/portfolio/kuzmina-psy/avatar.png"
          />
          <PortfolioCard
            header="Website for a psychologist"
            imageLink="/img/portfolio/tatiana-grishina-psy/avatar.png"
          />
          <PortfolioCard
            header="E-commerce store for decoration materials"
            imageLink="/img/portfolio/daostone.ru/avatar.png"
          />
          <PortfolioCard
            header="Website for a trading company"
            imageLink="/img/portfolio/dao/avatar.png"
          />
          <PortfolioCard
            header="Website for a landscape designer"
            imageLink="/img/portfolio/marina-garden-soul/avatar.png"
          /> */}
        </div>
      </div>
    </section>
  );
}
