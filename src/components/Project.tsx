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
    <article className="relative w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 dark:border-light dark:bg-dark">
      <div className="absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light" />
      <Link
        href={props.link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
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
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {props.type}
        </span>
        <Link
          href={props.link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">
            {props.title}
          </h2>
        </Link>
        <p className="my-2 font-medium">{props.summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={props.github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={props.link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
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
    <article className="w-full h-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:border-light dark:bg-dark">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
      <Link
        href={props.link}
        target="_blank"
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
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {props.type}
        </span>
        <Link
          href={props.link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">
            {props.title}
          </h2>
        </Link>
        <p className="my-2 font-medium">{props.summary}</p>
        <div className="w-full mt-2 flex items-center justify-end">
          <Link
            href={props.link}
            target="_blank"
            className="rounded-lg bg-dark text-light p-2 px-6 font-semibold mr-3 dark:bg-light dark:text-dark"
          >
            <h2>Visit</h2>
          </Link>
          <Link href={props.github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export { FeaturedProject, Project };