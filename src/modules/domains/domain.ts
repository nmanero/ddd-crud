import {Hashmap} from "../DTO/hashmap";

export interface Domain {
    toDTO(): Hashmap;
    whoAmI(): String;
}
