import React from "react";
import avatar from "@/public/profile.jpg";
import Image from "next/image";
import {
  BsDownload,
  BsFacebook,
  BsFile,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Patrick_Hand_SC } from "next/font/google";

const stalmate = Patrick_Hand_SC({ subsets: ["latin"], weight: ["400"] });

const Page = () => {
  return (
    <>
      <section id="home" className="min-h-screen container mx-auto pt-10">
        <div className="flex md:flex-row flex-col-reverse items-center min-h-[70vh] md:gap-0 gap-10">
          <div className="md:w-1/2 flex md:flex-row flex-col h-full justify-center md:gap-3 gap-2">
            <span className="md:text-2xl text-xl font-bold">
              Hi, My Name is
            </span>
            <h1 className="md:text-6xl text-[2.1rem] font-extrabold text-gray-900">
              Hamzan Wahyudi
            </h1>
            <p className="md:text-4xl text-2xl font-bold text-gray-800">
              I am <span>From Sumbawa, Indonesia</span>
            </p>
            <div className="flex items-center gap-x-3 mt-5 text-lg">
              <Link
                href={"#"}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "flex items-center gap-x-1"
                )}
              >
                <BsDownload />
                Download CV
              </Link>
              <Link
                href={"#"}
                className={cn(
                  buttonVariants({ size: "lg", variant: "secondary" }),
                  "flex items-center gap-x-1"
                )}
              >
                <BsGithub />
                Github
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex md:flex-row flex-col justify-end items-center gap-5">
            <div className="image md:w-[75%] w-[50%] aspect-square rounded-full overflow-clip border border-secondary outline outline-primary outline-offset-2">
              <Image src={avatar} alt="avatar" />
            </div>
            <div className="flex md:flex-col gap-5 p-2 bg-secondary border border-gray-300 ring ring-secondary text-foreground/60 rounded-full">
              <Link href={"#"}>
                <BsGithub size="20" />
              </Link>
              <Link href={"#"}>
                <BsLinkedin size="20" />
              </Link>
              <Link href={"#"}>
                <BsFacebook size="20" />
              </Link>
              <Link href={"#"}>
                <BsInstagram size="20" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="container mx-auto py-10 min-h-screen">
        <h3
          className={`text-3xl font-extrabold text-center text-gray-700 ${stalmate.className} p-2 border-b-2 border-b-gray-800 w-max mx-auto`}
        >
          About Me
        </h3>
      </section>
    </>
  );
};

export default Page;
