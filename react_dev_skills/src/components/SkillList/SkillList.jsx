import React, { useState } from "react";
import SkillListItem from "../SkillListItem/SkillListItem";
import "./SkillList.css"; 

function SkillList() {
  
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 }
  ]);

  return (
    <ul>
      {skills.map((skill, index) => (
        <SkillListItem key={index} name={skill.name} level={skill.level} />
      ))}
    </ul>
  );
}

export default SkillList;
