import { Patrick_Hand_SC } from "next/font/google";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
const stalmate = Patrick_Hand_SC({ subsets: ["latin"], weight: ["400"] });

const WorkExperiences = () => {
  return (
    <section
      id="work-experiences"
      className="container mx-auto py-10 min-h-screen"
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
            <TabsTrigger value="job1">
              PT Intellinum Solusi Indonesia
            </TabsTrigger>
            <TabsTrigger value="job2">
              PT Intellinum Solusi Indonesia
            </TabsTrigger>
            <TabsTrigger value="job3">PT Smartin Teknologi Sistem</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="job1">
          <div className="py-8">
            <h4 className="text-2xl font-bold">Frontend Developer</h4>
            <span className="text-sm italic mb-8 inline-block">
              2023 - (present)
            </span>
            <p className="mb-5">
              PT Intellinum Solusi Indonesia is a company that specializes in IT
              consulting services. My jobs here is :
            </p>
            <ul style={{ listStyle: "outside" }} className="ps-5">
              <li>Develop new Web Aplication base Micro Front-end</li>
              <li>Develop new Partial Web App using React</li>
              <li>Develop with Ant Design</li>
              <li>Rest API Integration using Axios</li>
              <li>Maintenence & update feature</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="job2">
          <div className="py-8">
            <h4 className="text-2xl font-bold">Frontend Developer</h4>
            <span className="text-sm italic mb-8 inline-block">
              Jan 2022 - Jul 2023
            </span>
            <p className="mb-5">
              PT Atlaz Belajar Bahasa is an education-technology startup company
              that has a main product consisting of books and an LMS. I built at
              least 4 web apps. My jobs here is :
            </p>
            <ul style={{ listStyle: "outside" }} className="ps-5">
              <li>
                Slicing UI/UX design to be web design with HTML,CSS,Tailwind
                CSS,Bootstrap CSS,SASS
              </li>
              <li>Develop all Frontend web app using React JS & Next JS</li>
              <li>Develop State Management using Redux Toolkit</li>
              <li>Develop JSON API using laravel & Mysql</li>
              <li>Integration API using Axios</li>
              <li>Develop Live web app using socket.io</li>
              <li>
                SEO Optimization such as make sitemap.xml, handle meta tags,
                alt, etc.
              </li>
              <li>Maintenence & update feature</li>
              <li>Design ERD</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="job3">
          <div className="py-8">
            <h4 className="text-2xl font-bold">Web Developer</h4>
            <span className="text-sm italic mb-8 inline-block">
              Jan 2021 - Dec 2021
            </span>
            <p className="mb-5">
              PT Smartin Teknologi Sistem is a company that specializes in IT
              consulting services. My jobs here is :
            </p>
            <ul style={{ listStyle: "outside" }} className="ps-5">
              <li>
                Slicing UI/UX design to be web design with HTML,CSS,Tailwind
                CSS,Bootstrap CSS
              </li>
              <li>Develop all responsive website</li>
              <li>Develop Frontend using Jquery & Alphine JS</li>
              <li>
                Develop Backend using Laravel with a lot of library like larvel
                spatie, livewire ect.
              </li>
              <li>Develop query database using MySQL & PostgreSQL</li>
              <li>Maintenence & update feature</li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default WorkExperiences;
