import IO from 'koa-socket'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import cors from 'kcors'
import passport from 'koa-passport'
import redisStore from 'koa-redis'
import session from 'koa-generic-session'
import koaHelmet from 'koa-helmet'
import koaBunyanLogger from 'koa-bunyan-logger'

import localStrategy from 'server/strategies/passport/localStrategy'
import router from 'server/router'
import { deserializeUser, serializeUser } from 'server/lib/passport/serialization'
// import setUpJobProcessors from 'server/jobs/processors'
import getLogger from 'server/lib/getLogger'

const logger = getLogger()
// setUpJobProcessors()
const app = new Koa()
const io = new IO()
io.attach(app)

passport.serializeUser(serializeUser)
passport.deserializeUser(deserializeUser)
passport.use(localStrategy)

app.keys = [process.env.KOA_SECRET]
app
  .use(koaBunyanLogger(logger))
  .use(koaHelmet())
  .use(cors({ credentials: true }))
  .use(bodyParser())
  .use(convert(session({
    store: redisStore({ host: process.env.REDIS_HOST }),
  })))
  .use(passport.initialize())
  .use(passport.session())
  .use(async (ctx, next) => {
    // TODO: find a better way to allow io to be used in routes.
    if (!ctx.io) ctx.io = io

    ctx.log.info({ request: ctx.request })

    await next()
  })
  .use(router.routes())
  .use(router.allowedMethods())

io.on('connection', () => {
  console.log('Client connected')
})

export { io }
export default app
