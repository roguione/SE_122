import React from "react";
import "./NewSkillForm.css";

function NewSkillForm() {
  return (
    <form className="NewSkillForm">
      <label htmlFor="skillField">Skill</label>
      <input id="skillField" type="text" />
      
      <label htmlFor="levelField">Level</label>
      <select id="levelField">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      
      <button>Skills</button>
    </form>
  );
}

export default NewSkillForm;
