import React from "react";
import { TechstackList } from "../utils/TechstackList";
import RubberBand from "react-reveal/RubberBand";
const Tech = () => {
  return (
    <div id="Tech" className="ml-70 mt-16 mr-3">
      <RubberBand>
        <div className="text-blue-700 font-serif text-7xl ">
          <h1 className=" text-center"> Technologies Stack</h1>
        </div>

        <hr />

        <div>
          <p className="pb-7 text-center text-lg">
            👉 including programming Languages, frameworks, databses, front-end
            and back-end tools, and APIs
          </p>
        </div>
      </RubberBand>
      <div className="flex flex-wrap gap-3 ">
        {TechstackList.map((tech) => {
          return (
            <div
              className="flex justify-center items-center rounded-2xl border w-55 h-18  cursor-pointer text-lg hover:bg-orange-600 hover:text-amber-100 hover:shadow-2xl "
              key={tech._id}>
              {<tech.icon className="text-3xl mr-3" />} {tech.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;
