interface Props {
  education: {
    name?: string;
    jurusan?: string;
    year?: string;
  };
}

const EducationCard = ({ education }: Props) => {
  return (
    <div className="flex border-l-2 border-l-foreground ps-3 md:w-1/2 justify-between items-center mb-10">
      <div>
        <h4 className="text-xl font-bold">{education.name}</h4>
        <span className="italic text-sm text-muted-foreground">
          {education.jurusan}
        </span>
      </div>
      <span>{education.year}</span>
    </div>
  );
};

export default EducationCard;
