import React from "react";
import myphoto from "../assets/dp1_nobg.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      id="header"
      className="flex flex-wrap shadow-lg justify-between items-center"
    >
      <div id="myinfo" className="flex flex-wrap items-center m-2">
        <div id="myphoto" className="w-20">
          <img
            className="rounded-full"
            src={myphoto}
            alt="Pranav Jadhav Fullstack Developer Photo"
          />
        </div>
        <div id="myname" className="">
          <h1 className="text-3xl font-semibold m-4">
            PRANAV <span className="text-gray-400">JADHAV</span>
          </h1>
        </div>
      </div>

      <div id="navbar" className="m-2 p-2 ">
        <ul className="flex flex-wrap justify-center md:flex md:flex-wrap text-xl">
          <li className="mx-6 p-1">
            <NavLink
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
              to={"/"}
            >
              🏠 Home
            </NavLink>
          </li>
          <li className="mx-6 p-1">
            <NavLink
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
              to={"/work"}
            >
              💼 Work
            </NavLink>
          </li>
          <li className="mx-6 p-1">
            <NavLink
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
              to={"/projects"}
            >
              👨🏻‍💻 Projects
            </NavLink>
          </li>
          <li className="mx-6 p-1">
            <NavLink
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
              to={"/education"}
            >
              🎓 Education
            </NavLink>
          </li>
          <li className="mx-6 p-1">
            <NavLink
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
              to={"/skills"}
            >
              🚀 Skills
            </NavLink>
          </li>
          <li className="mx-6 p-1">
            <NavLink
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
              to={"/certifications"}
            >
              🏆 Certifications
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
