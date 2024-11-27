import { useMemo, useState } from "react";
import Pagination from "../../components/Projects/Pagination";
import ProjectCard from "../../components/Projects/ProjectCard";
import { assets } from "../../utils/assets";

export type Project = {
  name: string;
  img: string;
  description: string;
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      name: "project01",
      img: assets.project01,
      description: "AirCalling Landing Page Design ",
    },
    {
      name: "project02",
      img: assets.project02,
      description: "AirCalling Landing Page Design ",
    },
    {
      name: "project03",
      img: assets.project03,
      description: "AirCalling Landing Page Design ",
    },
    {
      name: "project04",
      img: assets.project01,
      description: "AirCalling Landing Page Design ",
    },
    {
      name: "project05",
      img: assets.project02,
      description: "AirCalling Landing Page Design ",
    },
    {
      name: "project06",
      img: assets.project03,
      description: "AirCalling Landing Page Design ",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);

  const projectPerPage = 3;

  const currentProjects = useMemo(() => {
    const start = (currentPage - 1) * projectPerPage;
    return projects.slice(start, start + projectPerPage);
  }, [projects, currentPage, projectPerPage]);

  const totalPages = Math.ceil(projects.length / projectPerPage);

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex items-center justify-center flex-wrap gap-5 min-h-screen">
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Projects;
