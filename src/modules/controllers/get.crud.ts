import { getCommand } from '../commands/get.command'
// Declare a route
export const routes = [{
    method: 'GET',
    url: '/',
    handler: getCommand
}];