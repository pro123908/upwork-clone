import React from "react";
import BetterMatchBox from "./BetterMatchBox";
import Talent from "../../../assets/HomePage/BetterMatch/talentNetwork.svg";
import Instantly from "../../../assets/HomePage/BetterMatch/instantly.svg";
import OnePlace from "../../../assets/HomePage/BetterMatch/onePlace.svg";
import ClearView from "../../../assets/HomePage/BetterMatch/clearView.svg";

const BetterMatch = () => {
  let BetterMatchArray = [
    {
      image: Talent,
      heading: "Tap into an amazing talent network",
      text:
        "Get unmatched quality from proven independent professionals and specialized agencies.",
    },
    {
      image: Instantly,
      heading: "Get a smarter shortlist, instantly",
      text:
        "Our instant matching tech generates a shortlist based on the criteria you select.",
    },
    {
      image: OnePlace,
      heading: "Manage everything in one place",
      text:
        "Manage shortlisting, interviewing, onboarding, and payments all from Upwork.",
    },
    {
      image: ClearView,
      heading: "Get a clear view of the work",
      text:
        "Easily track project milestones and progress toward the completion of your jobs.",
    },
  ];

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
