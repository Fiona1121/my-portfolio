"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import * as React from "react";
import { GithubIcon } from "./Icons";

type ProjectProps = {
  type?: string;
  title: string;
  summary?: string;
  image: StaticImageData;
  link: string;
  github: string;
};

const FramerImage = motion(Image);

const FeaturedProject = (props: ProjectProps) => {
  return (
    <article
      className="relative w-full flex items-center justify-start rounded-3xl rounded-br-2xl 
      border border-solid border-dark bg-light shadow-2xl p-12 dark:border-light dark:bg-dark
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <Link
        href={props.link}
        target="_blank"
        aria-label="Visit project"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={props.image}
          alt={props.title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="
          (max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw
          "
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {props.type}
        </span>
        <Link
          href={props.link}
          target="_blank"
          aria-label="Visit project"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-2xl">
            {props.title}
          </h2>
        </Link>
        <p className="my-2 font-medium sm:text-sm">{props.summary}</p>
        <div className="mt-2 flex items-center">
          <Link
            href={props.github}
            target="_blank"
            aria-label="Visit project Github page"
            className="w-10 md:w-9"
          >
            <GithubIcon />
          </Link>
          <Link
            href={props.link}
            target="_blank"
            aria-label="Visit project"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark md:text-base md:px-5 sm:ml-3 sm:px-4 sm:text-sm"
          >
            <h2>Visit Project</h2>
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = (props: ProjectProps) => {
  return (
    <article
      className="w-full h-full flex flex-col items-center justify-start rounded-2xl 
      border border-solid border-dark bg-light shadow-2xl p-12 relative dark:border-light dark:bg-dark 
      lg:p-8 xs:p-4"
    >
      <Link
        href={props.link}
        target="_blank"
        aria-label="Visit project"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={props.image}
          alt={props.title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="
          (max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw
          "
        />
      </Link>
      <div className="w-full grow flex flex-col items-start justify-between mt-4">
        <div>
          <Link
            href={props.link}
            target="_blank"
            aria-label="Visit project"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-1.5 w-full text-left text-3xl font-bold lg:text-2xl">
              {props.title}
            </h2>
          </Link>
          <p className="my-2 font-medium sm:text-sm">{props.summary}</p>
        </div>
        <div className="mt-2 flex items-center">
          <Link
            href={props.github}
            target="_blank"
            aria-label="Visit project Github page"
            className="w-10 md:w-9"
          >
            <GithubIcon />
          </Link>
          <Link
            href={props.link}
            target="_blank"
            aria-label="Visit project"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark md:text-base md:px-5 sm:ml-3 sm:px-4 sm:text-sm"
          >
            <h2>Visit Project</h2>
          </Link>
        </div>
      </div>
    </article>
  );
};

export { FeaturedProject, Project };
