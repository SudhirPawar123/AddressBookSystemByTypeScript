"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressBook = void 0;
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        this.contacts = [];
    }
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
    AddressBook.prototype.editContact = function (name, updatedContact) {
        var contact = this.contacts.find(function (c) { return "".concat(c.firstname, " ").concat(c.lastname) === name; });
        if (!contact) {
            console.log("Contact not found.");
            return;
        }
        Object.assign(contact, updatedContact);
        console.log("Contact updated successfully!");
    };
    return AddressBook;
}());
exports.AddressBook = AddressBook;
