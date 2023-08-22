import Hero from "@/components/partials/hero";
import ProjectCard, { Project } from "@/components/custom/project-card";
import SkillCard from "@/components/custom/skill-card";
import WorkExperiences, {
  stalmate,
} from "@/components/partials/work-experiences";
import Projects from "@/components/partials/projects";

import Image from "next/image";
import { FaLaravel, FaReact } from "react-icons/fa";
import Skills from "@/components/partials/skills";
import Educations from "@/components/partials/educations";
import { BsEnvelope, BsMailbox, BsWhatsapp } from "react-icons/bs";

const Page = () => {
  return (
    <>
      <Hero />
      <WorkExperiences />
      <Projects />
      <Skills />
      <Educations />
      <section id="contact" className="mt-20 min-h-screen/2">
        <div className="container mx-auto">
          <h3 className={`${stalmate.className} flex items-center gap-2`}>
            <span className="text-3xl text-primary font-extrabold text min-w-max">
              Contact
            </span>
            <span className="h-[2px] bg-primary w-full"></span>
          </h3>
          <div className="wrapper text-center mt-20">
            <span className="text-2xl font-bold">Feel free to Say Hi!</span>
            <div className="flex justify-center md:flex-row flex-col gap-5 mt-10">
              <span className="flex items-center gap-x-2">
                <BsWhatsapp /> +6283129535479
              </span>
              <span className="flex items-center gap-x-2">
                <BsEnvelope /> hamzankechil@gmail.com
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
