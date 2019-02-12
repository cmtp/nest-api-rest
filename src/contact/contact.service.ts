import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactService {
    getContact(): string {
        return 'Contact';
    }
}
