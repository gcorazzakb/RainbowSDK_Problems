import {CodeLabelState} from '../CodeLabelState';

export abstract class Connection {
  state: string;

  abstract signin(email: string, password: string): Promise<CodeLabelState>;

  abstract signout(): Promise<CodeLabelState>;

  abstract getState(): string;
}
