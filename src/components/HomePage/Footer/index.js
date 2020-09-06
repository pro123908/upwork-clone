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
        <div className="footer__links-browse"></div>
      </div>
    </div>
  );
};

export default Footer;
