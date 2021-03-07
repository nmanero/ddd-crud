import { ValueObject } from '../valueobjects/valueobject.interface';
import { CustomObjectsFactory } from '../valueobjects/custom/customobjects.factory';
import { postService } from '../services/services.crud'

export const postCommand = async (request, reply) => {
    const valueObjectsFactory = new CustomObjectsFactory(request.params.entity, request.query);
    const entity : ValueObject = valueObjectsFactory.instantiate();
    entity.validate();
    postService(entity.toDTO());

    return {
        success: true,
        entity: entity.whoAmI()
    };
};