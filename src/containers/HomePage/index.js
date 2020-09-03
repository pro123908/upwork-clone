import React from "react";
import Landing from "../../components/HomePage/Landing";
import Categories from "../../components/HomePage/Categories";
import Trusted from "../../components/HomePage/Trusted";
import HireScope from "../../components/HomePage/HireScope";
import Characteristics from "../../components/HomePage/Characteristics";
import BetterMatch from "../../components/HomePage/BetterMatch";

const HomePage = () => {
  return (
    <div className="upwork-home-page">
      <Landing />
      <Categories />
      <Trusted />
      <HireScope />
      <Characteristics />
      <BetterMatch />
    </div>
  );
};

export default HomePage;
