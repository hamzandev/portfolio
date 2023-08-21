import Link from "next/link";
import {
  BsDownload,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import avatar from "@/public/profile.jpg";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen container mx-auto pt-10">
      <div className="flex md:flex-row flex-col-reverse items-center min-h-[70vh] md:gap-0 gap-10">
        <div className="md:w-1/2 flex flex-col h-full justify-center md:gap-3 gap-2">
          <span className="md:text-2xl text-xl font-bold">Hi, My Name is</span>
          <h1 className="md:text-6xl text-[2.1rem] font-extrabold text-gray-900">
            Hamzan Wahyudi
          </h1>
          <p className="md:text-4xl text-2xl font-bold text-gray-800">
            I am <span>From Sumbawa, Indonesia</span>
          </p>
          <p>
            I am an experienced front-end developer. I have more than 3 years of
            working experience as a web developer and a front-end web developer.
            I am proficient at various programming languages. I enjoy learning
            and working on new projects related to programming.
          </p>
          <div className="flex items-center gap-x-3 mt-5 md:text-lg text-sm">
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
  );
};

export default Hero;
