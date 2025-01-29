"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressBook = void 0;
var readline = require("readline-sync");
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        this.contacts = [];
    }
    AddressBook.prototype.addContact = function (contact) {
        if (this.contacts.some(function (c) { return c.firstName === contact.firstName && c.lastName === contact.lastName; })) {
            console.log("Duplicate contact entry is not allowed.");
            return;
        }
        this.contacts.push(contact);
        console.log("Contact added successfully!");
    };
    AddressBook.prototype.editContact = function (name) {
        var contact = this.contacts.find(function (c) { return c.firstName === name; });
        if (!contact) {
            console.log("Contact not found.");
            return;
        }
        console.log("Editing contact: ", contact);
        Object.keys(contact).forEach(function (key) {
            var newValue = readline.question("Enter new ".concat(key, " (leave empty to keep unchanged): "));
            if (newValue)
                contact[key] = key === "zip" ? parseInt(newValue) : newValue;
        });
        console.log("Contact updated successfully!");
    };
    AddressBook.prototype.deleteContact = function (name) {
        this.contacts = this.contacts.filter(function (c) { return c.firstName !== name; });
        console.log("Contact deleted successfully!");
    };
    AddressBook.prototype.displayContacts = function () {
        if (this.contacts.length === 0) {
            console.log("No contacts available.");
            return;
        }
        console.log("Contacts:");
        this.contacts.forEach(function (contact) { return console.log(contact); });
    };
    AddressBook.prototype.searchByCityOrState = function (location) {
        return this.contacts.filter(function (c) { return c.city === location || c.state === location; });
    };
    return AddressBook;
}());
exports.AddressBook = AddressBook;
