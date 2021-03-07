import { ValueObject } from '../valueobject.interface';
import { UserFactory } from './user.valueobject'


export class CustomObjectsFactory {
    private name: string;
    private body: any;
    private valueObjects : { [key: string]: ValueObject } = {
        "user": new UserFactory()
        //Add new custom value objects here, pointing to their factory
    }
  
    constructor(commandName: string, body: any) {
      this.name = commandName;
      this.body = body;
    }
  
    instantiate() {
        if (this.valueObjects.hasOwnProperty(this.name)) {
            const factory = this.valueObjects[this.name];
            return factory.create(this.body);
        } else
            throw "Value Object not found " + this.name;
    }
}