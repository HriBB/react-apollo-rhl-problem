import async from 'asyncawait/async'
import await from 'asyncawait/await'
import { apolloKoa, graphiqlKoa } from 'apollo-server'
import { makeExecutableSchema } from 'graphql-tools'
import { get, post } from 'koa-route'

import typeDefs from './schema'
import resolvers from './resolvers'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  allowUndefinedInResolve: true,
})

export function createGraphQLServer(app) {
  app.use(post('/graphql', apolloKoa({ schema })))
  app.use(get('/graphiql', graphiqlKoa({
    endpointURL: '/graphql',
  })))
}
