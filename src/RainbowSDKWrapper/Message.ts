import {Contact} from './Contact';

export class Message {
  receiptStatus: number;
  side: string;
  from: Contact;
  date: Date;
  data: string;
}
