import {CustomDomainFactory} from "../domains/custom/custom.domain.factory";
import {Domain} from "../domains/domain";
import {Service} from "../services/services.crud";

export const updateCommand = async (request, reply) => {
    request.query.id = request.params.id;
    const domainObjectsFactory = new CustomDomainFactory(request.params.entity, request.query);
    const entity : Domain = domainObjectsFactory.instantiate();
    const crudService = request.diScope.resolve('crudService') as Service
    crudService.update(entity);

    return {
        success: true,
        entity: entity.whoAmI()
    };
};