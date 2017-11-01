import { pick } from 'ramda'

import { lastDay } from 'server/queries/days'
import { createVote } from 'server/services/votes'
import serializeDay from 'server/serializers/day'
import {
  setFailedResponse,
} from 'server/lib/responses'

const filterPostParams = unfilteredParams =>
  pick(['shouldBuy'], unfilteredParams)

const post = async (ctx) => {
  try {
    const filteredParams = filterPostParams(ctx.request.body)
    // await createVote(filteredParams)
    console.log('filteredParams')
    console.log(filteredParams)
    const serializedDay = serializeDay(await lastDay())

    ctx.body = { day: serializedDay }
    return true
  } catch (err) {
    return setFailedResponse(ctx, err)
  }
}

export default {
  post,
}
