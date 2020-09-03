import React from "react";
import CategoryBox from "./CategoryBox";
import Desktop from "../../../assets/HomePage/Categories/development-desktop.29e32ce.svg";
import Design from "../../../assets/HomePage/Categories/design-creative-desktop.109353b.svg";
import Writing from "../../../assets/HomePage/Categories/writing-desktop.1b7ea27.svg";
import Sales from "../../../assets/HomePage/Categories/marketing-sales-desktop.ebb7dd9.svg";
import Support from "../../../assets/HomePage/Categories/admin-support-desktop.ff2e0d4.svg";
import CService from "../../../assets/HomePage/Categories/customer-service-desktop.22b35df.svg";
import Analytics from "../../../assets/HomePage/Categories/data-science-desktop.b430512.svg";
import Architecture from "../../../assets/HomePage/Categories/engineering-architecture-desktop.85b023c.svg";

const Categories = () => {
  const categoriesArray = [
    { text: "Web, Mobile & Software Dev", image: Desktop },
    { text: "Design & Creative", image: Design },
    { text: "Writing", image: Writing },
    { text: "Sales & Marketing", image: Sales },
    { text: "Admin Support", image: Support },
    { text: "Customer Service", image: CService },
    { text: "Data Science & Analytics", image: Analytics },
    { text: "Engineering & Architecture", image: Architecture },
  ];

  let categoriesContent = categoriesArray.map(({ text, image }) => (
    <CategoryBox text={text} image={image} />
  ));

  return (
    <div className="home-page-categories">
      <div className="categories__heading">Find quality talent or agencies</div>
      <div className="categories__container">{categoriesContent}</div>
      <div className="categories__footer">
        Don’t see what you’re looking for?
        <span className="categories__link">See all categories</span>
      </div>
    </div>
  );
};

export default Categories;
