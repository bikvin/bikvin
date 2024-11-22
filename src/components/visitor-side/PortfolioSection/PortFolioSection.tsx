import React from "react";
import PortfolioCard from "./PortfolioCard";

export default function PortFolioSection() {
  return (
    <section className="bg-violet3 text-white">
      <div className="py-20 md:py-20 md:max-w-screen-lg mx-auto px-8">
        <h1 className="section-header mb-16">My Portfolio.</h1>
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-8">
          <PortfolioCard
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
          />
        </div>
      </div>
    </section>
  );
}
