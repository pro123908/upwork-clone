import React from "react";

const BetterMatchBox = ({ image, heading, text }) => {
  return (
    <div className="better-match-box">
      <div className="better-match-box__image-container">
        <img src={image} className="better-match-box__image" />
      </div>
      <div className="better-match-box__description">
        <div className="better-match-box__heading">{heading}</div>
        <div className="better-match-box__text">{text}</div>
      </div>
    </div>
  );
};

export default BetterMatchBox;
