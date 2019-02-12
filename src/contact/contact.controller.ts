import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contacts')
export class ContactController {
    constructor(private readonly contactService: ContactService) {}

    @Get()
    getContacts(): void {
        this.contactService.getContacts();
    }

    @Get(':id')
    getContact(@Param('id') id): string {
        return '' + this.contactService.getContact(id);
    }

    // @Post()
    // saveContact(): string {
    //     return this.contactService.saveContact();
    // }

    // @Put()
    // editContact(): string {
    //     return this.contactService.getContact();
    // }

    // @Delete()
    // deleteContact(): string {
    //     return this.contactService.getContact();
    // }
}
