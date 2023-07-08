"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

type Props = {};

const CustomLink = ({
  href,
  title,
  className = "",
}: {
  href: string;
  title: string;
  className?: string;
}) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-1 group-hover:w-full transition-[width] duration-300 ease-in-out dark:bg-light ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = (props: Props) => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between text-dark bg-light dark:bg-dark dark:text-light">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="mx-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap gap-5">
        <motion.a
          href="https://www.linkedin.com/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://github.com/Fiona1121"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
        >
          <GithubIcon />
        </motion.a>
        <button
          onClick={() =>
            setMode((pre: "light" | "dark") =>
              pre === "light" ? "dark" : "light"
            )
          }
          className="flex items-center justify-center rounded-full bg-dark text-light dark:bg-light dark:text-dark w-6 h-6 p-1"
        >
          {mode === "dark" ? (
            <SunIcon className={`fill-dark`} />
          ) : (
            <MoonIcon className={`fill-dark`} />
          )}
        </button>
      </nav>
      <div className="absolute left-1/2 top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
