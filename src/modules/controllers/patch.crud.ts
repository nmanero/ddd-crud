import { updateCommand } from '../commands/update.command'
// Declare a route
export const routes = [{
    method: 'PATCH',
    url: '/:entity/:id',
    handler: updateCommand
}];