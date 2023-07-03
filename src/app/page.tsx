import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import HireMe from "@/components/HireMe";
import profilePic from "../../public/images/profile/developer-pic-1.png";

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen bg-light">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src={profilePic} alt="Fiona Wu" className="w-full h-auto" />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="!text-6xl !text-left"
            />
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/resume-2023.pdf"
                target={"_blank"}
                className="flex items-center bg-dark text-light p-2.5 pl-6 pr-5 
                rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark"
                download={true}
              >
                Resume
                <LinkArrow className="w-6 ml-2" />
              </Link>
              <Link
                href="mailto:fionafdjk123@gmail.com"
                target={"_blank"}
                className="ml-4 text-lg font-mediu, capitalize underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe />
    </main>
  );
}

export const metadata = {
  title: "My Portfolio | Fiona Wu",
  description:
    "Hello! I'm an imaginative and enthusiastic individual bursting with creativity and a flair for fun ideas. I revel in the enchanting process of transforming my designs into captivating experiences using the magic of coding. As an avid self-learner, I'm always on the lookout for fresh knowledge and skills to enhance my problem-solving prowess. With a deep dedication to user experience, I craft solutions that not only address challenges but also guarantee the utmost satisfaction for every user. I thrive on the exhilarating journey of transforming abstract concepts into tangible realities, firmly believing that the fusion of design and code has the remarkable ability to conjure captivating and immersive experiences.",
};
