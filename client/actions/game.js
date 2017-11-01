import {
  ADD_SELECTED_SQUARE_POSITION,
  CHANGE_PLANNING_STATE,
  CLEAR_HOVERED_INFO,
  FETCH_GAME_SESSION,
  GAME_RENDERED,
  REMOVE_SELECTED_SQUARE_POSITION,
  RESET_GAME,
  REMOVE_ALL_SELECTED_SQUARES,
  REDUCE_CURRENT_TURNS_LEFT,
  SELECT_SQUARE_POSITION,
  SET_IS_LATEST_DATA_LOADED,
  SET_IS_FETCHING_GAME_SESSION,
  SET_CURRENT_TURNS_LEFT,
  SET_SQUARES_COUNT,
  SET_POSITION_CAMERA_AT_SQUARE_POSITION,
  SET_STARTED,
  SET_SQUARES_TO_CAPTURE_MAX,
  SET_HOVERED_INFO,
} from 'client/constants/redux/game'

/*
 * Is responsible for handling the interaction with a game.
 */
export const changePlanningState = planningState => (
  {
    payload: planningState,
    type: CHANGE_PLANNING_STATE,
  }
)

export const addSelectedSquarePosition = squareId => (
  {
    payload: squareId,
    type: ADD_SELECTED_SQUARE_POSITION,
  }
)

export const gameRendered = () => (
  {
    type: GAME_RENDERED,
  }
)

export const removeSelectedSquarePosition = squarePosition => (
  {
    payload: squarePosition,
    type: REMOVE_SELECTED_SQUARE_POSITION,
  }
)

export const resetGame = () => (
  {
    type: RESET_GAME,
  }
)

export const removeAllSelectedSquares = () => (
  {
    type: REMOVE_ALL_SELECTED_SQUARES,
  }
)

export const selectSquarePosition = squarePosition => (
  {
    payload: squarePosition,
    type: SELECT_SQUARE_POSITION,
  }
)

export const setCurrentTurnsLeft = currentTurnsLeft => (
  {
    payload: currentTurnsLeft,
    type: SET_CURRENT_TURNS_LEFT,
  }
)

export const reduceCurrentTurnsLeft = reduceBy => (
  {
    payload: reduceBy,
    type: REDUCE_CURRENT_TURNS_LEFT,
  }
)

export const setStarted = newStarted => (
  {
    payload: newStarted,
    type: SET_STARTED,
  }
)

// TODO: add tests
export const setSquaresCount = squaresCount => (
  {
    payload: squaresCount,
    type: SET_SQUARES_COUNT,
  }
)

// TODO: add tests
export const setPositionCameraAtSquarePosition = positionCameraAtSquarePosition => (
  {
    payload: positionCameraAtSquarePosition,
    type: SET_POSITION_CAMERA_AT_SQUARE_POSITION,
  }
)

export const setSquaresToCaptureMax = squaresToCaptureMax => (
  {
    payload: squaresToCaptureMax,
    type: SET_SQUARES_TO_CAPTURE_MAX,
  }
)

export const setHoveredSquareInfo = hoveredSquareInfo => (
  {
    meta: {
      throttle: 1000,
    },
    payload: hoveredSquareInfo,
    type: SET_HOVERED_INFO,
  }
)

export const clearHoveredSquareInfo = () => (
  {
    meta: {
      throttle: true,
    },
    type: CLEAR_HOVERED_INFO,
  }
)

export const fetchGameSession = values => (
  {
    payload: values,
    type: FETCH_GAME_SESSION,
  }
)

export const setIsLatestDataLoaded = isLatestDataLoaded => (
  {
    payload: isLatestDataLoaded,
    type: SET_IS_LATEST_DATA_LOADED,
  }
)

export const setIsFetchingGameSession = isFetchingGameSession => (
  {
    payload: isFetchingGameSession,
    type: SET_IS_FETCHING_GAME_SESSION,
  }
)
