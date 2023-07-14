"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";
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

const CustomMobileLink = ({
  href,
  title,
  className = "",
  toggle,
}: {
  href: string;
  title: string;
  className?: string;
  toggle: () => void;
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group text-light dark:text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-light absolute left-0 -bottom-1 dark:bg-dark
        group-hover:w-full transition-[width] duration-300 ease-in-out ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = (props: Props) => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen((pre) => !pre);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between 
      text-dark bg-light dark:bg-dark dark:text-light relative 
      z-16 lg:px-16 sm:px-8"
    >
      <button
        className="hidden lg:flex flex-col justify-center items-center h-8 w-8"
        aria-label="Toggle Menu"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
          }`}
        ></span>
      </button>
      {/* desktop design */}
      <div className="w-full flex justify-between items-center lg:hidden">
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
            aria-label="View my LinkedIn profile"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/Fiona1121"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
            aria-label="View my GitHub profile"
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
            aria-label="Toggle Theme"
          >
            {mode === "dark" ? (
              <SunIcon className={`fill-dark`} />
            ) : (
              <MoonIcon className={`fill-dark`} />
            )}
          </button>
        </nav>
      </div>
      {/* mobile design */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
          bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center gap-4">
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
            <CustomMobileLink
              href="/about"
              title="About"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap gap-4 mt-4">
            <motion.a
              href="https://www.linkedin.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
              aria-label="View my LinkedIn profile"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/Fiona1121"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 p-px bg-light border border-solid border-light rounded-md dark:bg-dark dark:border-dark"
              aria-label="View my GitHub profile"
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
              aria-label="Toggle Theme"
            >
              {mode === "dark" ? (
                <SunIcon className={`fill-dark`} />
              ) : (
                <MoonIcon className={`fill-dark`} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-1/2 top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
