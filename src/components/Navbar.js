import React from "react";
import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";

const Navbar = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <img className="logo-img" src={logo} alt="logo" />
        </div>
        <div className="nav-list">
          <ul className="ul-list">
            <a href="#">
              <li>Collections</li>
            </a>
            <a href="#">
              <li>Men</li>
            </a>
            <a href="#">
              <li>Women</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </nav>
      <div className="nav-bar-mobile">
        <div className="menu">
          <img src={menu} alt="menu" />
        </div>
        <div className="logo-mb">
          <img className="logo-img-mb" src={logo} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
