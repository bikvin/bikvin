import Link from "next/link";
import React, { CSSProperties } from "react";

export default function LinkButton({
  children,
  href,
  sizeRatio = 1,
}: {
  children: React.ReactNode;
  href: string;
  sizeRatio?: number;
}) {
  return (
    <Link
      href={href}
      className={`bg-black1 text-gray2 rounded-full text-[calc(1.2em*var(--size-ratio))] px-[calc(20px*var(--size-ratio))] py-[calc(10px*var(--size-ratio))] hover:bg-gray3  transition-colors duration-500 ease-in-out `}
      style={{ "--size-ratio": sizeRatio } as CSSProperties}
    >
      {children}
    </Link>
  );
}
