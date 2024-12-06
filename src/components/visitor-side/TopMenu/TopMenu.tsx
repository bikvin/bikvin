"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import LinkButton from "@/components/common/LinkButton";

export default function TopMenu() {
  const [maxHeight, setMaxHeight] = useState<string>("0px");
  const [isMobile, setIsMobile] = useState<boolean>(false); // Track if the view is mobile
  const [isMounted, setIsMounted] = useState(false);

  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setIsMounted(true);

    // Check the window size on the client-side only
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener to track window resizing
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const clickHandler = () => {
    if (ulRef.current) {
      // If the menu is closed, set max-height to the full scrollHeight
      if (maxHeight === "0px") {
        setMaxHeight(`${ulRef.current.scrollHeight}px`);
      } else {
        // Collapse the menu
        setMaxHeight("0px");
      }
    }
  };

  return (
    <header className="relative  px-8">
      <div className="relative z-[2] flex flex-col md:flex-row justify-between max-w-screen-lg mx-auto">
        <div>
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src={"/img/logo/logo.png"}
              width={30}
              height={30}
              alt="Logo"
            />
            <h3 className="font-baskerville md:text-[1.5em] font-bold my-4">
              Bikvin
            </h3>
          </Link>
        </div>
        <RxHamburgerMenu
          onClick={clickHandler}
          className="absolute top-4 right-4 w-8 h-8 md:hidden"
        />
        <ul
          ref={ulRef}
          className={`overflow-hidden transition-[max-height] duration-500 ease-in-out md:flex flex-col md:flex-row justify-center md:justify-end items-center gap-4 tracking-wide max-h-0 md:max-h-full hover:text-slate-400`}
          style={{ maxHeight: isMobile && isMounted ? maxHeight : undefined }} // Only apply maxHeight on mobile
        >
          <li className="text-center pb-2 md:pb-0   hover:text-black transition-colors ease-in delay-200 text-[1.2em] text-gray1">
            <Link href="/#whatIdo">Services</Link>
          </li>
          <li className="text-center pb-2 md:pb-0  hover:text-black transition-colors ease-in delay-200  text-[1.2em] text-gray1">
            <Link href="/#technologies">Technologies</Link>
          </li>

          <li className="text-center pb-2 md:pb-0  hover:text-black transition-colors ease-in delay-200   text-[1.2em] text-gray1">
            <Link href="/#contacts">Contact</Link>
          </li>

          <li className="text-center md:text-left mt-4 mb-8 md:m-0">
            <LinkButton href="/#portfolio">Portfolio</LinkButton>
          </li>
        </ul>
      </div>
    </header>
  );
}
