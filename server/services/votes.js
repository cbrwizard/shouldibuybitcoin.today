import { create } from 'server/queries/votes'
import { appendVote } from 'server/services/days'
import setUpRavenClient from 'server/lib/setUpRavenClient'
import getLogger from 'server/lib/getLogger'

const logger = getLogger()
const Raven = setUpRavenClient()

export const createVote = async (attributes) => {
  try {
    const saveResult = await create(attributes)
    const today = attributes._day
    await appendVote(today, attributes.shouldBuy)
    logger.info(saveResult, 'Created a Vote')

    return saveResult
  } catch (err) {
    Raven.captureException(err)
    logger.error({ err, stack: err.stack })
    throw err
  }
}
