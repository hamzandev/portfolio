import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import p1 from "@/public/p1.png";

interface Props {
  project: Project;
}

export interface Project {
  name?: string;
  company?: string;
  year?: string;
  description?: string;
  techStack?: string[];
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card className="overflow-hidden md:min-w-full min-w-[110vw] snap-center">
      <div className="image relative">
        <Image src={p1} alt="project 1" />
        <span className="absolute bottom-0 left-0 bg-background/70 shadow py-1 px-2 rounded-tr rounded-br text-sm italic">
          All Device Responsive
        </span>
      </div>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.techStack?.join(" + ")}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{project.description}</p>
      </CardContent>
      <CardFooter>
        <p className="italic text-muted-foreground">{project.company}</p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
