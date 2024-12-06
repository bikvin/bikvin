"use client";
import React from "react";
import D3TagCloud from "./d3TagCloud";
import { motion } from "framer-motion";

export default function TechnologiesSection() {
  const ANIMATION_DISTANCE_X = 0;
  const ANIMATION_DISTANCE_Y = 500;
  return (
    <section id="technologies">
      <div className="py-20 md:py-20 md:max-w-screen-lg mx-auto px-8">
        <h1 className="section-header  mb-16">Technologies I use.</h1>

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
          viewport={{ once: true, amount: 0.7 }}
          whileHover={{
            scale: 1.2,
            // rotate: (Math.random() - 0.5) * 5,
            transition: {
              type: "spring",
              bounce: 0.7,
            },
          }}
          className="flex justify-center items-center"
        >
          <D3TagCloud />
        </motion.div>
      </div>
    </section>
  );
}
