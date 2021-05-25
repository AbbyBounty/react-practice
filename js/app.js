"use strict";

console.log('hrllo');

var i = 0;

var plus = function plus() {
    i = i + 1;
    render();
};
var minus = function minus() {
    i = i - 1;
    render();
};

var double = function double() {
    i = i * 2;
    render();
};
var triple = function triple() {
    i = i * 3;
    render();
};

var reset = function reset() {
    i = 0;
    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h3",
            null,
            "App4 "
        ),
        React.createElement(
            "div",
            null,
            "Count: ",
            i
        ),
        React.createElement(
            "button",
            { onClick: plus },
            "plus"
        ),
        React.createElement(
            "button",
            { onClick: minus },
            "minus"
        ),
        React.createElement("hr", null),
        React.createElement(
            "button",
            { onClick: double },
            "double"
        ),
        React.createElement(
            "button",
            { onClick: triple },
            "triple"
        ),
        React.createElement("hr", null),
        React.createElement(
            "button",
            { onClick: reset },
            "reset"
        )
    );

    ReactDOM.render(template, document.getElementById("app"));
};

render();
