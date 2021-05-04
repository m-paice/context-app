import React from "react";

import { useContextApp } from "../context/AppContext";

const Header = () => {
  const { name } = useContextApp();

  return (
    <header className="header-conatiner">
      <div>LOGO</div>

      <div>{name}</div>
    </header>
  );
};

export default Header;
