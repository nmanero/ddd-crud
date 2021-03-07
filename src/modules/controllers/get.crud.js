// Declare a route
const routes = [{
    method: 'GET',
    url: '/',
    handler: async (request, reply) => {
        return { hello: 'world' }
    }
}];

module.exports = routes;