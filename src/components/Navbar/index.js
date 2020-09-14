import React from "react";
import NavbarLogo from "../../assets/Navbar/navbar-logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="mobile-nav">
        <input
          type="checkbox"
          className="mobile-nav__checkbox"
          id="mobile-nav__toggle"
        />

        <label htmlFor="mobile-nav__toggle">
          <i class="fas fa-bars mobile-nav__icon"></i>
        </label>

        <div className="mobile-nav__container">Data</div>
      </div>
      <div className="navbar__logo">
        <img src={NavbarLogo} />
      </div>
      <div className="navbar__input">
        <i class="fas fa-search icon-green"></i>
        <i class="fas fa-chevron-down icon-green"></i>
        <input type="text" placeholder="Find Professionals & Agencies" />
      </div>
      <div className="navbar__buttons">
        <button className="button navbar__button only-large-devices">
          How it works
        </button>
        <button className="button navbar__button only-large-devices">
          solutions
        </button>
        <button className="button navbar__button only-large-devices">
          Enterprise
        </button>
        <button className="button navbar__button">Log in</button>
        <button className="button navbar__button navbar__button--green green-button">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
