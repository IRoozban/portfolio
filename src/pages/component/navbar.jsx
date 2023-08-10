import React from "react";
import "../style/navbar.css";
import { FaSun, FaMoon } from "react-icons/fa";
import DarkLogo from "../../assets/dark-mode-logo.png";
import lightLogo from "../../assets/light-mode-logo.png";
import { useAppContext } from "./context";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const {setIsDark,IsDark} = useAppContext();
  const navigate = useNavigate();

  React.useEffect(() => {
    const switchColors = () => {
      !IsDark
        ? (document.body.style = "background:white")
        : (document.body.style = "background:#0d0d1f");
    };
    switchColors();
  }, [IsDark]);
  return (
    <div className="container-home">
      <div className="dark-btn">
        <button
          onClick={() => {
            setIsDark(!IsDark);
          }}
        >
          {IsDark ? (
            <FaMoon className="moon mode-icons" />
          ) : (
            <FaSun className="sun mode-icons" />
          )}
        </button>
        <div className="logo-section" onClick={() => navigate("/")}>
          <img src={IsDark ? DarkLogo : lightLogo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
