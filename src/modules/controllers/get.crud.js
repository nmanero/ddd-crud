const getCommand = require('../commands/get.command')
// Declare a route
const routes = [{
    method: 'GET',
    url: '/',
    handler: getCommand
}];

module.exports = routes;