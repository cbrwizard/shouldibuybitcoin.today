import { createSelector } from 'reselect'

const getSquaresToCaptureMax = state => state.app.game.squaresToCaptureMax
const getSelectedSquaresPositions = state => state.app.game.selectedSquaresPositions

const getSquaresToCaptureLeft = createSelector(
  [getSelectedSquaresPositions, getSquaresToCaptureMax],
  (selectedSquaresPositions, squaresToCaptureMax) =>
    squaresToCaptureMax - selectedSquaresPositions.length
)

export default getSquaresToCaptureLeft
