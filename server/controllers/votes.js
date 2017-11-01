import { pick } from 'ramda'

import { lastDay } from 'server/queries/days'
import { createVote } from 'server/services/votes'
import serializeDay from 'server/serializers/day'
import { setFailedResponse } from 'server/lib/responses'

const filterPostParams = unfilteredParams =>
  pick(['shouldBuy'], unfilteredParams)

const post = async (ctx) => {
  try {
    const filteredParams = filterPostParams(ctx.request.body)
    const today = await lastDay()
    const voteParams = {
      ...filteredParams,
      _day: today,
      sessionId: ctx.sessionId,
    }
    console.log(ctx.sessionId)
    // console.log(ctx.session.cookie)
    // console.log(this.session)
    // console.log(ctx.req.session)
    // console.log(ctx.req)
    console.log('voteParams')
    console.log(voteParams)
    // cur: don't forget validation here.
    await createVote(voteParams)
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
