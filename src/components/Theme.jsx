import { useState } from "react";
import { MoonIcon, SunIcon } from "../assets/Icons";
import "./Theme.css";

function Theme() {
  const [darkTheme, setDarkTheme] = useState(false);

  document.body.className = darkTheme ? "dark-theme" : "";

  return (
    <div className="theme-box">
      <button onClick={() => setDarkTheme(false)}>
        <SunIcon />
      </button>
      <div className="theme-switch">
        <div className={`theme-switch--ball ${darkTheme ? "right" : ""}`}></div>
      </div>
      <button onClick={() => setDarkTheme(true)}>
        <MoonIcon />
      </button>
    </div>
  );
}

export default Theme;
