import React from "react";

const ProjectCard = ({
  name,
  image,
  bullets,
  demoLink,
  githubLink,
  techstack,
}) => {
  return (
    <div className="w-96 h-max bg-gray-100 border rounded-lg shadow-lg m-2 p-4">
      <a href={image} target="_blank">
        <img src={image} alt={name} className="rounded-md" />
      </a>

      <h1 className="text-2xl font-semibold mt-2 text-center">{name}</h1>
      <ul className="mt-2">
        {bullets.map((point) => (
          <li className="text-base">▶︎ {point}</li>
        ))}
      </ul>
      {demoLink && (
        <div className="text-sm mt-4">
          <span className="text-xl">🖥️ </span> <a href={demoLink}>{demoLink}</a>
        </div>
      )}
      {githubLink && (
        <div className="text-sm">
          <span className="text-xl">📁 </span>
          <a href={githubLink}>{githubLink}</a>
        </div>
      )}
      {techstack && (
        <div className="text-sm my-4 font-light">
          <span className="text-xl">🚀 </span>Tech Stack: {techstack}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
