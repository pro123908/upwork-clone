import React from "react";
import HireGuideline from "./HireGuideline";

import { hireGuidelineArray } from "../../Data/HomePageData";

const HireGuidelines = () => {
  let hireGuidelineContent = hireGuidelineArray.map(
    ({ image, title, desc }, index) => (
      <HireGuideline image={image} title={title} desc={desc} key={index} />
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
