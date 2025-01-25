// src/ContactPerson.ts
export class ContactPerson {
    constructor(
      public firstname: string,
      public lastname: string,
      public address: string,
      public city: string,
      public state: string,
      public zip: number,
      public phonenumber: string,
      public email: string
    ) {
      this.firstname=firstname;
      this.lastname=lastname;
      this.address=address;
      this.city=city;
      this.state=state;
      this.zip=zip;
      this.phonenumber=phonenumber;
      this.email=email;
    }
  
    // Override toString for better display
    toString(): string {
      return `[ ${this.firstname} ,${this.lastname}, ${this.address}, ${this.city}, ${this.state}, ${this.zip}, ${this.phonenumber}, ${this.email} ]`;
    }
  }
  