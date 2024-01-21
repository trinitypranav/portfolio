import React from "react";
import { certificateObjects } from "../utils/config";
import ProjectCard from "./ProjectCard";

const Certifications = () => {
  return (
    <div className="flex flex-wrap justify-evenly m-5">
      {certificateObjects.map((certificate) => (
        <ProjectCard {...certificate} />
      ))}
    </div>
  );
};

export default Certifications;
