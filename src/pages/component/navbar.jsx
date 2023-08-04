import React from "react";
import "../style/navbar.css";
import { FaSun, FaMoon } from "react-icons/fa";
import DarkLogo from "../../assets/dark-mode-logo.png";
import lightLogo from "../../assets/light-mode-logo.png";

const Navbar = () => {
  const [IsDark, setIsDark] = React.useState(true);
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
        <div className="logo-section">
          <img src={IsDark ? DarkLogo : lightLogo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
