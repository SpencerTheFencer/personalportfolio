import React, { useState } from "react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);

    let page = document.querySelector("#pageContainer");
    page.classList.toggle("blurPage");

    let navLinks = document.querySelectorAll(".navLinks li");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `slideLeft 0.75s ease forwards ${index / 7 + 0.20}s`;
      }
    });
  };

  return (
    <div id="menu">
      <div className={`menuIcon${isMenuOpen ? " menuOpened" : ""}`} onClick={toggleMenu}>
        <div className="hamburger">
          <div id="hamburgerLineTop" />
          <div id="hamburgerLineMiddle" />
          <div id="hamburgerLineBottom" />
        </div>
      </div>
      <div id="menuPanel" className={isMenuOpen ? "menuDisplayed" : "menuHidden"} >
        <ul className="navLinks">
          <li>
            <a className="navLink" href="/">Home</a>
          </li>
          <li>
            <a className="navLink" href="/about">About Me</a>
          </li>
          <li>
            <a className="navLink" href="/skills">Skills</a>
          </li>
          <li>
            <a className="navLink" href="/projects">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
