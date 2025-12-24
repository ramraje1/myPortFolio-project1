import React from "react";
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 mt-20">
      <h4 className="text-center text-gray-300 text-sm flex justify-center items-center gap-2">
        Made with
        <FaHeart className="text-red-500 animate-pulse" />
        by <span className="text-white font-semibold">Ramchandra Mane</span> ©
        2025
      </h4>
    </footer>
  );
};

export default Footer;
