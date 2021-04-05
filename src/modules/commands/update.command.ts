import {CustomDomainFactory} from "../domains/custom/custom.domain.factory";
import {Domain} from "../domains/domain";
import {Service} from "../services/services.crud";
import {UUID} from "../DTO/value-object/uuid";

export const updateCommand = async (request, reply) => {
    const domainObjectsFactory = new CustomDomainFactory(request.params.entity, request.body);
    const crudService = request.diScope.resolve('crudService') as Service
    let entity = await crudService.getById(new UUID(request.params.id));
    const newEntity : Domain = domainObjectsFactory.update(entity);
    crudService.update(newEntity);

    return {
        success: true,
        entity: entity.whoAmI()
    };
};