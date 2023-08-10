import React from "react";
import "../style/error.css";
import { FaHome, FaPage4 } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { useAppContext } from "./context";
import { Link } from "react-router-dom";

const Error = () => {
  const { IsDark } = useAppContext();
  return (
    <div className={`error-section ${IsDark || "dark-text"}`}>
      <h2 className="error-header">
        <p className="header-404">404</p>
        {<VscChromeClose className="x-mark" />}
      </h2>
      <div className="error-body">
        <p>page not found!</p>
        <Link to={'/'} className={`link-home ${IsDark && 'dark-bg'}`}>
          {"back to home"}
          <FaHome className="home-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Error;
