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
      console.log("3. Display All Address Books");
      console.log("4. Exit");
      const choice = readline.question("Enter your choice: ");

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
      console.log("3. Edit Contact");
      console.log("4. Back");
      const choice = readline.question("Enter your choice: ");

      switch (choice) {
        case "1":
            const newContact = this.getContactDetails(false) as ContactPerson; 
            addressBook.addContact(newContact);
          break;
        case "2":
          addressBook.displayContacts();
          break;
          case "3" :
            const editName = readline.question("Enter the name of the contact to edit (First Last): ");
            const updatedDetails = this.getContactDetails(true);
            addressBook.editContact(editName, updatedDetails);
          break;
        case "4":
            console.log("Existing from address book..!");
          return;
        default:
          console.log("Invalid choice. Try again.");
      }
    }
  }

  displayAllAddressBook(): void{
    if(this.addressBooks.size===0){
      console.log("Address Books Not Found.!");
    }
    else{
    this.addressBooks.forEach((addressBook, name) => {
      console.log(`Address Book Name: ${name}`);
      addressBook.displayContacts();
    });
  }
    
  }

  getContactDetails(isPartial: boolean = false): Partial<ContactPerson> | ContactPerson {
    const details: any = {};
    const fields = ["First Name", "Last Name", "Address", "City", "State", "Zip", "Phone Number", "Email"];

    fields.forEach((field) => {
      const value = readline.question(`Enter ${field}: `);
      if (isPartial && value.trim() === "") return; 
      details[field.toLowerCase().replace(/ /g, "")] = field === "Zip" ? parseInt(value) : value;
    });

    if (!isPartial) {       
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
  return details;
  }
}

new AddressBookMain().start();
