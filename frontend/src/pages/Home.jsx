import React, { useContext } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";
import Resum from "../assets/pdf/myresume.pdf";
import Fade from "react-awesome-reveal";
import { Context } from "../App";
const Home = () => {
  const { theam, setTheam } = useContext(Context);
  const HandleTheam = () => {
    setTheam((prev) => (prev === "light" ? "Dark" : "light"));
  };
  return (
    <div id="Home" className="h-54 bg-black">
      <div
        onClick={HandleTheam}
        className="fixed right-1 top-1 bg-gray-950 w-fit text-white p-3 rounded">
        {theam === "light" ? <BsFillMoonStarsFill /> : <MdWbSunny />}
      </div>
      <div className=" text-amber-50 text-4xl mx-55 my-11">
        {" "}
        <Fade left>
          <h2>Hi 👋 I'm a</h2>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer!",
                  "Mern Stack Developer!",
                  "React native developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </Fade>
        <Fade bottom>
          <div className="mt-3">
            <button className="btn btn-primary me-3 p-2">Hire Me</button>
            <button className="btn btn-secondary p-2 ">
              <a
                className="text-decoration-none  text-white"
                href={Resum}
                download="your_name.pdf">
                My Resume
              </a>
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
