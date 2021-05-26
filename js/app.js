"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(name, address, phone) {
        _classCallCheck(this, Person);

        console.log("inside ctor");
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

    _createClass(Person, [{
        key: "printInfo",
        value: function printInfo() {
            console.log(this.name + this.address + this.phone);
        }
    }, {
        key: "getDescription",
        value: function getDescription() {
            console.log(this.address);
        }
    }]);

    return Person;
}();

var person = new Person("abby", "pune", "090900");
person.printInfo();
person.getDescription();
