import {Domain} from "../../modules/domains/domain";
import {Hashmap} from "../../modules/DTO/hashmap";

export class ComplexDomain implements Domain {
    private readonly _name: string;
    private readonly _booleanProperty: boolean;
    private readonly _stringArray: Array<string>;
    private readonly _mixArray: Array<any>;

    public constructor() {
        this._name = "Gandalf";
        this._booleanProperty = true;
        this._stringArray = ["Aragon", "Legolas", "Gimli"];
        this._mixArray = [true, false, "str", ["frodo", "sam"]];
    }

    public get name(): string {
        return this._name;
    }

    public get booleanProperty(): boolean {
        return this._booleanProperty;
    }

    public get stringArray(): Array<string> {
        return this._stringArray;
    }

    public get mixArray(): Array<any> {
        return this._mixArray;
    }

    public toDTO(): Hashmap  {
        return {};
    }

    public whoAmI(): String {
        return "Complex model to test GenericMapper";
    }
}
