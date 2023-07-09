import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/profile-pic-1.png";

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen bg-light dark:bg-dark dark:text-light">
      <Layout className="pt-0 md:p-16 sm:pt-8">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 md:w-full">
            <Image
              src={profilePic}
              alt="Fiona Wu"
              className="w-full h-auto lg:hidden md:inline-block md:w-full"
              priority
              sizes="
              (max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw
              "
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="!text-6xl !text-left xl:!text-5xl lg:!text-6xl lg:!text-center md:!text-5xl sm:!text-3xl"
            />
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center">
              <Link
                href="/resume-2023.pdf"
                target={"_blank"}
                className="flex items-center bg-dark text-light p-2.5 pl-6 pr-5 md:p-2 md:px-4 md:text-base
                rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light"
                download={true}
              >
                Resume
                <LinkArrow className="w-6 ml-2" />
              </Link>
              <Link
                href="mailto:fionafdjk123@gmail.com"
                target={"_blank"}
                className="ml-4 text-lg font-medium capitalize underline md:text-base"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}

export const metadata = {
  title: "My Portfolio | Fiona Wu",
  description:
    "Hello! I'm an imaginative and enthusiastic individual bursting with creativity and a flair for fun ideas. I revel in the enchanting process of transforming my designs into captivating experiences using the magic of coding. As an avid self-learner, I'm always on the lookout for fresh knowledge and skills to enhance my problem-solving prowess. With a deep dedication to user experience, I craft solutions that not only address challenges but also guarantee the utmost satisfaction for every user. I thrive on the exhilarating journey of transforming abstract concepts into tangible realities, firmly believing that the fusion of design and code has the remarkable ability to conjure captivating and immersive experiences.",
};
