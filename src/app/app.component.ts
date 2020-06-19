import {Component} from '@angular/core';
import rainbow from 'rainbow-web-sdk';
import {RainbowSDK} from '../RainbowSDKWrapper/RainbowSDK';
import {CodeLabelState} from '../RainbowSDKWrapper/CodeLabelState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rainbowSDK: RainbowSDK = rainbow;
  title = 'Rainbow Web SDK - Angular Starter Kit';
  version = `Package version: ${this.rainbowSDK.version()}`;

  private _applicationID = '';
  private _applicationSecret = '';
  private _email = '';
  private _password = '';
  private _jidToCall = '';
  private _speakerID = '';

  call() {
    document.addEventListener(this.rainbowSDK.webRTC.RAINBOW_ONWEBRTCTMEDIAERROROCCURED, console.error);
    document.addEventListener(this.rainbowSDK.webRTC.RAINBOW_ONWEBRTCTRACKCHANGED, console.error);

    this.listSpeaker();
    this.rainbowSDK.webRTC.useSpeaker(this._speakerID);

    this.rainbowSDK.initialize(this._applicationID, this._applicationSecret).then(v1 => {
      console.log('initialized');
      this.rainbowSDK.connection.signin(this._email, this._password).then((v2: CodeLabelState) => {
        console.log('logged in');
        const contact = this.rainbowSDK.contacts.getContactByJID(this._jidToCall);
        console.log('contact', contact);
        if (this.rainbowSDK.webRTC.canMakeAudioVideoCall()) {
          this.rainbowSDK.webRTC.callInVideo(contact);
        } else {
          console.log('Cant call');
        }
      });
    });
  }

  listSpeaker() {
    navigator.mediaDevices.getUserMedia({audio: true, video: true}).then((stream) => {
      /* Stream received which means that the user has authorized the application to access
       to the audio and video devices. Local stream can be stopped at this time */
      stream.getTracks().forEach((track) => {
        track.stop();
      });

      /*  Get the list of available devices */
      navigator.mediaDevices.enumerateDevices().then((devices) => {

        /* Do something for each device (e.g. add it to a selector list) */
        devices.forEach((device) => {
          switch (device.kind) {
            case 'audioinput':
              // This is a device of type 'microphone'
              break;
            case 'audiooutput':
              // This is a device of type 'speaker'
              console.log(device);
              break;
            case 'videoinput':
              // This is a device of type 'camera'
              break;
            default:
              break;
          }
        });

      }).catch(console.error);
    }).catch(console.error);
  }
}
