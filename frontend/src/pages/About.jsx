import React from "react";

const About = () => {
  return (
      <div
        id="About"
        className="max-w-fit mr-5 ml-60 my-10 
                   flex flex-col md:flex-row 
                   border shadow-2xl rounded-xl p-6 gap-6">
        <div className="flex justify-center md:w-1/3">
          <img
            src="ramhd.jpg"
            alt="profile"
            className="w-60 h-66 object-cover rounded-3xl border"
          />
        </div>

        {/* Text section */}
        <div className="md:w-2/3 text-justify">
          <h2 className="text-center my-4 text-2xl font-semibold underline">
            About Me
          </h2>

          <p className="text-lg leading-relaxed">
            Skilled in developing clean, user-friendly web applications using
            the MERN stack. Experienced in managing databases with MongoDB,
            building RESTful APIs with Express, and creating responsive
            front-end interfaces using React, HTML, and Tailwind CSS. Passionate
            about learning new technologies and focused on building efficient,
            user-centered solutions.
          </p>
        </div>
      </div>
  );
};

export default About;
