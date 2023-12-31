import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

type Props = {};

const HireMe = (props: Props) => {
  return (
    <div
      className="fixed right-4 bottom-4 flex items-center justify-center overflow-hidden 
      opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out
      md:right-0 md:left-auto md:top-0 md:bottom-auto"
    >
      <div className="w-48 h-auto flex items-center justify-center relative md:w-32">
        <CircularText
          className={`fill-dark animate-spin-slow dark:fill-light`}
        />
        <Link
          href="mailto:fionafdjk123@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          bg-dark text-light text-center shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold
          hover:bg-light hover:text-dark transition-all duration-300 ease-in-out
          dark:bg-light dark:text-dark dark:border-light dark:hover:bg-dark dark:hover:text-light
          md:w-16 md:h-16 md:text-sm md:font-medium"
          aria-label="Send me email"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
