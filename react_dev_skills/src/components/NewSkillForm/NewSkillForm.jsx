import React, { useState } from "react";
import "./NewSkillForm.css";

function NewSkillForm({ addSkill }) {
  const [formData, setFormData,] = useState({
    name: "",
    level: "1"
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Changed + to =
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSkill(formData);
    setFormData({
      name: "",
      level: "1" 
    });
  };

    return (
      <form className="NewSkillForm" onSubmit={handleSubmit}>
        <label htmlFor="skillField">Skill</label>
        <input
          id="skillField" 
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="levelField">Level</label>
        <select 
          id="levelField"
          name="level"
          value={formData.level}
          onChange={handleChange}
        >
          {[1, 2, 3, 4, 5].map((level) => (
          <option key={level} value={String(level)}>
            {level}
          </option>
        ))}
        </select>
        <button>ADD SKILL</button>
      </form>
    );
}

export default NewSkillForm;

