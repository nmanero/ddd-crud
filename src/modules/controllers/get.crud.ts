import { readCommand } from '../commands/read.command'
// Declare a route
export const routes = [{
    method: 'GET',
    url: '/:entity',
    handler: readCommand
}];