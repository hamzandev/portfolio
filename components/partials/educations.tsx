import EducationCard from "../custom/education-card";
import { stalmate } from "./work-experiences";

const educations = [
  {
    name: "SMK Negeri 1 Lopok",
    jurusan: "Rekayasa Perangkat Lunak",
    year: "2020 - 2023 (Graduated)",
  },
  {
    name: "SMP Negeri 1 Lopok",
    jurusan: "Junior High School",
    year: "2017 - 2020",
  },
  {
    name: "SD Negeri 2 Langam",
    jurusan: "Elementary School",
    year: "2011 - 2017",
  },
];

const Educations = () => {
  return (
    <section id="education" className="mt-20 py-10 min-h-screen">
      <div className="container mx-auto">
        <h3 className={`${stalmate.className} flex items-center gap-2`}>
          <span className="text-3xl text-primary font-extrabold text min-w-max">
            Educations
          </span>
          <span className="h-[2px] bg-primary w-full"></span>
        </h3>
        <div className="wrapper mt-20">
          {educations.map((education) => (
            <EducationCard education={education} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educations;
