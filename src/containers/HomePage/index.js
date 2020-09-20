import React from "react";
import Landing from "../../components/HomePage/Landing";
import Categories from "../../components/HomePage/Categories";
import Trusted from "../../components/HomePage/Trusted";
import HireScope from "../../components/HomePage/HireScope";
import Characteristics from "../../components/HomePage/Characteristics";
import BetterMatch from "../../components/HomePage/BetterMatch";
import InDemand from "../../components/HomePage/InDemand";
import LovesUpwork from "../../components/HomePage/LovesUpwork";
import Skills from "../../components/HomePage/Skills";
import Banner from "../../components/HomePage/Banner";
import Footer from "../../components/HomePage/Footer";
import Navbar from "../../components/Navbar";

const HomePage = ({ firebase }) => {
  console.log(firebase);
  return (
    <div className="upwork-home-page">
      <Navbar showSearch showNavLinks showMobileNav />
      <Landing />
      <Categories />
      <Trusted />
      <HireScope />
      <Characteristics />
      <BetterMatch />
      <InDemand />
      <LovesUpwork />
      <Skills />
      <Banner />
      <Footer />
    </div>
  );
};

export default HomePage;
