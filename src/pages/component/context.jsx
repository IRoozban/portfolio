import React, { useContext, createContext, useEffect } from "react";

const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [IsDark, setIsDark] = React.useState(false);

  return (
    <GlobalContext.Provider value={{ IsDark, setIsDark }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(GlobalContext);
};

export default AppContext;
