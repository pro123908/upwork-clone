import React from "react";
import HireGuideline from "./HireGuideline";

import Talent from "../../assets/HomePage/BetterMatch/talentNetwork.svg";
import Instantly from "../../assets/HomePage/BetterMatch/instantly.svg";
import OnePlace from "../../assets/HomePage/BetterMatch/onePlace.svg";

const HireGuidelines = () => {
  let hireGuidelineArray = [
    {
      image: Talent,
      title: "Find what you need",
      desc:
        "Choose from specialized freelancers and agencies with 5,000+ skills.",
    },
    {
      image: Instantly,
      title: "Post today, hire tomorrow",
      desc: "Get custom quotes right away on terms you negotiate directly.",
    },
    {
      image: OnePlace,
      title: "Engage with confidence",
      desc:
        "Only pay for work you authorize, with secure billing and invoices.",
    },
  ];

  let hireGuidelineContent = hireGuidelineArray.map(
    ({ image, title, desc }) => (
      <HireGuideline image={image} title={title} desc={desc} />
    )
  );
  return (
    <div className="upwork-hire-guidelines">
      <div className="upwork-hire-guidelines__heading">
        More than 60k jobs are posted on Upwork every week
      </div>
      <div className="upwork-hire-guidelines__container">
        {hireGuidelineContent}
      </div>
    </div>
  );
};

export default HireGuidelines;
