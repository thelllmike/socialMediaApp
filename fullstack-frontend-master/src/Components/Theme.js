import React, { useState } from "react";
import "../Styles/Theme.css";
import logo from "../images/logo.png";
import logoLight from '../images/logo-light.png'

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  };

  const faSun = <i className='fa-solid fa-sun'></i>;
  const faMoon = <i className='fa-solid fa-moon'></i>;
  const logoImg = isDarkMode ? logo : logoLight;

  return (
    <div className="theme">
      <img src={logoImg} alt="Logo" />
      <button className='theme-toggle' onClick={handleToggleMode}>
        {isDarkMode ? faSun : faMoon}
      </button>
    </div>
  );
}

export default ThemeToggle;
