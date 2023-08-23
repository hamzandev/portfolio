import { Patrick_Hand_SC } from "next/font/google";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
export const stalmate = Patrick_Hand_SC({
  subsets: ["latin"],
  weight: ["400"],
});

const works = [
  {
    key: "job1",
    company: "Universitas Teknologi Sumbawa",
    position: "Content Writter (Intern)",
    year: "Oct 2021 - Mar 2022",
    descripton:
      "Universitas Teknologi Sumbawa is a private university located in Sumbawa. My job here is :",
    jobDetail: [
      "Writing website content using Elementor",
      "Looking for updated news from Instagram",
      "Update the 'Rektor News' website",
    ],
  },
  {
    key: "job2",
    company: "Universitas Teknologi Sumbawa",
    position: "IT Support (Intern)",
    year: "Oct 2021 - Mar 2022",
    descripton:
      "Universitas Teknologi Sumbawa is a private university located in Sumbawa. My job here is :",
    jobDetail: [
      "LAN network installation",
      "Performing LAN cable and fiber optic repairs",
      "Being a committee member for organizing graduation events",
      "Performing Windows reinstallation in the computer lab",
    ],
  },
];

const WorkExperiences = () => {
  return (
    <section
      id="work-experiences"
      className="container mx-auto pt-20 pb-10 min-h-screen"
    >
      <h3 className={`${stalmate.className} flex items-center gap-2`}>
        <span className="text-3xl text-primary font-extrabold text min-w-max">
          Work Experiences
        </span>
        <span className="h-[2px] bg-primary w-full"></span>
      </h3>
      <Tabs defaultValue="job1" className="mt-10">
        <div className="overflow-x-auto py-3">
          <TabsList>
            {works.map((item, i) => (
              <TabsTrigger key={i} value={item.key}>
                {item.company}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {works.map((work, i) => (
          <TabsContent key={i} value={work.key}>
            <div className="py-8">
              <h4 className="text-2xl font-bold">{work.position}</h4>
              <span className="text-sm italic mb-8 inline-block">
                {work.year}
              </span>
              <p className="mb-5">{work.descripton}</p>
              <ul style={{ listStyle: "outside" }} className="ps-5">
                {work.jobDetail.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default WorkExperiences;
