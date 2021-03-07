import { Domain } from "../domains/domain.interface";

export interface ValueObject {
    validate(): void;
    toDTO(): Domain;
}