import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact-dto';
import { Contact } from './interfaces/contact.interface';

@Controller('contacts')
export class ContactController {
    constructor(private readonly contactService: ContactService) {}

    @Get()
    async getContacts(): Promise<any[]> {
        return this.contactService.getContacts();
    }

    @Get(':id')
    async getContact(@Param('id') id): Promise<Contact> {
        return this.contactService.getContact(id);
    }

    @Post()
    create(@Body() contact: CreateContactDto): Promise<Contact> {
        return this.contactService.saveContact(contact);
    }

    @Put(':id')
    async editContact(@Param('id') id, @Body() contact: CreateContactDto): Promise<Contact> {
        return this.contactService.editContact(id, contact);
    }

    // @Delete()
    // deleteContact(): string {
    //     return this.contactService.getContact();
    // }
}
