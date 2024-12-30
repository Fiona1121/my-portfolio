"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import LiIcon from "./LiIcon";

type Props = {};

const Details = ({
  type = "",
  time = "",
  place = "",
  courses = [],
  achievements = [],
}: {
  type: string;
  time: string;
  place: string;
  courses: string[];
  achievements: string[];
}) => {
  const ref = React.useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between  md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl  md:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm underline underline-offset-2">
          Relevant courses:
        </p>
        <ul className="list-disc list-inside md:text-sm">
          {courses.map((course, i) => (
            <li key={`course-${i}`}>{course}</li>
          ))}
        </ul>
        <p className="font-medium w-full md:text-sm underline underline-offset-2">
          Achievements:
        </p>
        <ul className="list-disc list-inside md:text-sm">
          {achievements.map((achievement, i) => (
            <li key={`achievement-${i}`}>{achievement}</li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Education = (props: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-7xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light  md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Masters of Technology Innovation - Robotic"
            time="2024-2026"
            place="University of Washington"
            courses={[
              "Fabrication and Physical Prototyping",
              "Design Thinking",
              "User Research & Evaluation",
              "Capstone Project",
              "Programming for Digital & Phyical User Interfaces",
            ]}
            achievements={[]}
          />
          <Details
            type="Bachelor of Electrical Engineering"
            time="2019-2024"
            place="National Taiwan University"
            courses={[
              "Computer Programming: Python",
              "Web Programming",
              "Data Structure",
              "Algorithms",
              "Database Management System",
              "Human Computer Interaction",
              "Software Engineering",
            ]}
            achievements={[
              "Minister of Information Department in Student Association of NTUEE",
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
