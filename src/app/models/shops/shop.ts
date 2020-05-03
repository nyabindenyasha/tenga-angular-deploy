export class Shops {

    id: number;
    name: string;
    description: string;
    logoUrl: string;

    addressId?: number;
    contactId?: number;
    address: Address;
    contact: Contact;

}

export class Contact {
    id: number;
    areaCode: string;
    serviceProviderCode: string;
    lineNumber: string;
}

export class Address {
    id: number;
    street: string;
    city: string;
    province: string
}
