import React from "react";
import { stalmate } from "./work-experiences";
import ProjectCard, { Project } from "../custom/project-card";
import ied from "@/public/ied.jpg";
import spp from "@/public/spp-app.jpg";

const projects: Project[] = [
  {
    name: "Sistem Informasi SPP",
    company: "SMK Negeri 1 Lopok",
    image: spp,
    description:
      "'Sistem Informasi SPP' is a web-based application built to manage school fee payments",
    year: "2022",
    techStack: ["Codeigniter 3", "Bootstrap 4", "JQuery", "DataTable"],
  },
  {
    name: "SHIF",
    company: "Personal",
    image: ied,
    description:
      "SHIF is a website that allows us to send Eid al-Fitr greetings to our relatives simply by sharing a link.",
    year: "2023",
    techStack: ["NextJS", "TailwindCSS"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pt-20 py-10">
      <div className="container mx-auto">
        <h3 className={`${stalmate.className} flex items-center gap-2`}>
          <span className="text-3xl text-primary font-extrabold text min-w-max">
            Projects
          </span>
          <span className="h-[2px] bg-primary w-full"></span>
        </h3>
        <div className="w-full mt-10 flex md:grid gap-5 md:gap-8 snap-mandatory snap-x lg:grid-cols-3 2xl:grid-cols-4 md:overflow-x-hidden overflow-x-scroll hide-scroll py-5">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
