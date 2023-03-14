import React, { useContext } from "react";
import { ThemeContext } from "../contextjs/ThemeContext";

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
      }}
    >
      <botton className="button" onClick={toggleTheme}>
        Dark Mode
      </botton>
    </footer>
  );
};

export default Footer;
