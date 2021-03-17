import {CustomDomainFactory} from "../domains/custom/custom.domain.factory";
import {Domain} from "../domains/domain";
import {Service} from "../services/services.crud";
import {LocalArrayRepository} from "../infraestructure/repositories/custom/local.array.repository";

export const createCommand = async (request, reply) => {
    console.log(request.params.entity, request.query);
    const domainObjectsFactory = new CustomDomainFactory(request.params.entity, request.query);
    const entity : Domain = domainObjectsFactory.instantiate();
    new Service(new LocalArrayRepository()).create(entity);

    return {
        success: true,
        entity: entity.whoAmI()
    };
};