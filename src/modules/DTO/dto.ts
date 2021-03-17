import {Domain} from "../domains/domain";

export interface DTO {
    validate(): void;
    toDTO(): Domain;
}
