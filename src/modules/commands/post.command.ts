import { ValueObject } from '../valueobjects/valueobject.interface';
import { CustomObjectsFactory } from '../valueobjects/custom/customobjects.factory';

const postCommand = async (request: Request, reply: Response) => {
    const valueObjectsFactory = new CustomObjectsFactory(request.params.entity, request.query);
    const entity : ValueObject = valueObjectsFactory.instantiate();
    entity.validate();
    return { hello: 'world POST ' + entity.whoAmI() }
};

module.exports = postCommand;