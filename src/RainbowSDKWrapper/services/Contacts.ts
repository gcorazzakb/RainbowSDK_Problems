import {Contact} from '../Contact';

export abstract class Contacts {
  abstract getConnectedUser(): Contact;

  abstract getAll(): [];

  abstract getContactByJID(jid: string): Contact ;

  abstract searchByJid(id: string): Promise<Contact> ;

  /*
    getContactByName(contactName) {
      let selectedContact = null;
      /!* Handler called when the user clicks on a contact *!/
      const onContactSelected: function = selectedContactName => {
        selectedContact = this.rainbowSDK.contacts.getContactByName(selectedContactName);
        // Contact not found locally, ask to the server
        if (!selectedContact) {
          this.rainbowSDK.contacts.searchContactByName(selectedContactName).then(contact => {
            selectedContact = contact;

            if (selectedContact) {
              // Ok, we have the
              // contact object
            } else {
              // Strange, no contact with that Id. Are you sure that the id is correct?
            }

          }).catch((err: any) => {
            // Something when wrong with the server. Handle the trouble here
          });
        }
      };
    }*/
}
