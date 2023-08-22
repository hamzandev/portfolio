import React from "react";
import { stalmate } from "./work-experiences";
import ProjectCard, { Project } from "../custom/project-card";

const projects: Project[] = [
  {
    name: "Project 1",
    company: "company 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit molestiae a, vitae recusandae, ratione officiis obcaecati quia provident labore corporis sint accusantium eius quaerat veniam quis quidem.",
    year: "2023",
    techStack: ["Nextjs", "Redux Toolkit", "Tailwindcss", "MySQL", "Prisma"],
  },
  {
    name: "Project 2",
    year: "2022",
    company: "company 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione tempore reprehenderit corporis aliquam, obcaecati consequatur inventore officia quis voluptas recusandae!",
    techStack: ["Laravel", "Innertia(React)", "Tailwindcss", "MySQL"],
  },
  {
    name: "Project 3",
    company: "company 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident labore obcaecati tempore alias culpa ipsam non modi in necessitatibus, eaque iure, excepturi debitis.",
    year: "2022",
    techStack: ["Codeigniter 3", "Bootstrap", "MySQL", "JQuery"],
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
