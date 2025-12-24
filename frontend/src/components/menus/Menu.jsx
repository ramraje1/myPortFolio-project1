import React from "react";
import { FcHome } from "react-icons/fc";
import { FcAbout, FcBiotech } from "react-icons/fc";
import { FaBook } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { SiCodeproject } from "react-icons/si";
import { FcBusinessContact } from "react-icons/fc";
import { Link } from "react-scroll";

import "./Menu.css";
const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
           
              <img
                src="ramhd.jpg"
                className="flex border-2 border-black rounded-full w-75 h-50 mx-auto"
                alt="profile pic"></img>
           
          </div>
         
            <div>
              <Link
                activeClass="active"
                to="Home"
                smooth={true}
                duration={100}
                spy={true}
                offset={-50}>
                <div className="text-lg  text-amber-50 flex justify-items-start items-center gap-2 my-2 mx-4 cursor-pointer hover:text-orange-400">
                  <FcHome /> Home
                </div>
              </Link>
              <Link
                activeClass="active"
                to="About"
                smooth={true}
                duration={100}
                spy={true}
                offset={-50}>
                <div className="text-lg text-amber-50 flex justify-start items-center gap-2 my-2 mx-4 cursor-pointer hover:text-orange-400">
                  <FcAbout /> About
                </div>
              </Link>
              <Link
                activeClass="active"
                to="Eduction"
                smooth={true}
                duration={100}
                spy={true}
                offset={-50}>
                <div className="text-lg flex justify-start items-center gap-2 my-2 mx-4  text-amber-50 cursor-pointer hover:text-orange-400">
                  <FaBook />
                  Eduction
                </div>
              </Link>
              <Link
                activeClass="active"
                to="Tech"
                smooth={true}
                duration={100}
                spy={true}
                offset={-50}>
                {" "}
                <div className="text-lg flex justify-start items-center gap-2 my-2 mx-4  text-amber-50 cursor-pointer hover:text-orange-400">
                  <FcBiotech />
                  Tech Stack
                </div>
              </Link>
              <Link
                activeClass="active"
                to="project"
                smooth={true}
                duration={100}
                spy={true}
                offset={-50}>
                <div className="text-lg flex justify-start items-center gap-2 my-2 mx-4  text-amber-50 cursor-pointer hover:text-orange-400">
                  <SiCodeproject />
                  Project
                </div>
              </Link>
              <Link
                activeClass="active"
                to="work"
                smooth={true}
                duration={100}
                spy={true}
                offset={-50}>
                <div className="text-lg flex justify-start items-center gap-2 my-2 mx-4  text-amber-50 cursor-pointer hover:text-orange-400">
                  <GrUserWorker /> Work Experince
                </div>
              </Link>

              <Link
                activeClass="active"
                to="contact"
                smooth={true}
                duration={100}
                spy={true}
                offset={-50}>
                <div className="text-lg flex justify-start items-center gap-2 my-2 mx-4  text-amber-50 cursor-pointer hover:text-orange-400">
                  <FcBusinessContact />
                  Contect
                </div>
              </Link>
            </div>
          
        </>
      ) : (
        <div>
          <Link
            activeClass="active"
            to="Home"
            smooth={true}
            duration={100}
            spy={true}
            offset={-50}>
            <div className="text-lg  text-amber-50 flex justify-items-start items-center gap-2 my-3 mx-4 cursor-pointer">
              <FcHome title="Home" />
            </div>
          </Link>
          <Link
            activeClass="active"
            to="About"
            smooth={true}
            duration={100}
            spy={true}
            offset={-50}>
            {" "}
            <div className="text-lg text-amber-50 flex justify-start items-center gap-2 my-3 mx-4 cursor-pointer">
              <FcAbout title="About" />
            </div>
          </Link>

          <Link
            activeClass="active"
            to="Eduction"
            smooth={true}
            duration={100}
            spy={true}
            offset={-50}>
            <div className="text-lg flex justify-start items-center gap-2 my-3 mx-4  text-amber-50 cursor-pointer">
              <FaBook title=" Eduction" />
            </div>
          </Link>
          <Link
            activeClass="active"
            to="Tech"
            smooth={true}
            duration={100}
            spy={true}
            offset={-50}>
            <div className="text-lg flex justify-start items-center gap-2 my-3 mx-4  text-amber-50 cursor-pointer">
              <FcBiotech title=" Tect Stack" />
            </div>
          </Link>
          <Link
            activeClass="active"
            to="project"
            smooth={true}
            duration={100}
            spy={true}
            offset={-50}>
            <div className="text-lg flex justify-start items-center gap-2 my-3 mx-4  text-amber-50 cursor-pointer">
              <SiCodeproject title="Project" />
            </div>
          </Link>
          <Link
            activeClass="active"
            to="work"
            smooth={true}
            duration={100}
            spy={true}
            offset={-50}>
            {" "}
            <div className="text-lg flex justify-start items-center gap-2 my-3 mx-4  text-amber-50 cursor-pointer">
              <GrUserWorker title="Work Experince" />
            </div>
          </Link>

          <Link
            activeClass="active"
            to="contact"
            smooth={true}
            duration={100}
            spy={true}
            offset={-50}>
            <div className="text-lg flex justify-start items-center gap-2 my-3 mx-4  text-amber-50 cursor-pointer">
              <FcBusinessContact title="Contect" />
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Menu;
