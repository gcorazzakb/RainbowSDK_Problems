import {Bubble} from '../Bubble';
import {Contact} from '../Contact';

export abstract class Bubbles {
  abstract updateAvatarForBubble(urlAvatar: string, bubble: Bubble): Promise<any>;

  abstract getBubbles(): [];

  abstract promoteContactToModerator(contact: Contact, bubble: Bubble): Promise<Bubble>;

  abstract updateCustomDataForBubble(data: any, bubble: Bubble): Promise<any>;

  abstract createBubble(name: string, description: string, boolWithHistory?: boolean, disableNotifications?: boolean,
                        urlAvatar?: string, autoAcceptInvitation?: boolean): Promise<Bubble>;

  abstract inviteContactToBubble(contact: Contact, bubble: Bubble,
                                 boolAsModerator?: boolean, boolWithInvitation?: boolean): Promise<Bubble>;
}
