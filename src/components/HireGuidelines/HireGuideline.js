import React from "react";

const HireGuideline = ({ image, title, desc }) => {
  return (
    <div className="upwork-hire-guideline">
      <div className="upwork-hire-guideline__image-container">
        <img src={image} className="upwork-hire-guideline__image" />
      </div>
      <div className="upwork-hire-guideline__text">
        <div className="upwork-hire-guideline__title">{title}</div>
        <div className="upwork-hire-guideline__desc">{desc}</div>
      </div>
    </div>
  );
};

export default HireGuideline;
