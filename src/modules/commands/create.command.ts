import { createService } from '../services/services.crud'
import {CustomDomainFactory} from "../domains/custom/custom.domain.factory";
import {Domain} from "../domains/domain";

export const createCommand = async (request, reply) => {
    console.log(request.params.entity, request.query);
    const domainObjectsFactory = new CustomDomainFactory(request.params.entity, request.query);
    const entity : Domain = domainObjectsFactory.instantiate();
    createService(entity.toDTO());

    return {
        success: true,
        entity: entity.whoAmI()
    };
};
