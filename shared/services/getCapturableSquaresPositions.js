import { flatten, isEmpty } from 'ramda'

import adaptSquareCoordinatesToPosition
  from 'client/phaser/lib/adaptSquareCoordinatesToPosition'
import adaptSquarePositionToCoordinates
  from 'shared/lib/adaptSquarePositionToCoordinates'

const getCapturableSquaresCoordinatesForSquare = square =>
  [
    { column: square.column - 1, row: square.row - 1 },
    { column: square.column, row: square.row - 1 },
    { column: square.column + 1, row: square.row - 1 },

    { column: square.column - 1, row: square.row },
    { column: square.column + 1, row: square.row },

    { column: square.column - 1, row: square.row + 1 },
    { column: square.column, row: square.row + 1 },
    { column: square.column + 1, row: square.row + 1 },
  ].filter(coordinates => coordinates.column > 0 && coordinates.row > 0)

const filterCurrentUserSquares = (
  currentUserSquarePositions,
  squaresToFilter
) =>
  squaresToFilter.filter(
    squareToFilter =>
      !currentUserSquarePositions.some(
        currentUserSquarePosition =>
          currentUserSquarePosition === squareToFilter
      )
  )

/**
 * Is responsible for returning the coordinates of squares a current user can capture now.
 * @note it returns the coordinates for non-existing squares
 * (which are off the right-bottom of the squares grid for instance).
 * If this causes problems, it should also accept a param totalNumberOfSquares
 * and filter coordinates by it in getCapturableSquaresPositionsForSquare.
 * @note it returns duplicates as well because uniq is a super costy operation
 * and turned out it's okay to have duplicates.
 * @param {Object[]} currentUserSquarePositions An array of position strings.
 */
const getCapturableSquaresPositions = (currentUserSquarePositions) => {
  if (isEmpty(currentUserSquarePositions)) {
    return []
  }

  // TODO: rewrite so it doesn't use that much adapting
  const squaresPositionsToCaptureOfAllUsers = flatten(
    currentUserSquarePositions
      .map(adaptSquarePositionToCoordinates)
      .map(getCapturableSquaresCoordinatesForSquare)
  ).map(adaptSquareCoordinatesToPosition)

  return filterCurrentUserSquares(
    currentUserSquarePositions,
    squaresPositionsToCaptureOfAllUsers
  )
}

export default getCapturableSquaresPositions
