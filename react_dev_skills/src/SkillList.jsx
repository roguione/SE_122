import React from "react";
import SkillListItem from "./SkillListItem";

function SkillList() {
    return (
      <ul>
        <SkillListItem name="HTML" level={5} />
        <SkillListItem name="CSS" level={3} />
        <SkillListItem name="JavaScript" level={4} />
        <SkillListItem name="Python" level={2} />
      </ul>
    );
  }

export default SkillList;

