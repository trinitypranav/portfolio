import React from "react";
import WorkCard from "./WorkCard";
import { workObjects } from "../utils/config";

const Work = () => {
  return (
    <div>
      {workObjects.map((work) => (
        <WorkCard {...work} />
      ))}
    </div>
  );
};

export default Work;
