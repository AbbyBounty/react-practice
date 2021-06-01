"use strict";

var Header = function Header(props) {

    return React.createElement(
        "div",
        { className: "title" },
        React.createElement(
            "h1",
            null,
            props.title
        )
    );
};

ReactDOM.render(React.createElement(Header, { title: "this is a title" }), document.getElementById('app'));
