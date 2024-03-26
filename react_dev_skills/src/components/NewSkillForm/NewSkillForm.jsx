import React from "react";
import "./NewSkillForm.css";

function NewSkillForm() {
    return (
      <form className="NewSkillForm">
        <label>Skill</label>
        <input type="text" />
        <label>Level</label>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button>ADD SKILL</button>
      </form>
    );
  }

export default NewSkillForm;

