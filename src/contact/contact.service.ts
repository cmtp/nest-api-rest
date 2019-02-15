import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateContactDto } from './dto/create-contact-dto';
import { Contact } from './interfaces/contact.interface';
import * as uuidv4 from 'uuid/v4';

@Injectable()
export class ContactService {
  contacts: Contact[];

  async getContact(id: string): Promise<Contact> {
    let contact = this.contacts.filter(item => {
      item.id === id;
    });
    return contact[0];
  }

  async getContacts(): Promise<Contact[]> {
    return this.contacts;
  }

  async saveContact(contact: CreateContactDto): Promise<Contact> {
    let newContact = {
      id: uuidv4(),
      name: contact.name,
      lastName: contact.lastName,
      age: contact.age,
      phone: contact.phone,
    };
    this.contacts.push(newContact);
    return newContact;
  }

  editContact(): void {}

  deleteContact(): void {}
}
