import { createCommand } from '../commands/create.command'
// Declare a route
export const routes = [{
    method: 'POST',
    url: '/post/:entity',
    handler: createCommand
}];