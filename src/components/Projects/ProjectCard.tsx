import { Project } from "../../sections/Projects";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="w-[25%] h-[450px] shadow-md  flex flex-col gap-4 hover:shadow-2xl p-2 duration-200 ease-linear cursor-pointer">
      <div className="w-full h-[80%]">
        <img
          className="rounded-md h-full w-full object-cover"
          src={project.img}
          alt="project"
        />
      </div>
      <div className="w-full h-[20%]  flex flex-col gap-2">
        <h4 className="text-white font-semibold capitalize text-3xl">
          {project.name}
        </h4>
        <h4 className="text-primary text-lg">{project.description}</h4>
      </div>
    </div>
  );
};

export default ProjectCard;
