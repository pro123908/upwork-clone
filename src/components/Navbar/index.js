import React, { useEffect, useRef } from "react";
import NavbarLogo from "../../assets/Navbar/navbar-logo.png";
import { navbarDesktopLinks, navbarMobileLinks } from "../../Data/HomePageData";

import gsap, { TweenMax, Power3, TimelineMax } from "gsap";

gsap.registerPlugin(TweenMax, Power3, TimelineMax);

const Navbar = () => {
  const mobileNavContainer = useRef(null);

  const mobileNavContainerTimeline = new TimelineMax({
    defaults: { duration: 0.4 },
  });

  const navbarDesktopLinksContent = navbarDesktopLinks.map(
    ({ title, route }, index) => (
      <a
        href={route}
        key={index}
        target="_blank"
        className="link navbar__button only-large-devices"
      >
        {title}
      </a>
    )
  );

  const navbarMobileLinksContent = navbarMobileLinks.map(
    ({ title, route }, index) => (
      <a
        href={route}
        key={index}
        target="_blank"
        className="link mobile-nav__link"
      >
        {title}
      </a>
    )
  );

  const startAnimation = () => {
    console.log("start");
    mobileNavContainerTimeline.to(
      mobileNavContainer.current,

      {
        width: "100%",
        ease: Power3,
      }
    );

    mobileNavContainerTimeline.restart();
  };

  const endAnimation = () => {
    console.log("end");
    mobileNavContainerTimeline.reverse();
  };
  return (
    <div className="navbar">
      <div className="mobile-nav">
        <input
          type="checkbox"
          className="mobile-nav__checkbox"
          id="mobile-nav__toggle"
        />

        <label htmlFor="mobile-nav__toggle" onClick={startAnimation}>
          <i class="fas fa-bars mobile-nav__icon"></i>
        </label>
        <div className="mobile-nav__toggler" ref={mobileNavContainer}>
          <div className="mobile-nav__container">
            <div className="mobile-nav__header">
              <div className="mobile-nav__logo">
                <img src={NavbarLogo} />
              </div>
              <label htmlFor="mobile-nav__toggle" onClick={endAnimation}>
                <i class="fas fa-times mobile-nav__exit-icon"></i>
              </label>
            </div>
            <div className="mobile-nav__input">
              <i class="fas fa-search icon-green"></i>
              <i class="fas fa-chevron-down icon-green"></i>
              <input type="text" placeholder="Find Professionals & Agencies" />
            </div>
            <div className="mobile-nav__links">{navbarMobileLinksContent}</div>
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
      <div className="navbar__buttons">{navbarDesktopLinksContent}</div>
    </div>
  );
};

export default Navbar;
