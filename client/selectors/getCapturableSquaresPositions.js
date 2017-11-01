import { createSelector } from 'reselect'

import getCapturableSquaresPositionsService
  from 'shared/services/getCapturableSquaresPositions'

const getCurrentUserSquarePositions = state =>
  state.app.territories.current.squarePositions

const getCapturableSquaresPositions = createSelector(
  [getCurrentUserSquarePositions],
  currentUserSquarePositions =>
    getCapturableSquaresPositionsService(currentUserSquarePositions)
)

export default getCapturableSquaresPositions
