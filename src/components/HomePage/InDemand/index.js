import React from "react";
import WebDev from "../../../assets/HomePage/Indemand/web-dev.72c8316.svg";
import MobDev from "../../../assets/HomePage/Indemand/mobile-dev.5c07b90.svg";
import Design from "../../../assets/HomePage/Indemand/design.1c1a75b.svg";
import Writing from "../../../assets/HomePage/Indemand/writing.db05e7e.svg";
import Marketing from "../../../assets/HomePage/Indemand/marketing.799abf4.svg";
import Accounting from "../../../assets/HomePage/Indemand/accounting.9366f11.svg";
const InDemand = () => {
  let inDemandProfessionsArray = [
    {
      image: WebDev,
      title: "Web Dev",
    },
    {
      image: MobDev,
      title: "Mobile Dev",
    },
    {
      image: Design,
      title: "Design",
    },
    {
      image: Writing,
      title: "Writing",
    },
    {
      image: Marketing,
      title: "Marketing",
    },
    {
      image: Accounting,
      title: "Accounting",
    },
  ];

  let inDemandProfessionsContent = inDemandProfessionsArray.map(
    ({ title, image }, index) => (
      <div className="in-demand__profession" key={index}>
        <img className="in-demand__profession-image" src={image} />
        <div className="in-demand__profession-title">{title}</div>
      </div>
    )
  );
  return (
    <div className="home-page-in-demand">
      <div className="in-demand__line"></div>
      <div className="in-demand__heading">
        Connect with in-demand professionals
      </div>
      <div className="in-demand__projects">
        <div className="in-demand__projects-type">
          <i class="fas fa-check-circle in-demand__projects-icon"></i>Complex
          projects
        </div>
        <div className="in-demand__projects-type">
          <i class="fas fa-check-circle in-demand__projects-icon"></i>Long-term
          contracts
        </div>
        <div className="in-demand__projects-type">
          <i class="fas fa-check-circle in-demand__projects-icon"></i>Short-term
          jobs
        </div>
      </div>
      <div className="in-demand__professions-box">
        {inDemandProfessionsContent}
        <div className="in-demand__profession in-demand__profession-all">
          See all 80+ categories
        </div>
      </div>
      <div className="in-demand__buttons">
        <button class="button multi-button green-button in-demand__button">
          Get Started
        </button>
        <button class="button multi-button white-button in-demand__button">
          Watch Demo
        </button>
      </div>
    </div>
  );
};

export default InDemand;
