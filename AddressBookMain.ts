import { AddressBook } from "./AddressBook";
import { ContactPerson } from "./ContactPerson";
import * as readline from "readline-sync";

class AddressBookMain {
  private addressBooks: Map<string, AddressBook> = new Map();

  start(): void {
    console.log("Welcome to Address Book Program");

    while (true) {
      console.log("\nMenu:");
      console.log("1. Add New Address Book");
      console.log("2. Select Address Book");
      console.log("3. Exit");
      const choice = readline.question("Enter your choice: ");

      switch (choice) {
        case "1":
          this.createAddressBook();
          break;
        case "2":
          this.selectAddressBook();
          break;
        case "3":
          console.log("Exiting Address Book Program. Goodbye!");
          return;
        default:
          console.log("Invalid choice. Try again.");
      }
    }
  }

  createAddressBook(): void {
    const name = readline.question("Enter the name of the new Address Book: ");
    if (this.addressBooks.has(name)) {
      console.log("Address Book already exists.");
    } else {
      this.addressBooks.set(name, new AddressBook());
      console.log("Address Book created successfully!");
    }
  }

  selectAddressBook(): void {
    const name = readline.question("Enter the name of the Address Book: ");
    const addressBook = this.addressBooks.get(name);
    if (!addressBook) {
      console.log("Address Book not found.");
      return;
    }

    while (true) {
      console.log(`\nManaging Address Book: ${name}`);
      console.log("1. Add Contact");
      console.log("2. Display Contacts");
      console.log("3. Back");
      const choice = readline.question("Enter your choice: ");

      switch (choice) {
        case "1":
            const newContact = this.getContactDetails(false) as ContactPerson; // Ensure we return a complete contact
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
  }

  getContactDetails(isPartial: boolean = false): Partial<ContactPerson> | ContactPerson {
    const details: any = {};
    const fields = ["First Name", "Last Name", "Address", "City", "State", "Zip", "Phone Number", "Email"];

    fields.forEach((field) => {
      const value = readline.question(`Enter ${field}: `);
      if (isPartial && value.trim() === "") return; // Skip for partial updates
      details[field.toLowerCase().replace(/ /g, "")] = field === "Zip" ? parseInt(value) : value;
    });

    if (!isPartial) {
        // Return a complete ContactPerson object
        return new ContactPerson(
          details.firstname,
          details.lastname,
          details.address,
          details.city,
          details.state,
          details.zip,
          details.phonenumber,
          details.email
        );
      }
      // Return a partial contact for updates
  return details;
  }
}

// Start the program
new AddressBookMain().start();
