import React from "react";
import BetterMatchBox from "./BetterMatchBox";
import { BetterMatchArray } from "../../../Data/HomePageData";
const BetterMatch = () => {
  let BetterMatchContent = BetterMatchArray.map(
    ({ image, heading, text }, index) => (
      <BetterMatchBox key={index} image={image} heading={heading} text={text} />
    )
  );
  return (
    <div className="home-page-better-match">
      <div className="better-match__line"></div>
      <div className="better-match__heading">
        How we give you a better match
      </div>
      <div className="better-match__box">{BetterMatchContent}</div>
    </div>
  );
};

export default BetterMatch;
