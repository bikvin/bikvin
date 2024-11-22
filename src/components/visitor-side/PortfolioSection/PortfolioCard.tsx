import Link from "next/link";
import React from "react";

export default function PortfolioCard({
  header,
  imageLink,
}: {
  header: string;
  imageLink: string;
}) {
  return (
    <div className="relative bg-white w-[100%] md:w-[30%] aspect-[10/17] rounded-[11px] shadow-[4px_4px_4px_0_rgba(0,0,0,0.25)] ">
      <div
        style={{ backgroundImage: `url(${imageLink})` }}
        className="h-[70%] bg-rose-400 bg-top bg-cover rounded-t-[11px] mb-4"
      ></div>
      <h3 className="text-gray6 text-[20px] px-4">{header}</h3>
      <div>
        <Link
          href=""
          className="text-orange1 absolute bottom-0 left-0 pl-4 pb-4 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
