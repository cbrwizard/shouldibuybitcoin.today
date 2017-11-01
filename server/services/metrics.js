import {
  create,
  update,
  updateOrCreate,
  metricOfNameAndUser,
} from 'server/queries/metrics'
import setUpRavenClient from 'server/lib/setUpRavenClient'
import getLogger from 'server/lib/getLogger'
import { createEvent } from 'server/services/gaEvents'
import doesQualifyForCoreGameplayAcceptanceMetric from 'server/policies/doesQualifyForCoreGameplayAcceptanceMetric'
import {
  CLICKED_BECOME_PATREON,
  CORE_GAMEPLAY_ACCEPTANCE,
  SQUARE_CAPTURED,
  SECOND_TURN_MADE,
  THIRD_TURN_MADE,
  FIFTH_TURN_MADE,
  EIGHTH_TURN_MADE,
} from 'server/constants/metricNames'
import { SUCCEEDED } from 'server/constants/metricStatuses'
import { numberOfUserSquares } from 'server/queries/squares'
import { numberOfOperationsByUserToday } from '../queries/operations'

// TODO: move to a logic file
const TURNS_MADE_METRICS_INFO = [
  { name: SECOND_TURN_MADE, squaresToCapture: 2, turnsToMake: 2 },
  { name: THIRD_TURN_MADE, squaresToCapture: 5, turnsToMake: 3 },
  { name: FIFTH_TURN_MADE, squaresToCapture: 15, turnsToMake: 5 },
  { name: EIGHTH_TURN_MADE, squaresToCapture: 30, turnsToMake: 8 },
]

const logger = getLogger()
const Raven = setUpRavenClient()

export const createMetric = async (attributes) => {
  try {
    const saveResult = await create(attributes)
    logger.info({ attributes }, 'Created a Metric record')

    return saveResult
  } catch (err) {
    Raven.captureException(err)
    logger.error({ err, stack: err.stack })
    throw err
  }
}

export const updateMetric = async (metric, attributes) => {
  try {
    const updatedMetric = await update(metric, attributes)
    logger.info({ attributes, updatedMetric }, 'Updated a Metric record')

    return updatedMetric
  } catch (err) {
    Raven.captureException(err)
    logger.error({ err, stack: err.stack })
    throw err
  }
}

export const updateOrCreateMetric = async (attributesToFind, newAttributes) => {
  try {
    const saveResult = await updateOrCreate(attributesToFind, newAttributes)
    logger.info(
      { attributesToFind, newAttributes },
      'Updated or created a Metric record'
    )

    return saveResult
  } catch (err) {
    Raven.captureException(err)
    logger.error({ err, stack: err.stack })
    throw err
  }
}

/**
 * Is responsible for creating a metric CORE_GAMEPLAY_ACCEPTANCE when needed.
 */
export const handleCoreGameplayAcceptanceMetric = async (userId) => {
  if (await doesQualifyForCoreGameplayAcceptanceMetric(userId)) {
    await createEvent(CORE_GAMEPLAY_ACCEPTANCE, userId)
    const attributesToFind = {
      _user: userId,
      name: CORE_GAMEPLAY_ACCEPTANCE,
    }
    const newAttributes = { status: SUCCEEDED }

    await updateOrCreateMetric(attributesToFind, newAttributes)
  }
}

/**
 * Is responsible for creating a metric SQUARE_CAPTURED when needed.
 * Basically we send an event to GA only when there is a started metric
 * in a plans service, otherwise we do nothing just in case.
 */
export const handleSquareCapturedMetric = async (userId) => {
  // TODO: move to a policy.
  const metricExists = await metricOfNameAndUser(SQUARE_CAPTURED, userId)

  if (!metricExists) {
    await createEvent(SQUARE_CAPTURED, userId, SUCCEEDED)
    // TODO: use an ordinary update without lean to avoid this.
    const attributesToFind = {
      _user: userId,
      name: SQUARE_CAPTURED,
    }
    const newAttributes = { status: SUCCEEDED }

    await updateOrCreateMetric(attributesToFind, newAttributes)
  }
}

/**
 * Is responsible for creating a metric TURNS_MADE when needed.
 * Basically we send an event to GA only when there is a started metric
 * in a plans service, otherwise we do nothing just in case.
 */
export const handleTurnsMadeMetrics = async (userId) => {
  // TODO: move to a policy.
  const userTurnsToday = await numberOfOperationsByUserToday(userId)
  const userSquares = await numberOfUserSquares(userId)

  const handleTurnsMadeMetricPromises = TURNS_MADE_METRICS_INFO.map(
    async (metricInfo) => {
      const userMadeEnoughTurnsToday =
        userSquares >= metricInfo.squaresToCapture
      const userCapturedEnoughSquares = userTurnsToday >= metricInfo.turnsToMake

      const metricExists = await metricOfNameAndUser(metricInfo.name, userId)

      if (
        !metricExists &&
        userMadeEnoughTurnsToday &&
        userCapturedEnoughSquares
      ) {
        await createEvent(metricInfo.name, userId, SUCCEEDED)
        // TODO: use an ordinary update without lean to avoid this.
        const attributesToFind = {
          _user: userId,
          name: metricInfo.name,
        }
        const newAttributes = { status: SUCCEEDED }

        await updateOrCreateMetric(attributesToFind, newAttributes)
      }
    }
  )

  await Promise.all(handleTurnsMadeMetricPromises)
}

/**
 * Is responsible for creating a metric CLICKED_BECOME_PATREON when needed.
 */
export const handleClickedBecomePatronMetric = async (userId) => {
  // TODO: move to a policy.
  const metricExists = await metricOfNameAndUser(CLICKED_BECOME_PATREON, userId)

  if (!metricExists) {
    await createEvent(CLICKED_BECOME_PATREON, userId, SUCCEEDED)
    // TODO: use an ordinary update without lean to avoid this.
    const attributesToFind = {
      _user: userId,
      name: CLICKED_BECOME_PATREON,
    }
    const newAttributes = { status: SUCCEEDED }

    await updateOrCreateMetric(attributesToFind, newAttributes)
  }
}
