const postCommand = require('../commands/post.command')
// Declare a route
const routes = [{
    method: 'POST',
    url: '/post/:entity',
    handler: postCommand
}];

module.exports = routes;