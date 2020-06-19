import {User} from '../User';

export abstract class Admin {
  abstract createUserForCompany(userEmailAccount: string, firstname: string,
                                lastname: string, password: string, company: string, tags?: string []): Promise<User>;
}
