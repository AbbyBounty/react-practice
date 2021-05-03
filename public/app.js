"use strict";

var _templateObject = _taggedTemplateLiteral([""], [""]);

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var personName = "abby";
var age = 20;
var address = "pune";

var template = React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Person"),
  React.createElement(
    "div",
    null,
    React.createElement("strong", null, "name"),
    " ",
    personName
  ),
  React.createElement(
    "div",
    null,
    React.createElement("strong", null, "age"),
    " ",
    age
  ),
  React.createElement(
    "div",
    null,
    React.createElement("strong", null, "address"),
    " ",
    address
  )
);

var root = document.getElementById("app");

ReactDOM.render(template, root)(_templateObject);
