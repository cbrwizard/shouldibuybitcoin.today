import { green } from 'material-ui/colors'
import { createSelector } from 'reselect'

import getSquaresToCaptureLeft from 'client/selectors/getSquaresToCaptureLeft'

const getSquaresToCaptureMax = state => state.app.game.squaresToCaptureMax
const getCurrentPlanningState = state => state.app.game.planningState
const getIsLatestDataLoaded = state => state.app.game.isLatestDataLoaded

const getCreatePlanButtonColor = createSelector(
  [
    getSquaresToCaptureLeft,
    getSquaresToCaptureMax,
    getCurrentPlanningState,
    getIsLatestDataLoaded,
  ],
  (
    squaresToCaptureLeft,
    squaresToCaptureMax,
    planningState,
    isLatestDataLoaded
  ) => {
    if (planningState !== 'ready' || !isLatestDataLoaded) {
      return null
    }

    if (squaresToCaptureLeft === 0) {
      return green[500]
    }
    if (squaresToCaptureLeft / squaresToCaptureMax < 0.66) {
      return green[300]
    }
    if (squaresToCaptureLeft < squaresToCaptureMax) {
      return green[100]
    }
  }
)

export default getCreatePlanButtonColor
