import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import React, { useRef } from "react";
import profilePic from "../../../public/images/profile/profile-pic-2.jpg";
import AnimatedNumbers from "@/components/AnimatedNumbers";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

type Props = {};

const About = (props: Props) => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-12">
        <AnimatedText
          text="Passion Sparks Innovation: Redefining Web Development!"
          className="!text-7xl mb-16 lg:!text-6xl sm:!text-5xl xs:!text-3xl sm:mb-8"
        />
        <div className="grid grid-cols-8 gap-16 mx-16 xl:mx-0 sm:gap-8">
          <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:order-2">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
              About Me
            </h2>
            <p className="font-medium">
              Hi, I&apos;m Fiona, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 2 years of experience in the field. I am
              always looking for new and innovative ways to bring my
              clients&apos; visions to life.
            </p>
            <p className="font-medium my-4">
              I believe that design is about more than just making things look
              pretty – it&apos;s about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className="font-medium">
              Whether I&apos;m working on a website, mobile app, or other
              digital product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>
          <div
            className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 
          dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1"
          >
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light" />
            <Image
              src={profilePic}
              alt="Fiona Wu"
              className="w-full h-auto rounded-2xl"
              priority
              sizes="
              (max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw
              "
            />
          </div>
          <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 md:gap-4">
            <div className="flex flex-col items-end justify-center xl:items-center xl:w-1/3">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={10} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base">
                satisfied clients
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center xl:w-1/3">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={20} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base">
                completed projects
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center xl:w-1/3">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={2} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base">
                years of experience
              </h2>
            </div>
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
      </Layout>
    </main>
  );
};

export const metadata = {
  title: "About Me | Fiona Wu",
  description:
    "Hello! I'm an imaginative and enthusiastic individual bursting with creativity and a flair for fun ideas. I revel in the enchanting process of transforming my designs into captivating experiences using the magic of coding. As an avid self-learner, I'm always on the lookout for fresh knowledge and skills to enhance my problem-solving prowess. With a deep dedication to user experience, I craft solutions that not only address challenges but also guarantee the utmost satisfaction for every user. I thrive on the exhilarating journey of transforming abstract concepts into tangible realities, firmly believing that the fusion of design and code has the remarkable ability to conjure captivating and immersive experiences.",
};

export default About;
