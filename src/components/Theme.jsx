import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "../assets/Icons";
import "./Theme.css";

function Theme() {
  const DARK_THEME =
    JSON.parse(localStorage.getItem("DARK_THEME")) !== null
      ? JSON.parse(localStorage.getItem("DARK_THEME"))
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [darkTheme, setDarkTheme] = useState(DARK_THEME);

  document.body.className = darkTheme ? "dark-theme" : "";

  useEffect(() => {
    localStorage.setItem("DARK_THEME", JSON.stringify(darkTheme));
  }, [darkTheme]);

  return (
    <button className="btn-theme-box" onClick={() => setDarkTheme(!darkTheme)}>
      {!darkTheme && <SunIcon />}
      {darkTheme && <MoonIcon />}
    </button>
  );
}

export default Theme;
