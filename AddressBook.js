"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressBook = void 0;
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        this.contacts = [];
    }
    // Add a new contact
    AddressBook.prototype.addContact = function (contact) {
        if (this.contacts.find(function (c) { return c.firstname === contact.firstname && c.lastname === contact.lastname; })) {
            console.log("Duplicate contact found. Cannot add.");
            return;
        }
        this.contacts.push(contact);
        console.log("Contact added successfully!");
    };
    AddressBook.prototype.displayContacts = function () {
        console.log("Address Book:");
        if (this.contacts.length === 0) {
            console.log("No contacts available.");
        }
        else {
            this.contacts.forEach(function (contact) { return console.log(contact.toString()); });
        }
    };
    return AddressBook;
}());
exports.AddressBook = AddressBook;
