

import getQueue from 'server/lib/getQueue'
import setUpRavenClient from 'server/lib/setUpRavenClient'
import getLogger from 'server/lib/getLogger'

import { PERFORM_PLAN } from 'server/constants/jobTypes'

const queue = getQueue()
const logger = getLogger()
const Raven = setUpRavenClient()

/**
 * Is responsible for creating a performPlan job.
 */
const createPerformPlanJob = async (userId, selectedSquaresPositions) => {
  const job = queue
    .create(PERFORM_PLAN, {
      selectedSquaresPositions,
      userId,
    })
    .priority('high')
    .removeOnComplete(true)
    .save((err) => {
      if (err) {
        Raven.captureException(err)
        logger.error({ err, stack: err.stack })
      } else {
        logger.info(
          {
            attributes: { selectedSquaresPositions, userId },
            id: job.id,
            name: PERFORM_PLAN,
          },
          'Created a job'
        )
      }
    })

  return job
}

export default createPerformPlanJob
