import React from "react";
import axios from "axios";
import { useAppContext } from "./context";
import "../../axios";
import "../style/about.css";

//url

const url = "https://api.github.com/users/iliro6";

const About = () => {
  const {
    setIsLoading,
    isLoading,
    setContent,
    content,
    setAnimationOn,
    animationOn,
    IsDark,
  } = useAppContext();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(url);
      setContent(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  React.useEffect(() => {
    setInterval(() => {
      setAnimationOn(!animationOn);
    }, 1500);
  }, [animationOn]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const { name, avatar_url, location, bio } = content;

  if (isLoading) {
    return (
      <div className={`loading-section ${IsDark || "dark-text"}`}>
        <div className="text-section">
          <p className="loading-text"> Please Wait</p>
        </div>
        <div className="dots-container">
          <div
            className={`dot ${IsDark || "dot-dark"} ${
              animationOn && "first-dot"
            }`}
          ></div>
          <div
            className={`dot  ${IsDark || "dot-dark"} ${
              animationOn && "second-dot"
            }`}
          ></div>
          <div
            className={`dot  ${IsDark || "dot-dark"} ${
              animationOn && "third-dot"
            }`}
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-section">
      <img src={avatar_url} alt="ayo" />
      <h2>{`hi my name is ${name} `}</h2>
      <h2>I am a frontend Developer from {location}</h2>
    </div>
  );
};

export default About;
