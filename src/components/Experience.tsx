"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import LiIcon from "./LiIcon";

type Props = {};

const Details = ({
  position = "",
  company = "",
  companyLink = "",
  time = "",
  address = "",
  work = "",
}: {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}) => {
  const ref = React.useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = (props: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Full-stack Developer Intern"
            company="Memopresso Inc."
            companyLink="https://www.memopresso.com/"
            time="2022-2023"
            address="Taipei, Taiwan"
            work="As a Front-End Developer at Memopresso Inc., I successfully designed and built a stickers and frame management page for artists using ReactJS. 
            Additionally, I collaborated with a senior developer to optimize website performance, resulting in an average of 10s reduction in page loading time and improved speed scores by 20% for a website with over 2.5k average users. 
            Furthermore, I researched and implemented the 'filter function' for the Photo Booth application, enhancing its functionality and user experience."
          />
          <Details
            position="Software Developer Intern"
            company="Broton Tech Co."
            companyLink="https://brotontech.com/"
            time="2020-2022"
            address="Taipei, Taiwan"
            work="As a member of Broton Tech Co., I utilized my expertise in machine learning and web programming to design and build a sign verification project from scratch. 
            Collaborating with senior developers, I developed an end-to-end solution that incorporated cutting-edge ML techniques, ensuring the accuracy and reliability of signature authentication. 
            My contributions demonstrate the successful application of ML knowledge and web programming skills to create innovative solutions for complex challenges."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
