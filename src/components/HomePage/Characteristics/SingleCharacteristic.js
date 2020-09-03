import React from "react";

const SingleCharacteristic = ({ image, title, text, linkText, reverse }) => {
  let flowDirection = reverse ? "row-reverse" : "";
  return (
    <div className={`characteristic ${flowDirection}`}>
      <div className="characteristic__content">
        <div className="characteristic__line"></div>
        <div className="characteristic__heading">{title}</div>
        <div className="characteristic__text">{text}</div>
        <div className="characteristic__link">
          <i className="fas fa-arrow-right characteristic__icon"></i>
          {linkText}
        </div>
      </div>
      <div
        className={`characteristic__image-container ${reverse ? "mr-2" : ""}`}
      >
        <img src={image} className="characteristic__image" />
      </div>
    </div>
  );
};

export default SingleCharacteristic;
