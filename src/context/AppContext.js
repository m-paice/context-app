import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [name, setName] = useState("sem nome");

  const handleSetName = (data) => {
    setName(data);
  };

  return (
    <AppContext.Provider
      value={{
        name: name,
        handleSetName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useContextApp = () => {
  const context = useContext(AppContext);

  return context;
};
