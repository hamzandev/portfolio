import Image from "next/image";

import next from "@/public/next.webp";
import react from "@/public/react.webp";
import tailwind from "@/public/tailwind.webp";
import css from "@/public/css.webp";
import js from "@/public/js.webp";
import ts from "@/public/ts.webp";
import php from "@/public/php.webp";
import laravel from "@/public/laravel.webp";
import git from "@/public/git.webp";
import mysql from "@/public/mysql.webp";
import { stalmate } from "./work-experiences";
const skills = [next, react, css, tailwind, js, ts, php, laravel, mysql, git];

const Skills = () => {
  return (
    <section id="skills" className="mt-20 py-10">
      <div className="container mx-auto">
        <h3 className={`${stalmate.className} flex items-center gap-2`}>
          <span className="text-3xl text-primary font-extrabold text min-w-max">
            Programming Skills
          </span>
          <span className="h-[2px] bg-primary w-full"></span>
        </h3>
        <div className="grid mt-10 md:grid-cols-6 lg:grid-cols-7 2xl:grid-cols-8 grid-cols-2 gap-5 py-10">
          {skills.map((item) => (
            <div className="bg-secondary-foreground dark:bg-transparent rounded aspect-square w-full flex items-center justify-center">
              <Image key={item.width.toString()} src={item} alt="skill" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
