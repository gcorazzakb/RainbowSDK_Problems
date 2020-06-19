export class User {
  companyId: string;
  companyName: string;
  country: string;
  displayName: string;
  emails: any[];
  firstName: string;
  id: string;
  language: string;
  lastName: string;
  loginEmail: string;
  nickName: string;
  password: string;
  phoneNumbers: any[];
  roles: string[];
  // tslint:disable-next-line:variable-name
  jid_im: string;

  constructor(emails: any[], firstName: string, password: string) {
    this.emails = emails;
    this.firstName = firstName;
    this.password = password;
  }
}
