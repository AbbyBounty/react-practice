'use strict';

console.log('hrllo');

var products = [{ id: 1, title: 'product1', description: "des 1", reviews: ["worst"] }, { id: 1, title: 'product1', description: "des 1", reviews: ["worst"] }, { id: 1, title: 'product1', description: "des 1" }, { id: 1, title: 'product1', description: "des 1", reviews: ["worst"] }, { id: 1, title: 'product1', description: "des 1" }];

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h3',
        null,
        'App3 '
    ),
    products.map(function (product) {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                null,
                'title:',
                product.title
            ),
            React.createElement(
                'div',
                null,
                'id:',
                product.id
            ),
            React.createElement(
                'div',
                null,
                'description:',
                product.description
            ),
            product.reviews && React.createElement(
                'div',
                null,
                ' Review : ',
                product.reviews
            ),
            React.createElement('hr', null)
        );
    })
);

var root = document.getElementById("app");

ReactDOM.render(template, root);
