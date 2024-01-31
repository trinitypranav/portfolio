import React from "react";

const SkillCard = ({ name, image }) => {
  return (
    <div className=" m-4 p-4">
      <img className="w-16 h-16 m-auto mb-2" src={image} />
      <span className="text-lg">{name}</span>
    </div>
  );
};

export default SkillCard;
