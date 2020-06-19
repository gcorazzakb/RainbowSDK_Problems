import {Contact} from './Contact';
import {Bubble} from './Bubble';
import {Message} from './Message';

export class Conversation {
  contact: Contact;
  filterName: string;
  room: Bubble;
  messages: Message[];
  name: { value: string };
  lastModification: Date;
  lastMessageText: string;
}
