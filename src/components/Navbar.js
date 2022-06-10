import React, { useState } from "react";
import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onMenuClick = () => {
    setShowMenu((prev) => !prev);
  };
  const onMenuClose = () => {
    setShowMenu((prev) => !prev);
  };
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
        <div className="menu" onClick={onMenuClick}>
          <img src={menu} alt="menu" />
        </div>
        <div className="logo-mb">
          <img className="logo-img-mb" src={logo} alt="logo" />
        </div>
        {showMenu && (
          <div className="nav-list-mb">
            <ul className="ul-list-mb">
              <div className="menu-close" onClick={onMenuClose}>
                <img className="close-img" src={close} alt="" />
              </div>
              <div className="menu-mb-list">
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
              </div>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
