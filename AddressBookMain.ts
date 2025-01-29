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
      console.log("3. Search Person by City or State Across All Address Books");
      console.log("4. Count Contacts by City or State Across All Address Books");
      console.log("5. Sort Contacts by Name Across All Address Books");
      console.log("6. Sort Contacts by City, State, or Zip Across All Address Books");
      console.log("7. Exit");
      const choice = readline.question("Enter your choice: ");

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
      console.log("2. Edit Contact");
      console.log("3. Delete Contact");
      console.log("4. Display Contacts");
      console.log("5. Back");
      const choice = readline.question("Enter your choice: ");

      switch (choice) {
        case "1":
          const newContact = this.getContactDetails();
          addressBook.addContact(newContact);
          break;
        case "2":
          const editName = readline.question("Enter the first name of the contact to edit: ");
          addressBook.editContact(editName);
          break;
        case "3":
          const deleteName = readline.question("Enter the first name of the contact to delete: ");
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
  }

  searchPersonAcrossAddressBooks(): void {
    const location = readline.question("Enter City or State to search: ");
    let results: ContactPerson[] = [];
    this.addressBooks.forEach(addressBook => {
      results = results.concat(addressBook.searchByCityOrState(location));
    });
    console.log("Search results across all Address Books:", results);
  }

  countContactsAcrossAddressBooks(): void {
    const location = readline.question("Enter City or State to count contacts: ");
    let count = 0;
    this.addressBooks.forEach(addressBook => {
      count += addressBook.getCountByCityOrState(location);
    });
    console.log(`Total contacts in ${location}:`, count);
  }
  sortContactsByNameAcrossAllAddressBooks(): void {
    let allContacts: ContactPerson[] = [];
    this.addressBooks.forEach(addressBook => {
      allContacts = allContacts.concat(addressBook["contacts"]);
    });
    allContacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
    console.log("Sorted Contacts:", allContacts);
  }
  
  sortContactsAcrossAddressBooks(): void {
    console.log("\nSort Contacts By:");
    console.log("1. City");
    console.log("2. State");
    console.log("3. Zip");
    const choice = readline.question("Enter your choice: ");

    let key: "city" | "state" | "zip";

    if (choice === "1") {
        key = "city";
    } else if (choice === "2") {
        key = "state";
    } else if (choice === "3") {
        key = "zip";
    } else {
        console.log("Invalid choice. Returning to menu.");
        return;
    }

    let allContacts: ContactPerson[] = [];
    this.addressBooks.forEach(addressBook => {
        allContacts = allContacts.concat(addressBook["contacts"]);
    });

    allContacts.sort((a, b) =>
        typeof a[key] === "string"
            ? (a[key] as string).localeCompare(b[key] as string)
            : (a[key] as number) - (b[key] as number)
    );

    console.log(`Sorted Contacts by ${key}:`, allContacts);
}


 
  getContactDetails(): ContactPerson {
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
  }
}

new AddressBookMain().start();
