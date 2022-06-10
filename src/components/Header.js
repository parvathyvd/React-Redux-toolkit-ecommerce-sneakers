import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header>
        <Navbar />
        <Cart />
      </header>
    </>
  );
};

export default Header;
