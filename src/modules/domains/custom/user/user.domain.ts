import {Domain} from "../../domain";
import {Name} from "../../../DTO/value-object/name";
import {Surname} from "../../../DTO/value-object/surname";
import {Hashmap} from "../../../DTO/hashmap";
import {Address} from "../../../DTO/value-object/address";

export class User implements Domain {
    private readonly _name: Name;
    private readonly _surname: Surname;
    private _address: Address;

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

    public set address(address: Address) {
        this._address = address;
    }

    public get address(): Address {
        return this._address;
    }

    public toDTO(): Hashmap  {
        console.log('Convert to DTO');
        return {
            name: this.name,
            surname: this.surname,
            address: {
                country: this.address.country,
                city: this.address.city,
                zipcode: this.address.zipcode,
                street: this.address.street
            }
        };
    }

    public whoAmI(): String {
        return this.name + " " + this.surname;
    }
}
