import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import axios from "axios";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");
  const hamdelname = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !message) {
        alert("fill the all filled");
      }
      const res = await axios.post(
        "https://myportfolio-project1.onrender.com/api/portfolio/email",
        {
          name,
          email,
          message,
        }
      );
      if (res.data.success) {
        alert(res.data.message);
        setName("");
        setEmail("");
        setmessage("");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div id="contact" className="ml-70 mt-20 px-6 md:px-20  text-blue-700">
        <h1 className="text-center text-5xl font-serif ">Contact Me</h1>
        <hr className="my-8 w-40 mx-auto border-blue-500" />
      </div>
      <div className="grid grid-cols-2 max-w-fit mr-4 ml-57 border my-2 ">
       
          <div className="w-fit flex justify-center items-center p-10">
            <img src="cnt.avif"></img>
          </div>
      
       
          <div className=" w-75 mx-24 my-4 p-3">
            <h5 className="flex items-center gap-3 text-3xl">
              Contact With
              <FaLinkedin className="text-blue-600" size={30} />
              <FaGithub size={30} />
              <FaWhatsapp color="green" size={30} />
            </h5>

            <p className="text-center">OR</p>

            <div className="flex flex-col ">
              <input
                name="name"
                value={name}
                type="text"
                className="p-2 text-5xl font-semibold my-2 border border-gray-700 rounded"
                onChange={hamdelname}
                placeholder="Enter Your Name"
              />
              <input
                className="p-2 text-5xl font-semibold my-2 border border-gray-700 rounded "
                type="text"
                name="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}></input>
              <textarea
                className="p-3 text-5xl font-semibold my-2 border border-gray-700 rounded"
                type="text"
                name="message"
                placeholder="write your message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}></textarea>
              <button
                className="p-2 text-5xl text-white font-semibold my-2 bg-black rounded"
                onClick={handleSubmit}>
                SEND MESSAGE
              </button>
            </div>
          </div>
       
      </div>
    </>
  );
};

export default Contact;
