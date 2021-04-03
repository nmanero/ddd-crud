import {User} from "./user.domain";
import {Name} from "../../../DTO/value-object/name";
import {Surname} from "../../../DTO/value-object/surname";
import {Hashmap} from "../../../DTO/hashmap";

export class UserFactory {
    create(body: Hashmap) {
        const name: Name = new Name(body.name);
        const surname: Surname = new Surname(body.surname);

        if (body.id) {
           return new User(name, surname, body.id);
        }
        else {
            return new User(name, surname)
        }
    }
}
