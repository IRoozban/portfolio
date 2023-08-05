//1
import React, { useEffect } from "react";
import { useAppContext } from "./context";
import { Navigate, useNavigate } from "react-router-dom";
import "../style/home.css";
import banner from "../../assets/banner.png";

const home = () => {
  const { IsDark, setIsDark } = useAppContext();
  const navigate = useNavigate();
  const btnHandler = () => {
    navigate('/about');
  };

  return (
    <div className={`home-section ${!IsDark && "dark-text"}`}>
      <div className="layer"></div>
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="section-text">
        <h2>
          Hi My Name is ilia and
          <br /> I am a 16yo front-end developer.
        </h2>
        <h2>click below for more information</h2>
        <button onClick={btnHandler} className="home-btn">
          more
        </button>
      </div>
    </div>
  );
};

export default home;
