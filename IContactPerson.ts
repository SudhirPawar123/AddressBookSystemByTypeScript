export interface IContactPerson {
    firstname: string;
    lastname: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    phonenumber: string;
    email: string;

    toString(): string;
}