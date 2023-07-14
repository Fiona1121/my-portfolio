import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";
import shedesign from "../../../public/images/projects/shedesign.png";
import makentu from "../../../public/images/projects/makentu.png";
import ntueeLightdance from "../../../public/images/projects/ntuee-lightdance.png";
import lightdanceEditor from "../../../public/images/projects/lightdance-editor.gif";
import transMe from "../../../public/images/projects/trans-me.png";
import fakeFakeTinder from "../../../public/images/projects/fake-fake-tinder.png";
import gTasker from "../../../public/images/projects/g-tasker.gif";
import { FeaturedProject, Project } from "@/components/Project";

type Props = {};

const Projects = (props: Props) => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText
          text="Imagintaion is the beginning of creation!"
          className="mb-16 lg:!text-7xl md:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-4xl"
        />
        <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-6">
          <div className="col-span-12">
            <FeaturedProject
              type="Featured Project"
              title="NTUEE Lightdance Editor"
              summary="
              In 2022, as leaders of the NTUEE Lightdance team, we developed a web-based editor system for Tron Dance. 
              This system, built with React for the frontend and Node.js for the backend, offers a comprehensive interface for choreography design, lights simulation, and music control. 
              Throughout the project, we followed GitHub flow and conducted weekly standup meetings to ensure efficient collaboration within the team. 
              Our toolkit included technologies such as React, Redux, TypeScript, RESTful API, GraphQL, Three.js, Node.js, and MongoDB."
              link="https://github.com/NTUEELightDance/LightDance-Editor"
              image={lightdanceEditor}
              github="https://github.com/NTUEELightDance/LightDance-Editor"
            />
          </div>
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
          <div className="col-span-6 md:col-span-12">
            <Project
              title="MakeNTU Website"
              summary="A website built with Gatbsy.js and Contentful for MakeNTU, a competition for students in NTU to showcase their creativity and problem-solving skills."
              link="https://make.ntuee.org"
              image={makentu}
              github="https://github.com/NTUEEInfoDep/makeNTU-2023.git"
            />
          </div>
          <div className="col-span-6 md:col-span-12">
            <Project
              title="NTUEE Lightdance Website"
              summary="A fun website built with Gatbsy.js, Three.js and Contentful for NTUEE Lightdance, an organization in NTU that performs lightdance."
              link="https://lightdance.ntuee.org"
              image={ntueeLightdance}
              github="https://github.com/NTUEELightDance/LightDance-Website.git"
            />
          </div>
          <div className="col-span-12">
            <FeaturedProject
              type="Featured Project"
              title="TransMe"
              summary="This website represents She.Design, a design studio based in Taipei, Taiwan. 
              It exudes style and sophistication, featuring a captivating showcase of the studio's projects and services. 
              Built using Gatbsy.js and Tailwind CSS, the website offers seamless navigation, visually appealing layouts, and fast loading times. 
              Contentful serves as the headless CMS, enabling easy content management and updates."
              link="https://sshedesign.com"
              image={transMe}
              github="https://github.com/Fiona1121/she.design.git"
            />
          </div>
          <div className="col-span-6 md:col-span-12">
            <Project
              title="G-Tasker"
              summary="A task management website built with React.js and GitHub API that allows users to manage their GitHub issues and pull requests."
              link="https://g-tasker.vercel.app"
              image={gTasker}
              github="https://github.com/Fiona1121/g-tasker"
            />
          </div>
          <div className="col-span-6 md:col-span-12">
            <Project
              title="Fake Fake Tinder"
              summary="Discover our Final Project of Web Programming 2020—an impressive matching website powered by React.js, Express.js, and MongoDB  
              with a complete login system, unique swiping card matching, real-time chat, and stunning UI/UX design."
              link="https://youtu.be/AnTxWJNuSIc"
              image={fakeFakeTinder}
              github="https://github.com/Fiona1121/Fake-Fake-Tinder"
            />
          </div>
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
