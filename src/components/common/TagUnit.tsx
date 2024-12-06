"use client";
import React from "react";

export default function TagUnit({
  children,
  active,
  link,
  name,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  link?: boolean;
  name?: string;
  onClick?: (name: string | undefined) => void;
}) {
  return (
    <span
      className={`${active ? "bg-violet3 text-white" : ""}
        ${link ? "cursor-pointer" : ""}
       border border-violet3 px-2 rounded-full mr-2 inline-block mt-2 text-[18px] text-violet3`}
      onClick={() => {
        if (onClick) {
          onClick(name);
        }
      }}
    >
      {children}
    </span>
  );
}
