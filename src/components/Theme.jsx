import { useState } from "react";
import { MoonIcon, SunIcon } from "../assets/Icons";
import "./Theme.css";

function Theme() {
  const [darktheme, setDarktheme] = useState(false);

  document.body.className = darktheme ? "dark-theme" : "";

  return (
    <div className="theme-box">
      <SunIcon onClick={() => setDarktheme(false)} />
      <div className="theme-switch">
        <div className="theme-switch--ball"></div>
      </div>
      <MoonIcon onClick={() => setDarktheme(true)} />
    </div>
  );
}

export default Theme;
