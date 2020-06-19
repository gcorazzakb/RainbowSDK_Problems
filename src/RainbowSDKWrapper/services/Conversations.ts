import {Bubble} from '../Bubble';
import {Contact} from '../Contact';
import {Conversation} from '../Conversation';

export abstract class Conversations {

  abstract getConversationByBubble(bubble: Bubble): any;

  abstract getConversationById(strId: string): any;

  abstract openConversationForContact(contact: Contact): Promise<any>;

  abstract getAllConversations(): [];

  abstract getConversationByBubbleId(dbId: string): Conversation;

}
