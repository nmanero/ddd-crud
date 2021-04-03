import {CustomDomainFactory} from "../domains/custom/custom.domain.factory";
import {Domain} from "../domains/domain";
import {Service} from "../services/services.crud";

export const deleteCommand = async (request, reply) => {
    const crudService = request.diScope.resolve('crudService') as Service
    crudService.delete(request.params.id);

    return {
        success: true
    };
};