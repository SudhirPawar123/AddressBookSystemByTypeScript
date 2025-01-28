import { IContactPerson } from "./IContactPerson";

export class ContactPerson implements IContactPerson {
    constructor(
        public firstname: string,
        public lastname: string,
        public address: string,
        public city: string,
        public state: string,
        public zip: number,
        public phonenumber: string,
        public email: string
    ) {}

    public toString(): string {
        return `[${this.firstname} ${this.lastname}, ${this.address}, ${this.city}, ${this.state}, ${this.zip}, ${this.phonenumber}, ${this.email}]`;
    }
}