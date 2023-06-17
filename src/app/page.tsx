import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen bg-light">
      <div className="w-full h-full inline-block z-0 bg-light p-32 pt-0">
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
              <Link href="mailto:fionafdjk123@gmail.com" target={"_blank"}
                className="ml-4 text-lg font-mediu, capitalize underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
