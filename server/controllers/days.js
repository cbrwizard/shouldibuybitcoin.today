import { lastDay } from 'server/queries/days'
import { createDay } from 'server/services/days'
import serializeDay from 'server/serializers/day'
import { setFailedResponse } from 'server/lib/responses'
import shouldCreateDay from '../policies/shouldCreateDay'
import canVoteToday from '../policies/canVoteToday'

const get = async (ctx) => {
  try {
    let day
    if (await shouldCreateDay()) {
      day = await createDay()
    } else {
      day = await lastDay()
    }
    const serializedDay = serializeDay(day)

    ctx.body = {
      canVoteToday: await canVoteToday(day, ctx.sessionId),
      record: serializedDay,
    }
    return true
  } catch (err) {
    return setFailedResponse(ctx, err)
  }
}

export default {
  get,
}
