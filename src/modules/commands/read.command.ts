import {Service} from "../services/services.crud";

export const readCommand = async (request, reply) => {
    const crudService = request.diScope.resolve('crudService') as Service
    return crudService.getAll();
};