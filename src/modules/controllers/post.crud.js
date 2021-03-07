const postCommand = require('../commands/post.command')
// Declare a route
const routes = [{
    method: 'POST',
    url: '/',
    handler: postCommand
}];

module.exports = routes;