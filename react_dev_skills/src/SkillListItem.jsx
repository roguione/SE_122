import React from "react";
import "./SkillListItem.css";

function SkillListItem({ name, level }) {
    return (
      <li className="SkillListItem">
        <span>{name}</span>
        <span className="level">{level}</span>
      </li>
    );
  }

export default SkillListItem;

