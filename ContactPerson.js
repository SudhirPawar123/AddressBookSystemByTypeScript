"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactPerson = void 0;
var ContactPerson = /** @class */ (function () {
    function ContactPerson(firstname, lastname, address, city, state, zip, phonenumber, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phonenumber = phonenumber;
        this.email = email;
    }
    ContactPerson.prototype.toString = function () {
        return "[".concat(this.firstname, " ").concat(this.lastname, ", ").concat(this.address, ", ").concat(this.city, ", ").concat(this.state, ", ").concat(this.zip, ", ").concat(this.phonenumber, ", ").concat(this.email, "]");
    };
    return ContactPerson;
}());
exports.ContactPerson = ContactPerson;
