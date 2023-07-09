import React from "react";
import Layout from "./Layout";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base
    bg-light text-dark dark:border-light dark:bg-dark dark:text-light">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-1">
          Build with <span className="text-primary dark:text-primaryDark px-1">&#9825;</span>{" "}
          <Link
            href="https://github.com/Fiona1121"
            className="underline underline-offset-2"
            target={"_blank"}
          >
            Fiona Wu
          </Link>
        </div>
        <Link href="/" target={"_blank"}>
          Say Hello &#128075;
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
