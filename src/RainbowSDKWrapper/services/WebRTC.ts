import {Conversation} from '../Conversation';
import {Contact} from '../Contact';
import {RbCall} from '../RbCall';
import {CodeLabelState} from '../CodeLabelState';

export abstract class WebRTC {
  RAINBOW_ONWEBRTCCALLSTATECHANGED: any;
  RAINBOW_ONWEBRTCTMEDIAERROROCCURED: any; // really?
  RAINBOW_ONWEBRTCTRACKCHANGED: string;

  abstract canMakeAudioVideoCall(): boolean;

  abstract callInAudio(contact: Contact, subject?: string): CodeLabelState;  // ok or error obj
  abstract callInAudio(contact: Contact, subject?: string): CodeLabelState;  // ok or error obj
  abstract callInVideo(contact: Contact, subject?: string): CodeLabelState;

  abstract release(call: RbCall): CodeLabelState; // ok or error obj
  abstract answerInAudio(call: RbCall): CodeLabelState;

  abstract muteAudioCall(conversation: Conversation): CodeLabelState;  // ok or error obj
  abstract unmuteAudioCall(conversation: Conversation): CodeLabelState; // ok or error obj
  abstract useMicrophone(microphoneId: string): CodeLabelState; // ok or error obj
  abstract useSpeaker(strSpeakerId: string): CodeLabelState; // ok or error obj
}
