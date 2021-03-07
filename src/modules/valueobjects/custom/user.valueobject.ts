import { ValueObject } from "../valueobject.interface";
import { Domain } from "../../domains/domain.interface";

export class User implements ValueObject {
    private command = 'user';
    private name: String;
    private surname: String;

    constructor(body: any) {
        this.name = body.name;
        this.surname = body.surname;
    }

    validate(): void {
        if (this.surname == null || this.surname == '')
            throw "User invalid: surname is required";

        if (this.name == null || this.name == '')
            throw "User invalid: name is required";
        console.log('Valid User');
    }

    toDTO(): Domain {
        console.log('Convert to DTO');
        return null;
    }

    whoAmI(): String {
        return this.name + " " + this.surname;
    }
}

export class UserFactory {
    create(body: any) {
        return new User(body);
    }
}
