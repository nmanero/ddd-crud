import {User} from "../../../domain/custom/user/user.domain";
import {UserDTO} from "../../../DTO/custom/user/user.dto";
import {FromDomain, FromDTO} from "../../mapper";
import {DTO} from "../../../DTO/dto";

export class UserMapper implements FromDTO, FromDomain {

    private static _instance: UserMapper;

    private constructor() {}

    public static getInstance(): UserMapper {
        if (!this._instance)
            this._instance = new UserMapper();

        return this._instance;
    }

    public fromDTO(userDTO: UserDTO): User {
        return new User(userDTO);
    }

    public fromDomain(user: User): DTO {
        return {
            name: user.name,
            surname: user.surname
        }
    }
}
