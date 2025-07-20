import React, { useState } from "react";
import "./themes.css";

const ToggleTheme = () => {
  const key = "theme";
  const [theme, setTheme] = useState(localStorage.getItem(key) || "light");

  const handleToggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
    localStorage.setItem(key, theme);
    console.log(key, theme);
  };

  return (
    <div className={theme}>
      <h1>Toggle Theme</h1>
      <button onClick={handleToggleTheme}>Toggle</button>
    </div>
  );
};

export default ToggleTheme;
