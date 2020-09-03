import React from "react";
import Microsoft from "../../../assets/HomePage/Trusted/microsoft.a4ac95d.svg";
import Airbnb from "../../../assets/HomePage/Trusted/airbnb.b562d93.svg";
import Automatic from "../../../assets/HomePage/Trusted/automatic.6156771.svg";
import Bissell from "../../../assets/HomePage/Trusted/bissell.5f96ccb.svg";
import Coty from "../../../assets/HomePage/Trusted/coty.355301a.svg";
import GE from "../../../assets/HomePage/Trusted/ge.e4f1cde.svg";

const Trusted = () => {
  let brandsArray = [Microsoft, Airbnb, GE, Automatic, Bissell, Coty];

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
