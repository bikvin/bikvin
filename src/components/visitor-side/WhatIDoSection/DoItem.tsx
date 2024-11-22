import React from "react";

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

  return (
    <li
      className={`${
        colorClasses[color] || "bg-gray-500"
      } w-2/3 md:w-[calc(33%-24px)] aspect-square p-4 rounded-[13px] text-gray5 flex items-center justify-center text-[20px] odd:mr-auto even:ml-auto md:!mr-0 md:!ml-0`}
    >
      {children}
    </li>
  );
}
