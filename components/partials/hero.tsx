import Link from "next/link";
import {
  BsDownload,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import avatar from "@/public/profile.jpg";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import HeroTypeAnimation from "../custom/hero-type-animation";

const socialLinks = [
  {
    name: "Github",
    url: "https://github.com/hamzandev",
    icon: <BsGithub />,
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com/hamzan-wahyudi",
    icon: <BsLinkedin />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/sir.yuuu",
    icon: <BsInstagram />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/hamzanwahyu.me",
    icon: <BsFacebook />,
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com/hamzandev",
    icon: <BsTwitter />,
  },
];

const Hero = () => {
  return (
    <section className="min-h-screen container mx-auto pt-10">
      <div className="flex md:flex-row flex-col-reverse items-center min-h-[70vh] md:gap-0 gap-10">
        <div className="md:w-1/2 flex flex-col h-full justify-center md:text-start text-center md:gap-3 gap-2">
          <span className="md:text-2xl text-lg font-bold">Hi, My Name is</span>
          <h1 className="md:text-6xl text-[2rem] font-extrabold text-foreground">
            Hamzan Wahyudi
          </h1>
          <p className="md:text-4xl text-xl font-bold text-foreground">
            I am <HeroTypeAnimation />
          </p>
          <p className="text-foreground/80 mt-3 md:text-left text-justify">
            I am a graduate of the Software Engineering program at Vocation High
            School. I have two years of experience in building web applications
            using various programming languages and frameworks. I thoroughly
            enjoy learning and working on new projects related to programming.
          </p>
          <div className="flex md:flex-row flex-col md:items-center gap-3 mt-5 md:text-lg text-sm">
            <Link
              href={"https://drive.google.com/file/d/1CmGrBLeacosg3vFguRXBJ_HZry_u-CKr/view?usp=sharing"}
              className={cn(
                buttonVariants({ size: "lg" }),
                "flex items-center gap-x-1"
              )}
            >
              <BsDownload />
              Download CV
            </Link>
            <Link
              href={"https://github.com/hamzandev"}
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
        <div className="md:w-1/2 flex md:flex-row flex-col justify-end items-center gap-8">
          <div className="image md:w-[75%] w-[60%] aspect-square rounded-full overflow-clip border border-secondary outline ring outline-primary outline-offset-8">
            <Image src={avatar} alt="avatar" />
          </div>
          <div className="flex md:flex-col gap-5 p-2 bg-secondary border border-foreground/30 ring ring-secondary text-foreground/80 rounded-full">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.url}>
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
