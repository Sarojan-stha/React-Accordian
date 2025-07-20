import React, { useState } from "react";
import "./themes.css";
import { Switch } from "antd";

const ToggleTheme = () => {
  const key = "theme";
  const [theme, setTheme] = useState(localStorage.getItem(key) || "light");

  console.log(theme);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem(key, newTheme);
    console.log(key, theme);
  };

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h1>Toogle theme</h1>
        <button
          onClick={() => {
            handleThemeChange();
          }}
        >
          Change Theme
        </button>
        <Switch
          className="toggle-switch"
          onChange={handleThemeChange}
          checkedChildren={`${theme} Mode`}
          unCheckedChildren={`${theme} Mode`}
        />
      </div>
    </div>
  );
};

export default ToggleTheme;
