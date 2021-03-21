import {Service} from "../services/services.crud";
import {LocalArrayRepository} from "../infraestructure/repositories/custom/local.array.repository";

export const readCommand = async (request, reply) => {
    return new Service(new LocalArrayRepository()).getAll();
};