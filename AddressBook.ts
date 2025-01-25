import { ContactPerson } from "./ContactPerson";

export class AddressBook {
  private contacts: ContactPerson[] = [];

 
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

  editContact(name: string, updatedContact: Partial<ContactPerson>): void {
    const contact = this.contacts.find((c) => `${c.firstname} ${c.lastname}` === name);
    if (!contact) {
      console.log("Contact not found.");
      return;
    }
    Object.assign(contact, updatedContact);
    console.log("Contact updated successfully!");
  }
}
