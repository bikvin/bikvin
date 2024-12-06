import SinglePortfolioEditCard from "./singlePortfolioEditCard";
// import classes from "./accordionItemsEdit.module.css";
import { db } from "@/db";

export default async function ServiceEditList() {
  const itemsData = await db.portfolioItem.findMany({
    orderBy: [
      { order: "asc" }, // Primary sort by 'order' column
      { createdAt: "desc" }, // Secondary sort by 'createdAt' column
    ],
  });

  return (
    <div className={`mt-10`}>
      {itemsData.map((item) => (
        <SinglePortfolioEditCard
          key={item.id}
          id={item.id}
          heading={item.heading}
          fileNamesStr={item.fileNamesArr}
        />
      ))}
    </div>
  );
}
