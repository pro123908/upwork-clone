import React from "react";
import Desktop from "../../../assets/HomePage/Categories/development-desktop.29e32ce.svg";

const CategoryBox = ({ image, text }) => {
  return (
    <div className="category-box">
      <img src={image} className="category-box__image" />
      <div className="category-box__text">{text}</div>
    </div>
  );
};

export default CategoryBox;
