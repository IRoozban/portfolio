import React, { useContext, createContext, useEffect } from "react";

const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [IsDark, setIsDark] = React.useState(false);
  const [content, setContent] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [animationOn , setAnimationOn] = React.useState(true)


  return (
    <GlobalContext.Provider
      value={{
        IsDark,
        setIsDark,
        setIsLoading,
        isLoading,
        setContent,
        content,
        setAnimationOn,
        animationOn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(GlobalContext);
};

export default AppContext;
