import { routes as GetRoutes } from './src/modules/controllers/get.crud'
import { routes as PostRoutes } from './src/modules/controllers/post.crud'
import { routes as DeleteRoutes } from './src/modules/controllers/delete.crud'
import { routes as PutRoutes } from './src/modules/controllers/put.crud'
import {LocalDictRepository} from "./src/modules/infraestructure/repositories/custom/local.dict.repository";
import {Service} from "./src/modules/services/services.crud";
const { fastifyAwilixPlugin } = require('fastify-awilix')
const { asFunction, Lifetime } = require('awilix')

// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})
fastify.register(fastifyAwilixPlugin, { disposeOnClose: true, disposeOnResponse: true })

fastify.addHook('onRequest', (request, reply, done) => {
  request.diScope.register({
    crudService: asFunction(
        ({ }) => { return new Service(new LocalDictRepository(request.params.entity)) }, {
          lifetime: Lifetime.SCOPED
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

DeleteRoutes.forEach((route, index) => {
    fastify.route(route)
})

PutRoutes.forEach((route, index) => {
    fastify.route(route)
})

// Run the server!
fastify.listen(3000, '0.0.0.0', function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})