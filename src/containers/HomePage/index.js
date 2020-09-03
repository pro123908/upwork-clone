import React from "react";
import Landing from "../../components/HomePage/Landing";
import Categories from "../../components/HomePage/Categories";
import Trusted from "../../components/HomePage/Trusted";

const HomePage = () => {
  return (
    <div className="upwork-home-page">
      <Landing />
      <Categories />
      <Trusted />
    </div>
  );
};

export default HomePage;
