import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import shedesign from "../../../public/images/projects/shedesign.png";
import makentu from "../../../public/images/projects/makentu.png";
import ntueeLightdance from "../../../public/images/projects/ntuee-lightdance.png";

type Props = {};

type ProjectProps = {
  type?: string;
  title: string;
  summary?: string;
  image: StaticImageData;
  link: string;
  github: string;
};

const FeaturedProject = (props: ProjectProps) => {
  return (
    <article className="relative w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 ">
      <div className="absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark" />
      <Link
        href={props.link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={props.image} alt={props.title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{props.type}</span>
        <Link
          href={props.link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">
            {props.title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark">{props.summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={props.github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={props.link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
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
    <article className="w-full h-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-12 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] rounded-br-3xl bg-dark" />
      <Link
        href={props.link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={props.image} alt={props.title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{props.type}</span>
        <Link
          href={props.link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">
            {props.title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark">{props.summary}</p>
        <div className="w-full mt-2 flex items-center justify-end">
          <Link
            href={props.link}
            target="_blank"
            className="rounded-lg bg-dark text-light p-2 px-6 font-semibold mr-3"
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

const Projects = (props: Props) => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText
          text="Imagintaion is the beginning of creation!"
          className="mb-16"
        />
        <div className="grid grid-cols-12 gap-24">
          <div className="col-span-12">
            <FeaturedProject
              type="Featured Project"
              title="She.Design Website"
              summary="This website represents She.Design, a design studio based in Taipei, Taiwan. 
              It exudes style and sophistication, featuring a captivating showcase of the studio's projects and services. 
              Built using Gatbsy.js and Tailwind CSS, the website offers seamless navigation, visually appealing layouts, and fast loading times. 
              Contentful serves as the headless CMS, enabling easy content management and updates."
              link="https://sshedesign.com"
              image={shedesign}
              github="https://github.com/Fiona1121/she.design.git"
            />
          </div>
          <div className="col-span-6">
            <Project
              title="MakeNTU Website"
              summary="A website built with Gatbsy.js and Contentful for MakeNTU, a competition for students in NTU to showcase their creativity and problem-solving skills."
              link="https://make.ntuee.org"
              image={makentu}
              github="https://github.com/NTUEEInfoDep/makeNTU-2023.git"
            />
          </div>
          <div className="col-span-6">
            <Project
              title="NTUEE Lightdance Website"
              summary="A fun website built with Gatbsy.js, Three.js and Contentful for NTUEE Lightdance, an organization in NTU that performs lightdance."
              link="https://lightdance.ntuee.org"
              image={ntueeLightdance}
              github="https://github.com/NTUEELightDance/LightDance-Website.git"
            />
          </div>
          {/* <div className="col-span-12">
            <FeaturedProject
              type="Featured Project"
              title="She.Design Website"
              summary="This website represents She.Design, a design studio based in Taipei, Taiwan. 
              It exudes style and sophistication, featuring a captivating showcase of the studio's projects and services. 
              Built using Gatbsy.js and Tailwind CSS, the website offers seamless navigation, visually appealing layouts, and fast loading times. 
              Contentful serves as the headless CMS, enabling easy content management and updates."
              link="https://sshedesign.com"
              image={shedesign}
              github="https://github.com/Fiona1121/she.design.git"
            />
          </div>
          <div className="col-span-6">
            <Project
              title="MakeNTU Website"
              summary="A website built with Gatbsy.js and Contentful for MakeNTU, a competition for students in NTU to showcase their creativity and problem-solving skills."
              link="https://make.ntuee.org"
              image={makentu}
              github="https://github.com/NTUEEInfoDep/makeNTU-2023.git"
            />
          </div>
          <div className="col-span-6">
            <Project
              title="NTUEE Lightdance Website"
              summary="A fun website built with Gatbsy.js, Three.js and Contentful for NTUEE Lightdance, an organization in NTU that performs lightdance."
              link="https://lightdance.ntuee.org"
              image={ntueeLightdance}
              github="https://github.com/NTUEELightDance/LightDance-Website.git"
            />
          </div> */}
        </div>
      </Layout>
    </main>
  );
};

export const metadata = {
  title: "Projects | Fiona Wu",
  description:
    "Hello! I'm an imaginative and enthusiastic individual bursting with creativity and a flair for fun ideas. I revel in the enchanting process of transforming my designs into captivating experiences using the magic of coding. As an avid self-learner, I'm always on the lookout for fresh knowledge and skills to enhance my problem-solving prowess. With a deep dedication to user experience, I craft solutions that not only address challenges but also guarantee the utmost satisfaction for every user. I thrive on the exhilarating journey of transforming abstract concepts into tangible realities, firmly believing that the fusion of design and code has the remarkable ability to conjure captivating and immersive experiences.",
};

export default Projects;
