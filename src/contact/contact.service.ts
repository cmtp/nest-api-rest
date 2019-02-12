import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactService {
    
    getContact(id: number): number {
        return id;
    }
    
    getContacts(): void {

    }

    saveContact(): void {

    }

    editContact(): void {

    }

    deleteCOntact(): void {

    }
}
