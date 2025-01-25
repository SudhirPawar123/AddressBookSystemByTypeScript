// src/AddressBook.ts
import { ContactPerson } from "./ContactPerson";

export class AddressBook {
  private contacts: ContactPerson[] = [];

  // Add a new contact
  addContact(contact: ContactPerson): void {
    if (this.contacts.find((c) => c.firstname === contact.firstname && c.lastname === contact.lastname)) {
      console.log("Duplicate contact found. Cannot add.");
      return;
    }
    this.contacts.push(contact);
    console.log("Contact added successfully!");
  }

  displayContacts(): void {
    console.log("Address Book:");
    if (this.contacts.length === 0) {
      console.log("No contacts available.");
    } else {
      this.contacts.forEach((contact) => console.log(contact.toString()));
    }
  }
}
