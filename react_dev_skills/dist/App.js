import react from "react";
import "./styles.css";
import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";
export default function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("h1", null, "React Dev Skills"), /*#__PURE__*/React.createElement(SkillList, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(NewSkillForm, null));
}