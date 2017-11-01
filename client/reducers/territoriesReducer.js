import { without } from 'ramda'

import {
  ADD_SQUARE_POSITIONS_TO_CURRENT,
  ADD_SQUARE_POSITIONS_TO_OTHER,
  APPEND_TERRITORY,
  REMOVE_SQUARE_POSITIONS_FROM_CURRENT,
  REMOVE_SQUARE_POSITIONS_FROM_OTHER,
  SET_CURRENT,
  SET_OTHERS,
  UPDATE_CURRENT,
  UPDATE_OTHER_BY_USER_ID,
} from 'client/constants/redux/territories'
import initialState from 'client/initialState'
import adaptSquarePositionToCoordinates
  from '../../shared/lib/adaptSquarePositionToCoordinates'

const shouldGetImageObjectForTerritory = territory =>
  territory.squarePositions.length &&
  (territory.imageUUID || territory.copiedImageUUID)

// TODO: move to a lib.
const getImageObjectForTerritory = (territory) => {
  const imagePositions = {
    bottomRight: {
      column: 0,
      row: 0,
    },
    topLeft: {
      column: Infinity,
      row: Infinity,
    },
  }

  territory.squarePositions
    .map(adaptSquarePositionToCoordinates)
    .forEach((squarePosition) => {
      if (squarePosition.column < imagePositions.topLeft.column) {
        imagePositions.topLeft.column = squarePosition.column
      }
      if (squarePosition.row < imagePositions.topLeft.row) {
        imagePositions.topLeft.row = squarePosition.row
      }
      if (squarePosition.row > imagePositions.bottomRight.row) {
        imagePositions.bottomRight.row = squarePosition.row
      }
      if (squarePosition.column > imagePositions.bottomRight.column) {
        imagePositions.bottomRight.column = squarePosition.column
      }
    })
  return imagePositions
}

const territoriesReducer = (state = initialState.territories, action) => {
  switch (action.type) {
    case ADD_SQUARE_POSITIONS_TO_CURRENT: {
      const territory = {
        ...state.current,
        squarePositions: state.current.squarePositions.concat(action.payload),
      }
      if (shouldGetImageObjectForTerritory(territory)) {
        territory.imagePositions = getImageObjectForTerritory(territory)
      }

      return {
        ...state,
        current: territory,
      }
    }
    case ADD_SQUARE_POSITIONS_TO_OTHER: {
      const { userId, squarePositions } = action.payload

      return {
        ...state,
        others: state.others.map((territory) => {
          if (String(territory.userId) !== String(userId)) {
            return territory
          }

          const updatedTerritory = {
            ...territory,
            squarePositions: territory.squarePositions.concat(squarePositions),
          }

          if (shouldGetImageObjectForTerritory(updatedTerritory)) {
            updatedTerritory.imagePositions = getImageObjectForTerritory(
              updatedTerritory
            )
          }

          return updatedTerritory
        }),
      }
    }
    case APPEND_TERRITORY: {
      const territory = action.payload
      if (shouldGetImageObjectForTerritory(territory)) {
        territory.imagePositions = getImageObjectForTerritory(territory)
      }

      return {
        ...state,
        others: state.others.concat(territory),
      }
    }
    // TODO: add tests.
    case SET_CURRENT: {
      const territory = action.payload
      if (shouldGetImageObjectForTerritory(territory)) {
        territory.imagePositions = getImageObjectForTerritory(territory)
      }

      return { ...state, current: territory }
    }
    // TODO: add tests.
    case SET_OTHERS: {
      const territories = action.payload
      territories.forEach((territory) => {
        if (shouldGetImageObjectForTerritory(territory)) {
          territory.imagePositions = getImageObjectForTerritory(territory)
        }
      })

      return { ...state, others: territories }
    }
    case REMOVE_SQUARE_POSITIONS_FROM_CURRENT: {
      const territory = {
        ...state.current,
        squarePositions: without(action.payload, state.current.squarePositions),
      }
      if (shouldGetImageObjectForTerritory(territory)) {
        territory.imagePositions = getImageObjectForTerritory(territory)
      }
      return {
        ...state,
        current: territory,
      }
    }
    case REMOVE_SQUARE_POSITIONS_FROM_OTHER: {
      const { userId, squarePositions } = action.payload

      return {
        ...state,
        others: state.others.map((territory) => {
          if (String(territory.userId) !== String(userId)) {
            return territory
          }
          const updatedTerritory = {
            ...territory,
            squarePositions: without(
              squarePositions,
              territory.squarePositions
            ),
          }

          if (shouldGetImageObjectForTerritory(updatedTerritory)) {
            updatedTerritory.imagePositions = getImageObjectForTerritory(
              updatedTerritory
            )
          }

          return updatedTerritory
        }),
      }
    }
    case UPDATE_CURRENT: {
      const territory = {
        ...state.current,
        ...action.payload,
      }
      if (shouldGetImageObjectForTerritory(territory)) {
        territory.imagePositions = getImageObjectForTerritory(territory)
      }

      return {
        ...state,
        current: territory,
      }
    }
    case UPDATE_OTHER_BY_USER_ID: {
      const { userId, attributes } = action.payload

      return {
        ...state,
        others: state.others.map((territory) => {
          if (String(territory.userId) !== String(userId)) {
            return territory
          }
          const mergedTerritory = {
            ...territory,
            ...attributes,
          }
          if (shouldGetImageObjectForTerritory(mergedTerritory)) {
            mergedTerritory.imagePositions = getImageObjectForTerritory(
              territory
            )
          }

          return mergedTerritory
        }),
      }
    }
    default:
      return state
  }
}

export default territoriesReducer
