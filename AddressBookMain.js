"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddressBook_1 = require("./AddressBook");
var ContactPerson_1 = require("./ContactPerson");
var readline = require("readline-sync");
var AddressBookMain = /** @class */ (function () {
    function AddressBookMain() {
        this.addressBooks = new Map();
    }
    AddressBookMain.prototype.start = function () {
        console.log("Welcome to Address Book Program");
        while (true) {
            console.log("\nMenu:");
            console.log("1. Add New Address Book");
            console.log("2. Select Address Book");
            console.log("3. Display All Address Books");
            console.log("4. Exit");
            var choice = readline.question("Enter your choice: ");
            switch (choice) {
                case "1":
                    this.createAddressBook();
                    break;
                case "2":
                    this.selectAddressBook();
                    break;
                case "3":
                    this.displayAllAddressBook();
                    break;
                case "4":
                    console.log("Exiting Address Book Program. Goodbye!");
                    return;
                default:
                    console.log("Invalid choice. Try again.");
            }
        }
    };
    AddressBookMain.prototype.createAddressBook = function () {
        var name = readline.question("Enter the name of the new Address Book: ");
        if (this.addressBooks.has(name)) {
            console.log("Address Book already exists.");
        }
        else {
            this.addressBooks.set(name, new AddressBook_1.AddressBook());
            console.log("Address Book created successfully!");
        }
    };
    AddressBookMain.prototype.selectAddressBook = function () {
        var name = readline.question("Enter the name of the Address Book: ");
        var addressBook = this.addressBooks.get(name);
        if (!addressBook) {
            console.log("Address Book not found.");
            return;
        }
        while (true) {
            console.log("\nManaging Address Book: ".concat(name));
            console.log("1. Add Contact");
            console.log("2. Display Contacts");
            console.log("3. Back");
            var choice = readline.question("Enter your choice: ");
            switch (choice) {
                case "1":
                    var newContact = this.getContactDetails(false); // Ensure we return a complete contact
                    addressBook.addContact(newContact);
                    break;
                case "2":
                    addressBook.displayContacts();
                    break;
                case "3":
                    console.log("Existing from address book..!");
                    return;
                default:
                    console.log("Invalid choice. Try again.");
            }
        }
    };
    AddressBookMain.prototype.displayAllAddressBook = function () {
        if (this.addressBooks.size === 0) {
            console.log("Address Books Not Found.!");
        }
        else {
            this.addressBooks.forEach(function (addressBook, name) {
                console.log("Address Book Name: ".concat(name));
                addressBook.displayContacts();
            });
        }
    };
    AddressBookMain.prototype.getContactDetails = function (isPartial) {
        if (isPartial === void 0) { isPartial = false; }
        var details = {};
        var fields = ["First Name", "Last Name", "Address", "City", "State", "Zip", "Phone Number", "Email"];
        fields.forEach(function (field) {
            var value = readline.question("Enter ".concat(field, ": "));
            if (isPartial && value.trim() === "")
                return; // Skip for partial updates
            details[field.toLowerCase().replace(/ /g, "")] = field === "Zip" ? parseInt(value) : value;
        });
        if (!isPartial) {
            // Return a complete ContactPerson object
            return new ContactPerson_1.ContactPerson(details.firstname, details.lastname, details.address, details.city, details.state, details.zip, details.phonenumber, details.email);
        }
        // Return a partial contact for updates
        return details;
    };
    return AddressBookMain;
}());
// Start the program
new AddressBookMain().start();
