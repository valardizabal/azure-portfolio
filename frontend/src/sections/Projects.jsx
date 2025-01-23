import ProjectCard from "../components/projects/ProjectCard";
import { Button } from "@heroui/react";
import useFunctions from "../hooks/useFunctions";

const Projects = () => {
  const { useGetProjects } = useFunctions();
  const { data, isLoading, error } = useGetProjects();

  return (
    <>
      <div className="sticky top-0 z-20 flex w-full justify-end p-2">
        <Button
          isDisabled
          size="sm"
          className="group w-max rounded-lg border border-default bg-transparent px-3 py-1 font-mono text-sm uppercase opacity-80"
        >
          <p className="font-bold">
            {"Project count: "} {data?.length}
          </p>
        </Button>
      </div>
      <div className="space-y-4">
        {data?.map((project) => (
          <ProjectCard data={project} key={project.title} />
        ))}
      </div>
    </>
  );
};

export default Projects;
