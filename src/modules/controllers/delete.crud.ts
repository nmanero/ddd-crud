import { deleteCommand } from '../commands/delete.command'
// Declare a route
export const routes = [{
    method: 'DELETE',
    url: '/:entity/:id',
    handler: deleteCommand
}];