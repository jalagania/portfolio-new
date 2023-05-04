import { useState } from "react";
import { MoonIcon, SunIcon } from "../assets/Icons";
import "./Theme.css";

function Theme() {
  const [darkTheme, setDarkTheme] = useState(false);

  document.body.className = darkTheme ? "dark-theme" : "";

  return (
    <button className="btn-theme-box" onClick={() => setDarkTheme(!darkTheme)}>
      {!darkTheme && <SunIcon />}
      {darkTheme && <MoonIcon />}
    </button>
  );
}

export default Theme;
