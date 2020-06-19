import {Conversation} from '../Conversation';
import {Bubble} from '../Bubble';
import {Message} from '../Message';

export abstract class Im {
  RAINBOW_ONNEWIMMESSAGERECEIVED: any;

  abstract sendMessageToBubble(bubble: Bubble, msg: string): Promise<any> ;

  abstract getMessagesFromConversation(conversation: Conversation, howMany?: number): Promise<any> ;

  abstract sendMessageToConversation(conversation: Conversation, msg: string): void ;

  abstract markMessageFromConversationAsRead(conversation: Conversation, message: Message): any ;

}
