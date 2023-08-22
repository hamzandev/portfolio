import { FaLaravel } from "react-icons/fa";

interface Props {
  skill: {
    name?: string;
    level?: string;
    icon?: React.ReactNode;
  };
}
const SkillCard = ({ skill }: Props) => {
  return (
    <div className="relative flex justify-center">
      <span className="absolute text-sm bg-blue-400 px-2 py-1 rounded-full text-white top-0 right-0">
        {skill.level}
      </span>
      {skill.icon}
    </div>
  );
};

export default SkillCard;
