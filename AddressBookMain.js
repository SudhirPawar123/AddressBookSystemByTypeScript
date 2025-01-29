"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddressBook_1 = require("./AddressBook");
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
            console.log("3. Search Person by City or State Across All Address Books");
            console.log("4. Count Contacts by City or State Across All Address Books");
            console.log("5. Sort Contacts by Name Across All Address Books");
            console.log("6. Sort Contacts by City, State, or Zip Across All Address Books");
            console.log("7. Exit");
            var choice = readline.question("Enter your choice: ");
            switch (choice) {
                case "1":
                    this.createAddressBook();
                    break;
                case "2":
                    this.selectAddressBook();
                    break;
                case "3":
                    this.searchPersonAcrossAddressBooks();
                    break;
                case "4":
                    this.countContactsAcrossAddressBooks();
                    break;
                case "5":
                    this.sortContactsByNameAcrossAllAddressBooks();
                    break;
                case "6":
                    this.sortContactsAcrossAddressBooks();
                    break;
                case "7":
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
            console.log("2. Edit Contact");
            console.log("3. Delete Contact");
            console.log("4. Display Contacts");
            console.log("5. Back");
            var choice = readline.question("Enter your choice: ");
            switch (choice) {
                case "1":
                    var newContact = this.getContactDetails();
                    addressBook.addContact(newContact);
                    break;
                case "2":
                    var editName = readline.question("Enter the first name of the contact to edit: ");
                    addressBook.editContact(editName);
                    break;
                case "3":
                    var deleteName = readline.question("Enter the first name of the contact to delete: ");
                    addressBook.deleteContact(deleteName);
                    break;
                case "4":
                    addressBook.displayContacts();
                    break;
                case "5":
                    return;
                default:
                    console.log("Invalid choice. Try again.");
            }
        }
    };
    AddressBookMain.prototype.searchPersonAcrossAddressBooks = function () {
        var location = readline.question("Enter City or State to search: ");
        var results = [];
        this.addressBooks.forEach(function (addressBook) {
            results = results.concat(addressBook.searchByCityOrState(location));
        });
        console.log("Search results across all Address Books:", results);
    };
    AddressBookMain.prototype.countContactsAcrossAddressBooks = function () {
        var location = readline.question("Enter City or State to count contacts: ");
        var count = 0;
        this.addressBooks.forEach(function (addressBook) {
            count += addressBook.getCountByCityOrState(location);
        });
        console.log("Total contacts in ".concat(location, ":"), count);
    };
    AddressBookMain.prototype.sortContactsByNameAcrossAllAddressBooks = function () {
        var allContacts = [];
        this.addressBooks.forEach(function (addressBook) {
            allContacts = allContacts.concat(addressBook["contacts"]);
        });
        allContacts.sort(function (a, b) { return a.firstName.localeCompare(b.firstName); });
        console.log("Sorted Contacts:", allContacts);
    };
    AddressBookMain.prototype.sortContactsAcrossAddressBooks = function () {
        console.log("\nSort Contacts By:");
        console.log("1. City");
        console.log("2. State");
        console.log("3. Zip");
        var choice = readline.question("Enter your choice: ");
        var key;
        if (choice === "1") {
            key = "city";
        }
        else if (choice === "2") {
            key = "state";
        }
        else if (choice === "3") {
            key = "zip";
        }
        else {
            console.log("Invalid choice. Returning to menu.");
            return;
        }
        var allContacts = [];
        this.addressBooks.forEach(function (addressBook) {
            allContacts = allContacts.concat(addressBook["contacts"]);
        });
        allContacts.sort(function (a, b) {
            return typeof a[key] === "string"
                ? a[key].localeCompare(b[key])
                : a[key] - b[key];
        });
        console.log("Sorted Contacts by ".concat(key, ":"), allContacts);
    };
    AddressBookMain.prototype.getContactDetails = function () {
        return {
            firstName: readline.question("Enter First Name: "),
            lastName: readline.question("Enter Last Name: "),
            address: readline.question("Enter Address: "),
            city: readline.question("Enter City: "),
            state: readline.question("Enter State: "),
            zip: parseInt(readline.question("Enter Zip: ")),
            phoneNumber: readline.question("Enter Phone Number: "),
            email: readline.question("Enter Email: ")
        };
    };
    return AddressBookMain;
}());
new AddressBookMain().start();
