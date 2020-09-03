import React from "react";

const Landing = () => {
  return (
    <div className="home-page-landing">
      <div className="landing__heading">
        In-demand talent on demand.
        <div className="landing__heading-sub">
          Upwork is how.<sup className="landing__heading-tm">&trade;</sup>
        </div>
      </div>
      <div className="landing__description">
        Hire proven pros with confidence using the world’s largest, remote
        talent platform.
      </div>

      <div className="landing__buttons">
        <button className="button landing__button landing__button-1">
          Get Started
        </button>
        <button className="button landing__button landing__button-2">
          Watch Demo
        </button>
      </div>
    </div>
  );
};

export default Landing;
