'use strict';

console.log('hrllo');

var person = {
    name: 'Person2',
    address: 'pune'

};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h3',
        null,
        'App1 '
    ),
    React.createElement(
        'div',
        null,
        'Name: ',
        person.name
    ),
    React.createElement(
        'div',
        null,
        'phone: ',
        person.address
    ),
    person.email && React.createElement(
        'div',
        null,
        'Email : ',
        person.email
    )
);

var root = document.getElementById("app");

ReactDOM.render(template, root);

{/* <div>phone: {person.email ? person.email : 'N/A'}</div> */}
