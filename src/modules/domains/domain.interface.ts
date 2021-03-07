import { ValueObject } from '../valueobjects/valueobject.interface';

export interface Domain {
    validate(): void;
    toValueObject(): ValueObject;
}