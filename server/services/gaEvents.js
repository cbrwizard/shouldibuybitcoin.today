import setUpRavenClient from 'server/lib/setUpRavenClient'
import getLogger from 'server/lib/getLogger'
import getGA from 'server/lib/getGA'
import isProduction from 'shared/lib/isProduction'
import {
  CLICKED_BECOME_PATREON,
  GAME_SESSION_STARTED,
  CORE_GAMEPLAY_ACCEPTANCE,
  SQUARE_CAPTURED,
  SECOND_TURN_MADE,
  THIRD_TURN_MADE,
  FIFTH_TURN_MADE,
  EIGHTH_TURN_MADE,
} from 'server/constants/metricNames'

const logger = getLogger()
const Raven = setUpRavenClient()
const GA = getGA()

const recognizedEventParams = (metricName, userId) => {
  const action = `Passed ${metricName}`
  return {
    action,
    category: 'business',
    params: {
      userId,
    },
    // Note: must be integer.
    value: 1,
  }
}

const getEventParams = (type, userId) => {
  switch (type) {
    case CLICKED_BECOME_PATREON: {
      return recognizedEventParams(CLICKED_BECOME_PATREON, userId)
    }
    case CORE_GAMEPLAY_ACCEPTANCE: {
      return recognizedEventParams(CORE_GAMEPLAY_ACCEPTANCE, userId)
    }
    case GAME_SESSION_STARTED: {
      return recognizedEventParams(GAME_SESSION_STARTED, userId)
    }
    case SQUARE_CAPTURED: {
      return recognizedEventParams(SQUARE_CAPTURED, userId)
    }
    case SECOND_TURN_MADE: {
      return recognizedEventParams(SECOND_TURN_MADE, userId)
    }
    case THIRD_TURN_MADE: {
      return recognizedEventParams(THIRD_TURN_MADE, userId)
    }
    case FIFTH_TURN_MADE: {
      return recognizedEventParams(FIFTH_TURN_MADE, userId)
    }
    case EIGHTH_TURN_MADE: {
      return recognizedEventParams(EIGHTH_TURN_MADE, userId)
    }
    default:
      throw new Error('unrecognized GA event type')
  }
}

/**
 * Is responsible for creating and sending a GA event.
 * @note quite possibly in the future it will need a 2nd param 'attributes'.
 */
export const createEvent = (type, userId) =>
  new Promise((resolve, reject) => {
    try {
      if (isProduction) {
        const eventParams = getEventParams(type, userId)

        GA.event(
          eventParams.category,
          eventParams.action,
          eventParams.label,
          eventParams.value,
          eventParams.params,
          (err) => {
            if (err) {
              // Hopefully it gets caught by that catch block.
              Raven.captureException(err)
              logger.error({ err, stack: err.stack })
              throw err
            } else {
              logger.info(
                { ...eventParams, type, userId },
                'Created a GA event'
              )
              resolve()
            }
          }
        )
      }
    } catch (err) {
      Raven.captureException(err)
      logger.error({ err, stack: err.stack })
      reject(err)
    }
  })
