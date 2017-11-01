import { createSelector } from 'reselect'

const getCurrentPlanningState = state => state.app.game.planningState

const getIsWaitingForResults = createSelector(
  [getCurrentPlanningState],
  planningState => planningState === 'processing'
)

export default getIsWaitingForResults
