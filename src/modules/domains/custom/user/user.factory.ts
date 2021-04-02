import {User} from "./user.domain";
import {Name} from "../../../DTO/value-object/name";
import {Surname} from "../../../DTO/value-object/surname";
import {Hashmap} from "../../../DTO/hashmap";
import {Address} from "../../../DTO/value-object/address";

export class UserFactory {
    create(body: Hashmap) {
        const name: Name = new Name(body.name);
        const surname: Surname = new Surname(body.surname);
        let user = new User(name, surname);

        if (body.zipcode) {
            user.address = new Address(body.country, body.city, body.zipcode, body.street);
        }
        return user;
    }
}
