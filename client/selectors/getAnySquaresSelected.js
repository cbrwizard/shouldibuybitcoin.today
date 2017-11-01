import { createSelector } from 'reselect'

const getSelectedSquaresPositions = state => state.app.game.selectedSquaresPositions

const getAnySquaresSelected = createSelector(
  [getSelectedSquaresPositions],
  selectedSquaresPositions => !!selectedSquaresPositions.length
)

export default getAnySquaresSelected
