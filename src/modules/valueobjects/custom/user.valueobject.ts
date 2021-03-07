import { ValueObject } from "../valueobject.interface";
import { Domain } from "../../domains/domain.interface";

export class User implements ValueObject {
    name: String;
    constructor(name: String) {
        this.name = name;
    }

    validate(): void {
        console.log('Valid User');
    }

    toDTO(): Domain {
        console.log('Convert to DTO');
        return null;
    }
}
