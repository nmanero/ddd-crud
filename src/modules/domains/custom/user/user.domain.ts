import {Domain} from "../../domain";
import {Name} from "../../../DTO/value-object/name";
import {Surname} from "../../../DTO/value-object/surname";
import {Hashmap} from "../../../DTO/hashmap";

export class User implements Domain {
    private readonly _name: Name;
    private readonly _surname: Surname;

    public constructor(name: Name, surname: Surname) {
        this._name = name;
        this._surname = surname;
    }

    public get name(): string {
        return this._name.name;
    }

    public get surname(): string {
        return this._surname.surname;
    }

    public toDTO(): Hashmap  {
        console.log('Convert to DTO');
        return {
            name: this.name,
            surname: this.surname
        };
    }

    public whoAmI(): String {
        return this.name + " " + this.surname;
    }
}
