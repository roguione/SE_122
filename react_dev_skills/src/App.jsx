import "./App.css";
import "./components/SkillList/SkillList.css";
import SkillList from "./components/SkillList/SkillList";
import NewSkillForm from "./components/NewSkillForm/NewSkillForm";

const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

function App() {
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <hr />
      <SkillList />
      <hr />
      <NewSkillForm />
    </div>
  );
}

export default App;

