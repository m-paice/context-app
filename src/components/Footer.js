import React from "react";

import { useContextApp } from "../context/AppContext";

const Footer = () => {
  const { name } = useContextApp();

  return (
    <footer className="footer-container">
      <div>{name}</div>

      <div>Todos os direitos reservados</div>
    </footer>
  );
};

export default Footer;
