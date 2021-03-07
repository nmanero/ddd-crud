import { routes as GetRoutes } from './src/modules/controllers/get.crud'
import { routes as PostRoutes } from './src/modules/controllers/post.crud'
// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

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