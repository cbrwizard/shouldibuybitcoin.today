import { createSelector } from 'reselect'

const getSquaresToCaptureMax = state => state.app.game.squaresToCaptureMax
const getSelectedSquaresPositions = state =>
  state.app.game.selectedSquaresPositions
const getCurrentTurnsLeft = state => state.app.game.currentTurnsLeft
const getIsLatestDataLoaded = state => state.app.game.isLatestDataLoaded
const getCurrentPlanningState = state => state.app.game.planningState

const getAdvicePanelMessagePath = createSelector(
  [
    getSquaresToCaptureMax,
    getSelectedSquaresPositions,
    getCurrentTurnsLeft,
    getIsLatestDataLoaded,
    getCurrentPlanningState,
  ],
  (
    squaresToCaptureMax,
    selectedSquaresPositions,
    currentTurnsLeft,
    isLatestDataLoaded,
    planningState
  ) => {
    if (!isLatestDataLoaded) {
      return 'app.text.advice.waitForLoading'
    }

    if (!currentTurnsLeft) {
      return 'app.text.returnTomorrow.tip'
    }

    if (planningState !== 'ready') {
      return 'app.text.advice.capturing'
    }

    const numberOfSelectedIds = selectedSquaresPositions.length

    if (numberOfSelectedIds === squaresToCaptureMax) {
      return 'app.text.advice.readyToCapture'
    }
    // If some selected
    if (numberOfSelectedIds) {
      return 'app.text.advice.selectMore'
    }
    return 'app.text.advice.selectSome'
  }
)

export default getAdvicePanelMessagePath
