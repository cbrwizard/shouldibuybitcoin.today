/**
 * Is responsible for converting a Square's position string
 * into a position object.
 * @example
 * adaptSquarePositionToCoordinates('15-37')
 * // { column: 15, row: 37 }
 */
const adaptSquarePositionToCoordinates = position => ({
  column: Number(position.substr(0, position.indexOf('-'))),
  row: Number(position.substr(position.indexOf('-') + 1)),
})

export default adaptSquarePositionToCoordinates
