import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import scaler from "../assets/scaler.png";

const BodySummaryCard = () => {
  return (
    <div className="w-2/3 h-auto m-auto p-10 rounded-lg shadow-2xl">
      <h1 className="text-5xl">Hello👋, I'm Pranav from Pune, India 🇮🇳</h1>
      <ul className=" mt-8">
        <li className="text-xl my-3">
          <span className="text-3xl">👨🏻‍💻</span> Fullstack developer with
          expertise in JavaScript, React, Node.js, Tailwind CSS, Redux Toolkit,
          React Testing Library & Jest, MongoDB, SQL & System Design
        </li>
        <li className="text-xl my-3">
          <span className="text-3xl">🏆</span> Upskilled with Scaler Academy
          for 1+ year & recognized in the top 5% among 45k peers
        </li>
        <li className="text-xl my-3">
          <span className="text-3xl">🎯</span> Understand the importance of Data
          Structures & Algorithms in writing high quality code
        </li>
        <li className="text-xl my-3">
          <span className="text-3xl">❤️</span> Love to talk about resume writing
          & product management{" "}
        </li>
        <li className="text-xl my-3">
          <span className="text-3xl">🤝</span> Always on the lookout for
          challenging opportunities in software development that enhance my
          skills and expertise{" "}
        </li>
      </ul>
      <div className="mt-8 flex flex-wrap">
        {/* <button className="p-2 mb-5 bg-orange-400 rounded-lg animate-bounce">
          Download Resume
        </button> */}
        <div className="flex flex-wrap">
          <a
            className="ml-5"
            href="https://www.linkedin.com/in/pranav-jadhav-javascript-nodejs-mongodb-express/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-10 w-10" src={linkedin} alt="LinkedIn" />
          </a>
          <a
            className="ml-5"
            href="https://github.com/trinitypranav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-10 w-10" src={github} alt="GitHub" />
          </a>
          <a
            className="ml-5"
            href="https://www.scaler.com/academy/profile/f107b79608d3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-10 w-10" src={scaler} alt="scaler" />
          </a>
        </div>

        <span className="m-auto mt-5 sm:mt-1 text-xl">
          {" "}
          ✉️ trinitypranav@gmail.com{" "}
        </span>
      </div>
    </div>
  );
};

export default BodySummaryCard;
