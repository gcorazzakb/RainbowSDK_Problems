import {Im} from './services/Im';
import {WebRTC} from './services/WebRTC';
import {Bubbles} from './services/Bubbles';
import {Conversations} from './services/Conversations';
import {Contacts} from './services/Contacts';
import {Admin} from './services/Admin';
import {FileStorage} from './services/FileStorage';
import {Connection} from './services/Connection';

export abstract class RainbowSDK {
  public im: Im;
  public webRTC: WebRTC;
  public bubbles: Bubbles;
  public conversations: Conversations;
  public contacts: Contacts;
  public admin: Admin;
  public fileStorage: FileStorage;
  public connection: Connection;

  public RAINBOW_ONREADY: string;
  public RAINBOW_ONLOADED: string;

  abstract load(): void;

  abstract initialize(applicationID: string, applicationSecret: string): Promise<any>;

  abstract setVerboseLog(b: boolean): void;

  abstract version(): string;
}
