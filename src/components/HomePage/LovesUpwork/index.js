import React from "react";
import ClearlyRated from "../../../assets/HomePage/LovesUpwork/logo-clearlyrated.fc7c326.svg";

const LovesUpwork = () => {
  return (
    <div className="home-page-loves-upwork">
      <div className="loves-upwork__line"></div>
      <div className="loves-upwork__heading">See why companies love Upwork</div>
      <div className="loves-upwork__client-rate">
        <span>Client rate Upwork</span>
        <span>
          <span className="loves-upwork__rating">4.6/5</span>
          <span className="loves-upwork__stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </span>
        </span>
        <span>
          <span>average from</span>
          <span className="loves-upwork__reviews">1,382,381 reviews</span>
        </span>
        <img src={ClearlyRated} className="loves-upwork__logo" />
      </div>
    </div>
  );
};

export default LovesUpwork;
