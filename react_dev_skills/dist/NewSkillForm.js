import React from "react";
function NewSkillForm() {
  return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "skill"
  }, "Skill:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "skill",
    name: "skill"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "level"
  }, "Level:"), /*#__PURE__*/React.createElement("select", {
    id: "level",
    name: "level"
  }, /*#__PURE__*/React.createElement("option", {
    value: "1"
  }, "1"), /*#__PURE__*/React.createElement("option", {
    value: "2"
  }, "2"), /*#__PURE__*/React.createElement("option", {
    value: "3"
  }, "3"), /*#__PURE__*/React.createElement("option", {
    value: "4"
  }, "4"), /*#__PURE__*/React.createElement("option", {
    value: "5"
  }, "5")), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "ADD SKILL"));
}
export default NewSkillForm;