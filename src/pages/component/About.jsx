import React from "react";
import axios from "axios";
import { useAppContext } from "./context";
import {
  FaLinkedin,
  FaTelegram,
  FaGithub,
  FaTwitter,
  FaReact,
  FaLink,
} from "react-icons/fa";
import "../../axios";
import "../style/about.css";
import Loading from "./Loading";

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
      
      const res = await axios.get(url);
      setContent(res.data);
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
    const TimeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const { name, avatar_url, location, bio } = content;

  if (isLoading) {
    return <Loading IsDark={IsDark} animationOn={animationOn} />;
  }

  return (
    <div className="sides">
      <div className={`main-section ${IsDark || "dark-text"}`}>
        <div className="text-about">
          <img className="logo" src={avatar_url} alt="ayo" />
          <p>{`hi my name is ${name} `}</p>
          <p>I am a frontend Developer from {location}</p>
          <p>I'm Currently Learning {<FaReact className="React" />}</p>
          <p>I am also a {bio}</p>
        </div>
      </div>
      <div className={`skills-section`}></div>
      <div className={`social-media ${IsDark && "dark-bg"} `}>
        <a href="https://twitter.com/IRoozban">
          <FaTwitter className={`social-icons ${IsDark && "dark-social"}`} />
        </a>
        <a href="https://github.com/iliro6">
          <FaGithub className={`social-icons ${IsDark && "dark-social"}`} />
        </a>{" "}
        <a href="https://www.linkedin.com/in/ilia-roozban-85111b218/">
          <FaLinkedin className={`social-icons ${IsDark && "dark-social"}`} />
        </a>{" "}
        <a href="https://t.me/ilirojr">
          <FaTelegram className={`social-icons ${IsDark && "dark-social"}`} />
        </a>
      </div>
    </div>
  );
};

export default About;
