import React from "react";
import ProjectsList from "../utils/ProjectsList";

const Project = () => {
  let skill = ["Node", "Express", "React", "MongoDb"];
  return (
    <>
     
        <div id="project" className="ml-70 mt-16 mr-10">
          <div className="text-blue-700 font-serif text-7xl">
            <h1 className=" text-center"> Projects Stack</h1>
          </div>

          <hr />

          <div>
            <p className="pb-3 text-center text-lg">
              👉 including you're Project so u can showcase your're knowledge
            </p>
          </div>

          <div className="flex flex-row gap-5 flex-wrap  my-4">
            {ProjectsList.map((item) => {
              return (
                <div className="relative border max-w-full text-yellow-950 mx-20 hover:shadow-2xl hover:transition-all">
                  <p className="absolute -left-2 -top-2.5 bg-orange-400 text-white text-md  rounded-full w-19 text-center">
                    {item.type}
                  </p>

                  <img className="" src={item.image}></img>

                  <div className="flex gap-2 my-3 justify-center items-center flex-wrap">
                    {item.tech.map((text, index) => {
                      return (
                        <p
                          className="bg-orange-400 text-white rounded-lg w-fit p-1"
                          key={index}>
                          {text}
                        </p>
                      );
                    })}
                  </div>

                  <h2 className="text-center">{item.title}</h2>
                  <div className="flex justify-center my-3">
                    <button className="bg-blue-600 text-white p-2 rounded w-25 hover:bg-green-700">
                      View
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    
    </>
  );
};

export default Project;
