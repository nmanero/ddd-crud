import {CustomDomainFactory} from "../domains/custom/custom.domain.factory";
import {Domain} from "../domains/domain";
import {Service} from "../services/services.crud";

export const replaceCommand = async (request, reply) => {
    request.body.id = request.params.id;
    const domainObjectsFactory = new CustomDomainFactory(request.params.entity, request.body);
    const entity : Domain = domainObjectsFactory.instantiate();
    const crudService = request.diScope.resolve('crudService') as Service
    crudService.update(entity);

    return {
        success: true,
        entity: entity.whoAmI()
    };
};