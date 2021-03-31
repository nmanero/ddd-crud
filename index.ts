import { routes as GetRoutes } from './src/modules/controllers/get.crud'
import { routes as PostRoutes } from './src/modules/controllers/post.crud'
import {LocalArrayRepository} from "./src/modules/infraestructure/repositories/custom/local.array.repository";
import {Service} from "./src/modules/services/services.crud";
const { fastifyAwilixPlugin } = require('fastify-awilix')
const { diContainer } = require('fastify-awilix')
const { asClass, asFunction, Lifetime } = require('awilix')

// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})
fastify.register(fastifyAwilixPlugin, { disposeOnClose: true, disposeOnResponse: true })

fastify.addHook('onRequest', (request, reply, done) => {
  request.diScope.register({
    crudService: asFunction(
        ({ }) => { return new Service(new LocalArrayRepository(request.params.entity)) }, {
          lifetime: Lifetime.SCOPED,
          dispose: (module) => module.dispose(),
        }),
  })
  done()
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