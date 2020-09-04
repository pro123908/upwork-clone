import React from "react";
import SingleCharacteristic from "./SingleCharacteristic";
import { characteristicsArray } from "../../../Data/HomePageData";

const Characteristics = () => {
  let characteristicsContent = characteristicsArray.map(
    ({ title, text, linkText, image, reverse }, index) => (
      <SingleCharacteristic
        key={index}
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
