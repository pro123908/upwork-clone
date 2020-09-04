import React from "react";
import CategoryBox from "./CategoryBox";
import { categoriesArray } from "../../../Data/HomePageData";

const Categories = () => {
  let categoriesContent = categoriesArray.map(({ text, image }, index) => (
    <CategoryBox key={index} text={text} image={image} />
  ));

  return (
    <div className="home-page-categories">
      <div className="categories__heading">Find quality talent or agencies</div>
      <div className="categories__container">{categoriesContent}</div>
      <div className="categories__footer">
        Don’t see what you’re looking for?
        <span className="categories__link"> See all categories</span>
      </div>
    </div>
  );
};

export default Categories;
