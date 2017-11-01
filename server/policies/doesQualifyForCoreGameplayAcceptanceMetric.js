import { MAX_TURNS_PER_DAY } from 'shared/constants/game'
import {
  VALIDATE_CORE_GAMEPLAY_ACCEPTANCE_METRIC_NUMBER_OF_USER_SQUARES,
} from 'server/constants/metricLogic'
import { numberOfUserSquares } from 'server/queries/squares'
import { numberOfOperationsByUserToday } from 'server/queries/operations'
import { CORE_GAMEPLAY_ACCEPTANCE } from 'server/constants/metricNames'
import { metricOfNameAndUser } from '../queries/metrics'

/**
 * Is responsible for telling if a user qualifies for passing the
   coreGameplayAcceptance metric.
   TODO: make the metric rely on number of squares captured TODAY
 */
const doesQualifyForCoreGameplayAcceptanceMetric = async (user) => {
  const turnsToday = await numberOfOperationsByUserToday(user)
  const userSquares = await numberOfUserSquares(user)
  const metricRecord = await metricOfNameAndUser(CORE_GAMEPLAY_ACCEPTANCE, user)

  return (
    !metricRecord &&
    turnsToday >= MAX_TURNS_PER_DAY &&
    userSquares >=
      VALIDATE_CORE_GAMEPLAY_ACCEPTANCE_METRIC_NUMBER_OF_USER_SQUARES
  )
}

export default doesQualifyForCoreGameplayAcceptanceMetric
