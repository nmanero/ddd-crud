import {Domain} from "../domain/domain";
import {DTO} from "../DTO/dto";

export interface FromDTO {
    fromDTO(dto: DTO): Domain;
}

export interface FromDomain {
    fromDomain(domain: Domain): DTO;
}
