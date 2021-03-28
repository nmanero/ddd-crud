import {Domain} from "../../modules/domains/domain";
import {Hashmap} from "../../modules/DTO/hashmap";

export class InvalidDomain implements Domain {
    private readonly _name: string;

    public constructor() {
        this._name = "Gandalf";
    }

    public toDTO(): Hashmap {
        return {};
    }

    public whoAmI(): String {
        return "Invalid domain to test GenericMapper";
    }
}
