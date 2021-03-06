import {Domain} from "../../domain";
import {Name} from "../../../DTO/value-object/name";
import {Surname} from "../../../DTO/value-object/surname";
import {Hashmap} from "../../../DTO/hashmap";
import { v4 as uuid } from 'uuid';
import {UUID} from "../../../DTO/value-object/uuid";

export class User implements Domain {
    private readonly _id: UUID;
    private readonly _name: Name;
    private readonly _surname: Surname;

    public constructor(name: Name, surname: Surname, id?: UUID) {
        this._id = id || new UUID(uuid());
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
            id: this.whoAmI(),
            name: this.name,
            surname: this.surname
        };
    }

    public whoAmI(): String {
        return this._id.value;
    }
}
