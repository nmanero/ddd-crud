import { ValueObject } from '../valueobject.interface';
import { User } from './user.valueobject'

const valueObjects : { [key: string]: ValueObject } = {
    "user": User
};

export function ValueObjectByName(name: String) {
    if (valueObjects.hasOwnProperty(name))
        return valueObjects[name];
    else
        throw "Value Object not found " + name;
}