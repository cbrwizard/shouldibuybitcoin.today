import {
  ADD_SQUARE_POSITIONS_TO_CURRENT,
  ADD_SQUARE_POSITIONS_TO_OTHER,
  APPEND_TERRITORY,
  FETCH_CURRENT,
  FETCH_OTHERS,
  REMOVE_SQUARE_POSITIONS_FROM_CURRENT,
  REMOVE_SQUARE_POSITIONS_FROM_OTHER,
  SET_CURRENT,
  SET_OTHERS,
  UPDATE_CURRENT,
  UPDATE_OTHER_BY_USER_ID,
} from 'client/constants/redux/territories'

/*
 * Is responsible for handling the interaction with territories
 */

export const addSquarePositionsToCurrent = squarePositions => ({
  payload: squarePositions,
  type: ADD_SQUARE_POSITIONS_TO_CURRENT,
})

export const addSquarePositionsToOther = (squarePositions, userId) => ({
  payload: { squarePositions, userId },
  type: ADD_SQUARE_POSITIONS_TO_OTHER,
})

export const appendTerritory = territory => ({
  payload: territory,
  type: APPEND_TERRITORY,
})

export const fetchCurrent = () => ({
  type: FETCH_CURRENT,
})

export const fetchOthers = () => ({
  type: FETCH_OTHERS,
})

export const removeSquarePositionsFromCurrent = squarePositions => ({
  payload: squarePositions,
  type: REMOVE_SQUARE_POSITIONS_FROM_CURRENT,
})

export const removeSquarePositionsFromOther = (squarePositions, userId) => ({
  payload: { squarePositions, userId },
  type: REMOVE_SQUARE_POSITIONS_FROM_OTHER,
})

export const setCurrent = territory => ({
  payload: territory,
  type: SET_CURRENT,
})

export const setOthers = territories => ({
  payload: territories,
  type: SET_OTHERS,
})

export const updateCurrent = attributes => ({
  payload: attributes,
  type: UPDATE_CURRENT,
})

export const updateOtherByUserId = (attributes, userId) => ({
  payload: { attributes, userId },
  type: UPDATE_OTHER_BY_USER_ID,
})
