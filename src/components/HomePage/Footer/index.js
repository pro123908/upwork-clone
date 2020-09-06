import React, { useRef, useEffect } from "react";
import {
  linksCompanyArray,
  linksBrowseArray,
  linksResourcesArray,
} from "../../../Data/HomePageData";
// import gsap, { TweenMax, Power3, TimelineMax } from "gsap";

// gsap.registerPlugin(TweenMax, Power3, TimelineMax);

const Footer = () => {
  //   const nonSocialLinksRef = useRef(null);

  //   useEffect(() => {
  //     gsap.fromTo(
  //       nonSocialLinksRef.current,
  //       {
  //         height: "0%",
  //       },
  //       {
  //         height: "100%",
  //         ease: Power3,
  //         duration: 1,
  //       }
  //     );
  //   }, []);

  const linksCompanyArrayContent = linksCompanyArray.map(
    ({ title, route }, index) => (
      <a
        className="footer__links-company-link"
        key={index}
        href={route}
        target="_blank"
      >
        {title}
      </a>
    )
  );

  const linksResourcesArrayContent = linksResourcesArray.map(
    ({ route, title }, index) => (
      <a
        className="footer__links-company-link"
        key={index}
        href={route}
        target="_blank"
      >
        {title}
      </a>
    )
  );

  const linksBrowseArrayContent = linksBrowseArray.map(
    ({ title, route }, index) => (
      <a
        className="footer__links-company-link"
        key={index}
        href={route}
        target="_blank"
      >
        {title}
      </a>
    )
  );

  const openLinks = (e) => {
    console.log("e. target", e.target.nextSibling);

    if (
      e.target.nextSibling &&
      !e.target.nextSibling.classList.contains("footer__links-company-link")
    ) {
      e.target.nextSibling.classList.toggle("hidden");
    } else if (
      e.target.nextSibling &&
      e.target.nextSibling.classList.contains("footer__links-company-link")
    )
      return;

    e.target.parentNode.nextSibling.classList.toggle("hidden");
  };
  return (
    <div className="home-page-footer">
      <div className="footer__small-text bottom-border">
        Looking to hire for long-term or full-time assignments? See how
        <a
          className="footer__small-text-link link"
          href="https://www.upwork.com/i/payroll-client/"
          target="_blank"
        >
          Upwork Payroll
        </a>
        simplifies admin.
      </div>
      <div className="footer__links-area">
        <div
          className="footer__links-company bottom-border"
          onClick={openLinks}
        >
          <div className="footer__links-company-title">
            Company <i class="fas fa-chevron-down show"></i>
          </div>
          <div className="footer__links-company-links hidden">
            {linksCompanyArrayContent}
          </div>
        </div>
        <div
          className="footer__links-company bottom-border"
          onClick={openLinks}
        >
          <div className="footer__links-company-title">
            Resources <i class="fas fa-chevron-down show"></i>
          </div>
          <div className="footer__links-company-links hidden">
            {linksResourcesArrayContent}
          </div>
        </div>

        <div
          className="footer__links-company bottom-border"
          onClick={openLinks}
        >
          <div className="footer__links-company-title">
            Browse <i class="fas fa-chevron-down show"></i>
          </div>
          <div className="footer__links-company-links hidden">
            {linksBrowseArrayContent}
          </div>
        </div>
      </div>

      <div className="footer__social-links-area ">
        <div className="footer__social-links ">
          <div className="footer__social-links-text">Follow us</div>
          <div className="footer__social-links-container">
            <a
              className="footer__social-link"
              href="https://www.facebook.com/upwork"
              target="_blank"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              className="footer__social-link"
              href="https://www.linkedin.com/company/upwork/"
              target="_blank"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              className="footer__social-link"
              href="https://twitter.com/Upwork"
              target="_blank"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              className="footer__social-link"
              href="https://www.youtube.com/channel/UCvxGFOnwUBDHHcxuPqhe4CQ"
              target="_blank"
            >
              <i class="fab fa-youtube"></i>
            </a>
            <a
              className="footer__social-link"
              href="https://www.instagram.com/upworkinc/"
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer__social-links">
          <div className="footer__social-links-text">Mobile app</div>

          <div className="footer__social-links-container">
            <a
              className="footer__social-link"
              href="https://apps.apple.com/us/developer/upwork-global-inc/id329377609"
              target="_blank"
            >
              <i class="fab fa-apple"></i>
            </a>
            <a
              className="footer__social-link"
              href="https://play.google.com/store/apps/dev?id=8802639270489632480"
              target="_blank"
            >
              <i class="fab fa-android"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">© 2015 - 2020 Upwork® Global Inc.</div>
    </div>
  );
};

export default Footer;
