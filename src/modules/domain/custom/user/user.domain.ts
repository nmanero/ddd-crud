import {Name} from "../../../valueobjects/custom/Name";
import {Surname} from "../../../valueobjects/custom/Surname";
import {Domain} from "../../domain";
import {DTO} from "../../../DTO/dto";
import {UserMapper} from "../../../mapper/custom/user/user.mapper";

export class User implements Domain {
    private _name: Name;
    private _surname: Surname;

    constructor(body: any) {
        this._name = new Name(body._name);
        this._surname = new Surname(body._surname);
    }

    get name(): string {
        return this._name.name;
    }

    get surname(): string {
        return this._surname.surname;
    }

    toDTO(): DTO {
        return UserMapper.getInstance().fromDomain(this);
    }
}
