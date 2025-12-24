import React, { useState } from "react";
import Home from "../../pages/Home";
import "./Layout.css";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import Menu from "../menus/Menu";
const Layout = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="sidebar-section">
      <div className={toggle ? " sidebar-toggle sidebar" : "sidebar"}>
        <div className="sidebar-toggle-icons">
          <p onClick={handleClick}>
            {toggle ? (
              <MdKeyboardDoubleArrowLeft size={30} />
            ) : (
              <MdKeyboardDoubleArrowRight size={30} />
            )}
          </p>
        </div>
        <Menu toggle={toggle} />
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
};

export default Layout;
