import React from "react";
import WorkCard from "./WorkCard";
import { educationObjects } from "../utils/config";

const Education = () => {
  return (
    <>
      {educationObjects.map((education) => (
        <WorkCard {...education} />
      ))}
    </>
  );
};

export default Education;
