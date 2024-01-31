import React from "react";
import { skillsObjects } from "../utils/config";
import SkillCard from "./SkillCard";

const proficientSkills = skillsObjects.filter(
  (skill) => skill.level === "proficient"
);
const familiarSkills = skillsObjects.filter(
  (skill) => skill.level === "familiar"
);

const Skills = () => {
  return (
    <div id="mainContainer" className="flex flex-wrap m-5 p-2">
      <div id="proficientContainer" className="m-auto border shadow-lg">
        <h1 className="text-2xl font-bold m-8 text-center">PROFICIENT</h1>
        <div
          id="proficientSkillsContainer"
          className="flex flex-wrap text-center justify-center"
        >
          {proficientSkills.map((skill) => (
            <SkillCard {...skill} />
          ))}
        </div>
      </div>
      <div
        id="familiarContainer"
        className="m-auto mt-10 shadow-lg text-center"
      >
        <h1 className="text-2xl font-bold m-8">FAMILIAR</h1>
        <div
          id="familiarSkillsContainer"
          className="flex flex-wrap text-center justify-center"
        >
          {familiarSkills.map((skill) => (
            <SkillCard {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
