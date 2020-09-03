import React from "react";
import Landing from "../../components/HomePage/Landing";
import Categories from "../../components/HomePage/Categories";
import Trusted from "../../components/HomePage/Trusted";
import HireScope from "../../components/HomePage/HireScope";
import Characteristics from "../../components/HomePage/Characteristics";

const HomePage = () => {
  return (
    <div className="upwork-home-page">
      <Landing />
      <Categories />
      <Trusted />
      <HireScope />
      <Characteristics />
    </div>
  );
};

export default HomePage;
