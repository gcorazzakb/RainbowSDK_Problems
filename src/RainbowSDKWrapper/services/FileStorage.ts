import {Bubble} from '../Bubble';

export abstract class FileStorage {
  RAINBOW_ONFILEUPLOADED: any;

  abstract getFilesReceivedInBubble(bubble: Bubble): Promise<any> ;

  abstract downloadFile(fileDescriptor: any): any ;

  abstract getFilesSentInBubble(bubble: Bubble): Promise<[]> ;

  abstract uploadFileToBubble(bubble: Bubble, file: File | string, message?: any): Promise<any>;
}
