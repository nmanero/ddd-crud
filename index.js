// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

const routes = require("./src/modules/controllers/get.crud");
routes.forEach((route, index) => {
  fastify.route(route)
})

// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})