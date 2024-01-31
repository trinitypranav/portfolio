import React from "react";
import ProjectCard from "./ProjectCard";
import { projectObjects } from "../utils/config";

const Projects = () => {
  return (
    <div className="m-5 flex flex-wrap justify-evenly">
      {projectObjects.map((project) => (
        <ProjectCard {...project} />
      ))}
    </div>
  );
};

export default Projects;
