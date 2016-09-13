import async from 'asyncawait/async'
import await from 'asyncawait/await'
import Koa from 'koa'
import cors from 'kcors'
import logger from 'koa-logger'
import body from 'koa-bodyparser'

import config from 'config'

import { createGraphQLServer } from './graphql'

const app = new Koa()

app.use(cors());
app.use(logger())
app.use(body())

// create graphql server
createGraphQLServer(app)

// error handler
app.on('error', (err) => console.log('==> ERROR', err))

// start http server
app.listen(config.server.port);
console.log('==> Server running on', config.server.url)
