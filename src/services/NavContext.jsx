import React, { createContext, useContext, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [selectedNavItem, setSelectedNavItem] = useState("Mi perfil");

  return (
    <NavContext.Provider value={{ selectedNavItem, setSelectedNavItem }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  return useContext(NavContext);
};
