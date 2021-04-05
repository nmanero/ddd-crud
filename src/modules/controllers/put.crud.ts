import { replaceCommand } from '../commands/replace.command'
// Declare a route
export const routes = [{
    method: 'PUT',
    url: '/:entity/:id',
    handler: replaceCommand
}];