import React from "react";
import SingleCharacteristic from "./SingleCharacteristic";

import Rating from "../../../assets/HomePage/Characteristics/proven-talent.5561582.svg";

import Agencies from "../../../assets/HomePage/Characteristics/agencies.99374b0.svg";
import Airplanes from "../../../assets/HomePage/Characteristics/airplanes.016ed7b.svg";

import SpecializedProfile from "../../../assets/HomePage/Characteristics/specialized-profile-MD.2c77114.svg";

const Characteristics = () => {
  let characteristicsArray = [
    {
      title: "Get proven talent",
      text:
        "Connect with in-demand, independent professionals and specialized agencies—and see why businesses give Upwork talent a 4.8 out of 5 rating based on 1M+ reviews.",
      linkText: "Explore the talent on Upwork",
      image: Rating,
    },
    {
      title: "Engage on your terms",
      text:
        "From one-offs to longer-term contracts (through Upwork Payroll), you can tailor your engagements to achieve your business goals and scale dynamically as business needs change.",
      linkText: "See what you can do",
      image: Airplanes,
      reverse: true,
    },
    {
      title: "Hire with confidence",
      text:
        "With 1M+ reviews, get a reliable evaluation of candidates’ previous work from businesses like yours. Plus, unlike other solutions, only see client reviews from legitimate jobs completed though Upwork.",
      linkText: "See the reviews",
      image: SpecializedProfile,
    },
    {
      title: "Enterprise-ready",
      text:
        "Get white-glove support for your job postings, shortlisting, onboarding, and driving company adoption. Plus, get a solution customized to your existing contingent worker policies, providing the protection you need—from compliance to results risk limitation to IP and data security.",
      linkText: "Upwork for enterprise",
      image: Agencies,
      reverse: true,
    },
  ];

  let characteristicsContent = characteristicsArray.map(
    ({ title, text, linkText, image, reverse }) => (
      <SingleCharacteristic
        title={title}
        text={text}
        linkText={linkText}
        image={image}
        reverse={reverse}
      />
    )
  );
  return (
    <div className="home-page-characteristics">{characteristicsContent}</div>
  );
};

export default Characteristics;
