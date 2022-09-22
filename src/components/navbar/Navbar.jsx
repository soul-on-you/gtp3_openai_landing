import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__links">
        <div className="navbar__links__logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="navbar__links__container">
          <Menu />
        </div>
      </div>
      <div className="navbar__buttons">
        <button className="navbar__buttons__login">Sign in</button>
        <button className="navbar__buttons__signup">Sign Up</button>
      </div>
      <div className="navbar__hamburger">
        {menu ? (
          <RiCloseLine color="#fff" onClick={() => setMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" onClick={() => setMenu(true)} />
        )}
        {menu && (
          <div className="navbar__hamburger__container scale-up-center">
            <div className="navbar__hamburger__container__links">
              <Menu />
            </div>
            <div className="navbar__hamburger__container__buttons">
              <button className="navbar__buttons__login">Sign in</button>
              <button className="navbar__buttons__signup">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
