import React from 'react'


const Loading = ({IsDark,animationOn}) => {
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

export default React.memo(Loading);