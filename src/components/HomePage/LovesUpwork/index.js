import React from "react";
import ClearlyRated from "../../../assets/HomePage/LovesUpwork/logo-clearlyrated.fc7c326.svg";
import Nasdaq from "../../../assets/HomePage/LovesUpwork/nasdaq.8eaf489.svg";
import GE from "../../../assets/HomePage/LovesUpwork/logo-ge.587a356.svg";
import GoDaddy from "../../../assets/HomePage/LovesUpwork/logo-GoDaddy.4c40e6d.svg";

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
      <div className="loves-upwork__nasdaq">
        <div className="loves-upwork__nasdaq-logo">
          <img src={Nasdaq} />
        </div>
        <div className="loves-upwork__nasdaq-heading">
          How Nasdaq Differentiates Itself As a Digital Media Leader
        </div>
        <div className="loves-upwork__nasdaq-description">
          Nasdaq’s social team lacked in-house skills and ability to scale up
          and down quickly. With Upwork, they adopted a hybrid workforce model
          where the in-house team <br /> leads the creative vision and leverages
          flexible talent to execute within their area of expertise...
        </div>
        <div className="loves-upwork__nasdaq-read">
          Read full customer story
        </div>
        <div className="loves-upwork__nasdaq-stats">
          <div className="loves-upwork__nasdaq-stat">
            <div className="loves-upwork__nasdaq-statUpper">20K to 3M+</div>
            <div className="loves-upwork__nasdaq-statBottom">
              social followers growth
            </div>
          </div>

          <div className="loves-upwork__nasdaq-stat">
            <div className="loves-upwork__nasdaq-statUpper">80-100/month</div>
            <div className="loves-upwork__nasdaq-statBottom">
              Facebook Live shows produced
            </div>
          </div>

          <div className="loves-upwork__nasdaq-stat">
            <div className="loves-upwork__nasdaq-statUpper">1 Emmy winning</div>
            <div className="loves-upwork__nasdaq-statBottom">
              program produced
            </div>
          </div>
        </div>
      </div>
      <div className="loves-upwork__GE-GoDaddy">
        <div className="loves-upwork__GE">
          <div className="loves-upwork__GE-logo">
            <img src={GE} />
          </div>
          <div className="loves-upwork__GE-heading">
            How GE Designed an Agile, High-Performance Talent Strategy
          </div>
          <div className="loves-upwork__GE-description">
            To serve customers in 180+ countries across its business segments,
            General Electric needed quick and reliable access...
          </div>
          <div className="loves-upwork__GE-read">Read full customer story</div>
        </div>
        <div className="loves-upwork__GoDaddy">
          <div className="loves-upwork__GoDaddy-logo">
            <img src={GoDaddy} />
          </div>
          <div className="loves-upwork__GoDaddy-heading">
            How GoDaddy Stays on Top with a Flexible, Global Workforce
          </div>
          <div className="loves-upwork__GoDaddy-description">
            GoDaddy’s local business listings program had an unreliable talent
            source that slowed growth and efficiency. On Upwork, their time...
          </div>
          <div className="loves-upwork__GoDaddy-read">
            Read full customer story
          </div>
        </div>
      </div>
    </div>
  );
};

export default LovesUpwork;
