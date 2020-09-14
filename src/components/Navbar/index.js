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
        <div className="mobile-nav__toggler">
          <div className="mobile-nav__container">
            <div className="mobile-nav__header">
              <div className="mobile-nav__logo">
                <img src={NavbarLogo} />
              </div>
              <label htmlFor="mobile-nav__toggle">
                <i class="fas fa-times mobile-nav__exit-icon"></i>
              </label>
            </div>
            <div className="mobile-nav__input">
              <i class="fas fa-search icon-green"></i>
              <i class="fas fa-chevron-down icon-green"></i>
              <input type="text" placeholder="Find Professionals & Agencies" />
            </div>
            <div className="mobile-nav__links">
              <div className="mobile-nav__link">How it works</div>
              <div className="mobile-nav__link">Enterprise</div>
              <div className="mobile-nav__link">Login</div>
              <div className="mobile-nav__link">Browse</div>
              <div className="mobile-nav__link">Solutions</div>
              <div className="mobile-nav__link">About Us</div>
              <div className="mobile-nav__link">Contact Us</div>
              <div className="mobile-nav__link">Careers</div>
            </div>
            <div className="mobile-nav__sign-up">
              <button className="button green-button"> Sign Up</button>
            </div>
          </div>
        </div>
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
