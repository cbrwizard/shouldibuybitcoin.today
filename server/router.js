import Router from 'koa-router'

import pagesController from 'server/controllers/pages'
// import messagesController from 'server/controllers/messages'
// import sessionsController from 'server/controllers/sessions'

const router = new Router()

router
  .get('/', pagesController.get)

export default router
