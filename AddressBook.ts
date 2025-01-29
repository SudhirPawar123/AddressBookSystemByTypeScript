import { ContactPerson } from "./ContactPerson";
import * as readline from "readline-sync";

export class AddressBook {
  private contacts: ContactPerson[] = [];

  addContact(contact: ContactPerson): void {
    if (this.contacts.some(c => c.firstName === contact.firstName && c.lastName === contact.lastName)) {
      console.log("Duplicate contact entry is not allowed.");
      return;
    }
    this.contacts.push(contact);
    console.log("Contact added successfully!");
  }

  editContact(name: string): void {
    const contact = this.contacts.find(c => c.firstName === name);
    if (!contact) {
      console.log("Contact not found.");
      return;
    }
    console.log("Editing contact: ", contact);
    Object.keys(contact).forEach(key => {
      const newValue = readline.question(`Enter new ${key} (leave empty to keep unchanged): `);
      if (newValue) (contact as any)[key] = key === "zip" ? parseInt(newValue) : newValue;
    });
    console.log("Contact updated successfully!");
  }

  deleteContact(name: string): void {
    this.contacts = this.contacts.filter(c => c.firstName !== name);
    console.log("Contact deleted successfully!");
  }

  displayContacts(): void {
    if (this.contacts.length === 0) {
      console.log("No contacts available.");
      return;
    }
    console.log("Contacts:");
    this.contacts.forEach(contact => console.log(contact));
  }

  searchByCityOrState(location: string): ContactPerson[] {
    return this.contacts.filter(c => c.city === location || c.state === location);
  }

  getCountByCityOrState(location: string): number {
    return this.contacts.filter(c => c.city === location || c.state === location).length;
  }

}
