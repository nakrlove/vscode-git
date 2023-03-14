import React, { useContext } from "react";
import { ThemeContext } from "../contextjs/ThemeContext";
import { UserContext } from "../contextjs/UserContext";
const Header = () => {
  //   const [isDark, setIsDark] = useContext(ThemeContext);
  const { isDark } = useContext(ThemeContext);
  const name = useContext(UserContext);

  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1> Welcome {name}</h1>
    </header>
  );
};

export default Header;
