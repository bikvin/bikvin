import type { Metadata } from "next";
import { playfairDisplay, libreBaskerville } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ivan - Frontend Developer. React, NextJs.",
  description: "Ivan - Frontend Developer. React, NextJs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${playfairDisplay.variable} ${libreBaskerville.variable}`}
    >
      <body className={` font-playfair bg-bodybackground overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
