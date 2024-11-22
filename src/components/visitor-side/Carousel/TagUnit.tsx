import React from "react";

export default function TagUnit({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-violet3 px-2 rounded-full mr-2 inline-block mt-2 text-[18px] text-violet3">
      {children}
    </span>
  );
}
