import {User} from "./user.domain";

export class UserFactory {
    create(body: any) {
        return new User(body);
    }
}
