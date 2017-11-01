import {
  ADD_SELECTED_SQUARE_POSITION,
  CHANGE_PLANNING_STATE,
  CLEAR_HOVERED_INFO,
  REMOVE_ALL_SELECTED_SQUARES,
  REMOVE_SELECTED_SQUARE_POSITION,
  RESET_GAME,
  REDUCE_CURRENT_TURNS_LEFT,
  SET_IS_LATEST_DATA_LOADED,
  SET_IS_FETCHING_GAME_SESSION,
  SET_CURRENT_TURNS_LEFT,
  SET_SQUARES_COUNT,
  SET_POSITION_CAMERA_AT_SQUARE_POSITION,
  SET_STARTED,
  SET_SQUARES_TO_CAPTURE_MAX,
  SET_HOVERED_INFO,
} from 'client/constants/redux/game'
import initialState from 'client/initialState'

const gameReducer = (state = initialState.game, action) => {
  switch (action.type) {
    case CHANGE_PLANNING_STATE: {
      return { ...state, planningState: action.payload }
    }
    case REMOVE_ALL_SELECTED_SQUARES: {
      return {
        ...state,
        selectedSquaresPositions: initialState.game.selectedSquaresPositions,
      }
    }
    case REMOVE_SELECTED_SQUARE_POSITION: {
      return {
        ...state,
        selectedSquaresPositions: state.selectedSquaresPositions.filter(
          id => id !== action.payload
        ),
      }
    }
    case ADD_SELECTED_SQUARE_POSITION: {
      return {
        ...state,
        selectedSquaresPositions: [...state.selectedSquaresPositions, action.payload],
      }
    }
    // TODO: add tests
    case CLEAR_HOVERED_INFO: {
      return { ...state, hoveredSquareInfo: {} }
    }
    case RESET_GAME: {
      return { ...initialState.game }
    }
    case SET_CURRENT_TURNS_LEFT: {
      return { ...state, currentTurnsLeft: action.payload }
    }
    case SET_SQUARES_COUNT: {
      return { ...state, squaresCount: action.payload }
    }
    case SET_POSITION_CAMERA_AT_SQUARE_POSITION: {
      return { ...state, positionCameraAtSquarePosition: action.payload }
    }
    case REDUCE_CURRENT_TURNS_LEFT: {
      return { ...state, currentTurnsLeft: state.currentTurnsLeft - action.payload }
    }
    case SET_STARTED: {
      return { ...state, started: action.payload }
    }
    case SET_IS_LATEST_DATA_LOADED: {
      return { ...state, isLatestDataLoaded: action.payload }
    }
    case SET_IS_FETCHING_GAME_SESSION: {
      return { ...state, isFetchingGameSession: action.payload }
    }
    case SET_SQUARES_TO_CAPTURE_MAX: {
      return { ...state, squaresToCaptureMax: action.payload }
    }
    case SET_HOVERED_INFO: {
      return { ...state, hoveredSquareInfo: action.payload }
    }
    default:
      return state
  }
}

export default gameReducer
