import { DomainFactory } from '../domain/domainFactory';
import { createService } from '../services/services.crud'
import {DTO} from "../DTO/dto";

export const createCommand = async (request, reply) => {
    const valueObjectsFactory = new DomainFactory(request.params.entity, request.query);
    const entity : DTO = valueObjectsFactory.instantiate();
    createService(entity.toDomain());

    return {
        success: true,
        entity: entity.whoAmI()
    };
};
