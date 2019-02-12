import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact-dto';
import { Observable, of } from 'rxjs';

@Controller('contacts')
export class ContactController {
    constructor(private readonly contactService: ContactService) {}

    @Get()
    getContacts():  Observable<any[]> {
        return of(this.contactService.getContacts());
    }

    @Get(':id')
    getContact(@Param('id') id): string {
        return '' + this.contactService.getContact(id);
    }

    @Post()
    create(@Body() contact: CreateContactDto): void {
        return this.contactService.saveContact();
    }

    // @Put()
    // editContact(): string {
    //     return this.contactService.getContact();
    // }

    // @Delete()
    // deleteContact(): string {
    //     return this.contactService.getContact();
    // }
}
