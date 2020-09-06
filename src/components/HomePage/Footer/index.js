import React from "react";
import {
  linksCompanyArray,
  linksBrowseArray,
  linksResourcesArray,
} from "../../../Data/HomePageData";

const Footer = () => {
  const linksCompanyArrayContent = linksCompanyArray.map((link, index) => (
    <div className="footer__links-company-link" key={index}>
      {link}
    </div>
  ));

  const linksResourcesArrayContent = linksResourcesArray.map((link, index) => (
    <div className="footer__links-company-link" key={index}>
      {link}
    </div>
  ));

  const linksBrowseArrayContent = linksBrowseArray.map((link, index) => (
    <div className="footer__links-company-link" key={index}>
      {link}
    </div>
  ));
  return (
    <div className="home-page-footer">
      <div className="footer__small-text">
        Looking to hire for long-term or full-time assignments? See how{" "}
        <span className="footer__small-text-link">Upwork Payroll</span>{" "}
        simplifies admin.
      </div>
      <div className="footer__links-area">
        <div className="footer__links-company">
          <div className="footer__links-company-title">Company</div>
          <div className="footer__links-company-links">
            {linksCompanyArrayContent}
          </div>
        </div>
        <div className="footer__links-company">
          <div className="footer__links-company-title">Resources</div>
          <div className="footer__links-company-links">
            {linksResourcesArrayContent}
          </div>
        </div>

        <div className="footer__links-company">
          <div className="footer__links-company-title">Browse</div>
          <div className="footer__links-company-links">
            {linksBrowseArrayContent}
          </div>
        </div>
      </div>

      <div className="footer__social-links-area">
        <div className="footer__social-links">
          <div className="footer__social-links-text">Follow us</div>
          <div className="footer__social-link">
            <i class="fab fa-facebook-f"></i>
          </div>
          <div className="footer__social-link">
            <i class="fab fa-linkedin-in"></i>
          </div>
          <div className="footer__social-link">
            <i class="fab fa-twitter"></i>
          </div>
          <div className="footer__social-link">
            <i class="fab fa-youtube"></i>
          </div>
          <div className="footer__social-link">
            <i class="fab fa-instagram"></i>
          </div>
        </div>
        <div className="footer__social-links">
          <div className="footer__social-links-text">Mobile app</div>

          <div className="footer__social-link">
            <i class="fab fa-apple"></i>
          </div>

          <div className="footer__social-link">
            <i class="fab fa-android"></i>
          </div>
        </div>
      </div>
      <div className="footer__bottom">© 2015 - 2020 Upwork® Global Inc.</div>
    </div>
  );
};

export default Footer;
