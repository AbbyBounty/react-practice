"use strict";

var person = {};

var submitData = function submitData(e) {
    console.log('dubmit data');

    var title = e.target.elements.title.value;
    var descriptionn = e.target.elements.descriptionn.value;

    person.title = title;
    person.description = descriptionn;
    // console.log("title" + title)
    // prevent default submission
    e.preventDefault();
    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h3",
            null,
            "Form "
        ),
        React.createElement(
            "form",
            { onSubmit: submitData },
            React.createElement(
                "div",
                null,
                "title: ",
                React.createElement("input", { type: "text", name: "title" }),
                ''
            ),
            React.createElement(
                "div",
                null,
                "description: ",
                React.createElement("input", { type: "text", name: "descriptionn" }),
                ''
            ),
            React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { type: "submit" },
                    "Submit"
                )
            )
        ),
        React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "category details "
            ),
            person.title && React.createElement(
                "div",
                null,
                "title: ",
                person.title,
                " "
            ),
            person.description && React.createElement(
                "div",
                null,
                "description: ",
                person.description,
                " "
            )
        )
    );

    ReactDOM.render(template, document.getElementById("app"));
};

render();
