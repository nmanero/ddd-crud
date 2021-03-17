import {UserFactory} from "./user/user.factory";

export class CustomDomainFactory {
    private name: string;
    private body: any;
    private valueObjects : { [key: string]: any } = {
        "users": new UserFactory()
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
