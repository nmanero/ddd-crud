import { ValueObject } from '../valueobject.interface';
import { UserFactory } from './user.valueobject'


export class ValueObjectsFactory {
    private name: string;
    private body: any;
    private valueObjects : { [key: string]: ValueObject } = {
        "user": new UserFactory()
    }
  
    constructor(commandName: string, body: any) {
      this.name = commandName;
      this.body = body;
    }
}