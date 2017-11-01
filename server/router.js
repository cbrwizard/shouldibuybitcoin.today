import Router from 'koa-router'

import pagesController from 'server/controllers/pages'
import daysController from 'server/controllers/days'
// import sessionsController from 'server/controllers/sessions'

const router = new Router()

router
  .get('/', pagesController.get)
  .get('/days/', daysController.get)

export default router
