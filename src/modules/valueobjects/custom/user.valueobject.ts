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
        console.log('Valid User');
    }

    toDTO(): Domain {
        console.log('Convert to DTO');
        return null;
    }

    whoAmI(): String {
        return this.command;
    }
}