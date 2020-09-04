import React from "react";

const SkillsList = ({ title, skillsArray }) => {
  let topSkillsContent = skillsArray.map((skill, index) => (
    <div className="skills__top-list-item" key={index}>
      {skill}
    </div>
  ));

  return (
    <div>
      <div className="skills__top">
        <div className="skills__top-header">{title}</div>
        <div className="skills__top-list">{topSkillsContent}</div>
      </div>
    </div>
  );
};

export default SkillsList;
