"use strict";

var person = {};

var submitData = function submitData(e) {
    console.log('dubmit data');

    var personName = e.target.elements.personName.value;
    var personAddress = e.target.elements.personAddress.value;

    person.name = personName;
    person.address = personAddress;
    // console.log("name" + name)
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
                "Name: ",
                React.createElement("input", { type: "text", name: "personName" }),
                ''
            ),
            React.createElement(
                "div",
                null,
                "Address: ",
                React.createElement("input", { type: "text", name: "personAddress" }),
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
                "Person details "
            ),
            person.name && React.createElement(
                "div",
                null,
                "Name: ",
                person.name,
                " "
            ),
            person.address && React.createElement(
                "div",
                null,
                "Address: ",
                person.address,
                " "
            )
        )
    );

    ReactDOM.render(template, document.getElementById("app"));
};

render();
