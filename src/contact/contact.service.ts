import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact-dto';
import { Contact } from './interfaces/contact.interface';
import * as uuidv4 from 'uuid/v4';
import { log } from 'console';

@Injectable()
export class ContactService {
  contacts: Contact[] = [];

  async getContact(id: string): Promise<Contact> {
    log(id);
    let contact = this.contacts.find(item => {
      return item.id === id;
    });
    return contact;
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

  async editContact(
    id: string,
    editContact: CreateContactDto,
  ): Promise<Contact> {
    let contact: Contact = null;
    this.contacts.forEach(item => {
      if (item.id === id) {
        item.name = editContact.name;
        item.lastName = editContact.lastName;
        item.phone = editContact.phone;
        item.age = editContact.age;
        contact = item;
      }
    });
    return contact;
  }

  async deleteContact(id: string): Promise<boolean> {
    let pos = 0;
    let res = false;
    this.contacts.forEach((item, index) => {
      if( item.id === id) {
        pos = index;
        res = true;
      }
    });
    this.contacts.splice(pos, 1);
    return res;
  }
}
