import { createSelector } from 'reselect'

const getCurrentTurnsLeft = state => state.app.game.currentTurnsLeft
const getSquaresToCaptureMax = state => state.app.game.squaresToCaptureMax
const getSelectedSquaresPositions = state => state.app.game.selectedSquaresPositions

// TODO: use getAnySquaresSelected instead of getSelectedSquaresPositions
const getCanSelectSquares = createSelector(
  [getCurrentTurnsLeft, getSquaresToCaptureMax, getSelectedSquaresPositions],
  (currentTurnsLeft, squaresToCaptureMax, selectedSquaresPositions) =>
    squaresToCaptureMax - selectedSquaresPositions.length > 0 && currentTurnsLeft > 0
)

export default getCanSelectSquares
