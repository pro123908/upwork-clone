import React from "react";
import NavbarLogo from "../../assets/Navbar/navbar-logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={NavbarLogo} />
      </div>
      <div className="navbar__input">
        <i class="fas fa-search icon-green"></i>
        <i class="fas fa-chevron-down icon-green"></i>
        <input type="text" placeholder="Find Professionals & Agencies" />
      </div>
      <div className="navbar__buttons">
        <button className="button navbar__button">How it works</button>
        <button className="button navbar__button">solutions</button>
        <button className="button navbar__button">Enterprise</button>
        <button className="button navbar__button">Log in</button>
        <button className="button navbar__button green-button">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
