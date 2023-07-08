import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";
import shedesign from "../../../public/images/projects/shedesign.png";
import makentu from "../../../public/images/projects/makentu.png";
import ntueeLightdance from "../../../public/images/projects/ntuee-lightdance.png";
import { FeaturedProject, Project } from "@/components/Project";

type Props = {};

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
