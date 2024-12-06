"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DoItem({
  children,
  color,
}: {
  children?: React.ReactNode;
  color: string;
}) {
  const colorClasses: { [key: string]: string } = {
    blue1: "bg-blue1",
    violet1: "bg-violet1",
    violet2: "bg-violet2",
    green1: "bg-green1",
    green2: "bg-green2",
  };

  const ANIMATION_DISTANCE_X = 0;
  const ANIMATION_DISTANCE_Y = 500;

  return (
    <motion.li
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
      viewport={{ once: true, amount: 0.6 }}
      whileHover={{
        scale: 1.1,
        rotate: (Math.random() - 0.5) * 10,
        transition: {
          type: "spring",
          bounce: 0.7,
        },
      }}
      className={`${
        colorClasses[color] || "bg-gray-500"
      } w-2/3 md:w-[calc(33%-24px)] aspect-square p-4 rounded-[13px] text-gray5 flex items-center justify-center text-[20px] odd:mr-auto even:ml-auto md:!mr-0 md:!ml-0 shadow-[4px_4px_4px_0_rgba(0,0,0,0.25)]`}
    >
      {children}
    </motion.li>
  );
}
