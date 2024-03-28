import React, { useState } from "react";
import SkillListItem from "../SkillListItem/SkillListItem";
import "./SkillList.css"; 

function SkillList({ skills }) {

  return (
    <ul>
      {skills.map((skill, index) => (
        <SkillListItem key={index} name={skill.name} level={skill.level} />
      ))}
    </ul>
  );
}

export default SkillList;
