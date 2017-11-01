import { pick } from 'ramda'

import { all } from 'server/queries/messages'
import { createMessage } from 'server/services/messages'
import { setCreatedResponse, setFailedResponse, setUnauthorizedResponse } from 'server/lib/responses'
import serializeMessage from 'server/serializers/message'

const filterPostParams = unfilteredParams =>
  pick(['text'], unfilteredParams)

const combineParamsWithUserId = (params, userId) =>
  Object.assign(params, { _user: userId })

const get = async (ctx) => {
  try {
    if (!ctx.isAuthenticated()) { return setUnauthorizedResponse(ctx) }

    const messages = await all()
    const serializedMessages = messages.map(serializeMessage)

    ctx.body = { messages: serializedMessages }
    return true
  } catch (err) {
    return setFailedResponse(ctx, err)
  }
}

const post = async (ctx) => {
  try {
    if (!ctx.isAuthenticated()) { return setUnauthorizedResponse(ctx) }

    const userId = ctx.state.user._id.toString()
    const filteredParams = filterPostParams(ctx.request.body)
    const paramsWithUserId = combineParamsWithUserId(filteredParams, userId)

    const saveResult = await createMessage(paramsWithUserId, ctx.io)

    return setCreatedResponse(ctx, saveResult)
  } catch (err) {
    return setFailedResponse(ctx, err)
  }
}

export default {
  get,
  post,
}
