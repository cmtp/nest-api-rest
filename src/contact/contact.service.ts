import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ContactService {
    
    getContact(id: number): number {
        return id;
    }
    
    getContacts(): any[] {
        return [];
    }

    saveContact(): void {

    }

    editContact(): void {

    }

    deleteCOntact(): void {

    }
}
