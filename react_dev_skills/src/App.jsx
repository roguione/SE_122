import React, { useState } from "react";
import "./App.css";
import "./components/SkillList/SkillList.css";
import SkillList from "./components/SkillList/SkillList";
import NewSkillForm from "./components/NewSkillForm/NewSkillForm";

function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);

  const addSkill = (newSkill) => {
    setSkills((prevSkills) => [...prevSkills, newSkill]);
  };

  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <hr />
      <SkillList skills={skills} />
      <hr />
      <NewSkillForm addSkill={addSkill} />
    </div>
  );
}

export default App;

