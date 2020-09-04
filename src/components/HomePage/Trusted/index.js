import React from "react";
import { brandsArray } from "../../../Data/HomePageData";
const Trusted = () => {
  let brandsContent = brandsArray.map((brandImage, index) => (
    <div key={index} className="trusted__brand">
      <img src={brandImage} className="trusted__image" />
    </div>
  ));
  return (
    <div className="home-page-trusted">
      <div className="trusted__text">Trusted by 5M+ businesses</div>
      <div className="trusted__brands">{brandsContent}</div>
    </div>
  );
};

export default Trusted;
