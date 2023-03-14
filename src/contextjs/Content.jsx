import React, { useContext } from "react";
import { ThemeContext } from "../contextjs/ThemeContext";
import { UserContext } from "../contextjs/UserContext";
const Content = () => {
  const { isDark } = useContext(ThemeContext);
  const name = useContext(UserContext);
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>{name}님, 좋은 하루 되세요!</p>
    </div>
  );
};

export default Content;
