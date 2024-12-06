"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function PortfolioCard({
  header,
  imageLink,
  portfolioItemlink,
}: {
  header: string;
  imageLink: string;
  portfolioItemlink: string;
}) {
  const ANIMATION_DISTANCE_X = 0;
  const ANIMATION_DISTANCE_Y = 200;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: (Math.random() - 0.5) * ANIMATION_DISTANCE_X,
        y: (Math.random() - 0.5) * ANIMATION_DISTANCE_Y,
        rotate: (Math.random() - 0.5) * 90 * 2,
        scale: 1,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeIn",
        type: "spring",
        stiffness: 50,
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        scale: 1.05,
        // rotate: (Math.random() - 0.5) * 5,
        transition: {
          type: "spring",
          bounce: 0.7,
        },
      }}
      className="relative bg-white aspect-[10/17] rounded-[11px] shadow-[4px_4px_4px_0_rgba(0,0,0,0.25)] "
    >
      <div
        style={{ backgroundImage: `url(${imageLink})` }}
        className="h-[70%] bg-rose-400 bg-top bg-cover rounded-t-[11px] mb-4"
      ></div>
      <h3 className="text-gray6 text-[20px] px-4">{header}</h3>
      <div>
        <Link
          href={portfolioItemlink}
          className="text-orange1 absolute bottom-0 left-0 pl-4 pb-4 hover:underline"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
