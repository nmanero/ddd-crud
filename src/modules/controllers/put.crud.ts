import { updateCommand } from '../commands/update.command'
// Declare a route
export const routes = [{
    method: 'PUT',
    url: '/:entity',
    handler: updateCommand
}];