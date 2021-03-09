import { ValueObject } from '../valueobjects/valueobject.interface';
import { CustomObjectsFactory } from '../valueobjects/custom/customobjects.factory';
import { createService } from '../services/services.crud'

export const createCommand = async (request, reply) => {
    const valueObjectsFactory = new CustomObjectsFactory(request.params.entity, request.query);
    const entity : ValueObject = valueObjectsFactory.instantiate();
    entity.validate();
    createService(entity.toDTO());

    return {
        success: true,
        entity: entity.whoAmI()
    };
};