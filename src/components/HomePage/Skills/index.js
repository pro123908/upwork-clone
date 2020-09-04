import React from "react";
import {
  topSkillsArray,
  trendingSkillsArray,
  topSkillsUSArray,
  topCitiesUSArray,
} from "../../../Data/HomePageData";
import SkillsList from "./SkillsList";

const Skills = () => {
  return (
    <div className="home-page-skills">
      <SkillsList title="Top Skills" skillsArray={topSkillsArray} />
      <SkillsList title="Trending Skills" skillsArray={trendingSkillsArray} />
      <SkillsList title="Top Skills in US" skillsArray={topSkillsUSArray} />
      <SkillsList title="Top Cities in US" skillsArray={topCitiesUSArray} />
      <button class="button multi-button white-button skills__top-button">
        Browse US Freelancers
      </button>
    </div>
  );
};

export default Skills;
