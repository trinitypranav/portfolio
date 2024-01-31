import React from "react";

const WorkCard = ({
  company,
  position,
  startDate,
  endDate,
  location,
  bullets,
  techstack,
}) => {
  return (
    <div className="w-auto h-auto m-5 py-5 px-10 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl mb-2">
        {company} ({position})
      </h1>
      <h2 className="mb-4">
        <span className="text-lg mr-2">🗓️</span> {startDate} - {endDate}{" "}
        {location == "Remote" ? (
          <span className="text-lg ml-5">🌎 </span>
        ) : (
          <span className="text-lg ml-5">🏫 </span>
        )}
        {location}
      </h2>
      <ul className="">
        {bullets.map((point) => (
          <li className="mb-2">▶︎ {point}</li>
        ))}
      </ul>
      {techstack && (
        <div className="text-xl mt-5">
          🚀<span className="text-base"> Tech Stack - {techstack}</span>{" "}
        </div>
      )}
    </div>
  );
};

export default WorkCard;
