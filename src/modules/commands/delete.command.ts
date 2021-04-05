import {Service} from "../services/services.crud";
import {UUID} from "../DTO/value-object/uuid";

export const deleteCommand = async (request, reply) => {
    const crudService = request.diScope.resolve('crudService') as Service
    const entity = await crudService.getById(new UUID(request.params.id))
    crudService.delete(entity);

    return {
        success: true
    };
};