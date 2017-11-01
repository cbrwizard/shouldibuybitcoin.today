import { createSelector } from 'reselect'

import getAnySquaresSelected from 'client/selectors/getAnySquaresSelected'
import getCanMakeTurnsToday from 'client/selectors/getCanMakeTurnsToday'

const getCurrentPlanningState = state => state.app.game.planningState
const getIsLatestDataLoaded = state => state.app.game.isLatestDataLoaded

const getIsCreatePlanButtonEnabled = createSelector(
  [
    getCurrentPlanningState,
    getAnySquaresSelected,
    getCanMakeTurnsToday,
    getIsLatestDataLoaded,
  ],
  (planningState, anyIdsSelected, canMakeTurnsToday, isLatestDataLoaded) =>
    planningState === 'ready' &&
    anyIdsSelected &&
    canMakeTurnsToday &&
    isLatestDataLoaded
)

export default getIsCreatePlanButtonEnabled
