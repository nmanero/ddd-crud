import { routes as GetRoutes } from './src/modules/controllers/get.crud'
import { routes as PostRoutes } from './src/modules/controllers/post.crud'
const { fastifyAwilixPlugin } = require('fastify-awilix')

// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})
fastify.register(fastifyAwilixPlugin, { disposeOnClose: true, disposeOnResponse: true })

GetRoutes.forEach((route, index) => {
  fastify.route(route)
})

PostRoutes.forEach((route, index) => {
  fastify.route(route)
})

// Run the server!
fastify.listen(3000, '0.0.0.0', function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})