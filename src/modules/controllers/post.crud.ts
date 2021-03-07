import { postCommand } from '../commands/post.command'
// Declare a route
export const routes = [{
    method: 'POST',
    url: '/post/:entity',
    handler: postCommand
}];