"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3"; // Import D3 for rendering
import cloud from "d3-cloud"; // Import d3-cloud for layout

// Define the interface for the tag data
interface Tag {
  text: string; // Ensure 'text' is always a string
  weight: number; // Font size
}

interface SizedTag {
  text: string; // Ensure 'text' is always a string
  size: number; // Font size
}

const data: Tag[] = [
  { text: "JavaScript", weight: 2.8 },
  { text: "TypeScript", weight: 2.8 },
  { text: "Next.js", weight: 2.8 },
  { text: "React", weight: 2 },
  { text: "Tailwind", weight: 2.2 },
  { text: "CSS", weight: 1 },
  { text: "HTML", weight: 1.6 },
  { text: "Node.js", weight: 1.4 },
  { text: "Auth.js", weight: 1.3 },
  { text: "Shadcn/ui", weight: 1.3 },
  { text: "AWS S3", weight: 1.2 },
  { text: "Git", weight: 1.3 },
  { text: "Shadcn/ui", weight: 1.2 },
  { text: "Framer Motion", weight: 1.3 },
  { text: "Zod", weight: 1.2 },
  { text: "PostgreSQL", weight: 1.2 },
  { text: "Prisma", weight: 1.2 },
  { text: "Phaser", weight: 1 },
  { text: "Webpack", weight: 1 },
];

// const scaleFactor = window.innerWidth > 768 ? 25 : 20;

// const sizedData = data.map((item) => {
//   return { text: item.text, size: item.weight * scaleFactor };
// });

const colorPalette = [
  "#8668BA",
  "#83BFB9",
  "#A794C4",
  "#9077AB",
  "#F68327",
  "#8668BA",
  "#B8E1D6",
  "#5B736A",
  "#AD9AE0",
];

const D3TagCloud: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const width = Math.min(800, screenWidth * 0.9); // Scale down for smaller screens
    const height = width * 0.7; // Keep a square aspect ratio

    const scaleFactor = window.innerWidth > 768 ? 25 : 15;
    const sizedData = data.map((item) => {
      return { text: item.text, size: item.weight * scaleFactor };
    });

    const layout = cloud<SizedTag>()
      .size([width, height])
      .words(sizedData.map((d) => ({ text: d.text, size: d.size })))
      .padding(5)
      .rotate(() => (Math.random() > 0.7 ? 90 : 0))
      .fontSize((d) => d.size)
      .on("end", draw);

    layout.start();

    function draw(words: cloud.Word[]) {
      const svgElement = svgRef.current;
      if (!svgElement) return;

      const svg = d3.select(svgElement);
      svg.selectAll("*").remove(); // Clear previous elements

      svg
        .attr("width", layout.size()[0])
        .attr("height", layout.size()[1])
        .append("g")
        .attr(
          "transform",
          `translate(${layout.size()[0] / 2}, ${layout.size()[1] / 2})`
        )
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", (d) => `${d.size}px`)
        .style(
          "fill",
          () => colorPalette[Math.floor(Math.random() * colorPalette.length)]
        )
        .attr("text-anchor", "middle")
        .attr(
          "transform",
          (d) => `translate(${d.x}, ${d.y}) rotate(${d.rotate})`
        )
        .text((d) => d.text!); // Use `!` to assert that `d.text` is always defined
    }
  }, []);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default D3TagCloud;
