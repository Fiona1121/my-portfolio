"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = (props: Props) => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-60 w-full text-center mb-8 pb-4">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-21vw" y="2vw" />
        <Skill name="CSS" x="-6vw" y="-9vw" />
        <Skill name="JavaScript" x="19vw" y="6vw" />
        <Skill name="TypeScript" x="-31vw" y="-5vw" />
        <Skill name="ReactJS" x="0vw" y="10vw" />
        <Skill name="D3.js" x="-21vw" y="-15vw" />
        <Skill name="CanvasJS" x="19vw" y="-12vw" />
        <Skill name="NextJS" x="31vw" y="-5vw" />
        <Skill name="Python" x="19vw" y="-20vw" />
        <Skill name="Tailwind CSS" x="0vw" y="-20vw" />
        <Skill name="Figma" x="-24vw" y="18vw" />
        <Skill name="Gatsby" x="17vw" y="17vw" />
      </div>
    </>
  );
};

export default Skills;