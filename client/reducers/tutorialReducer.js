import {
  CHANGE_POSITION,
  INCREASE_STEP,
  RESET_TUTORIAL,
} from 'client/constants/redux/tutorial'
import initialState from 'client/initialState'

// TODO: add a test.
const tutorialReducer = (state = initialState.tutorial, action) => {
  switch (action.type) {
    case CHANGE_POSITION: {
      return {
        ...state,
        position: action.payload,
      }
    }
    case INCREASE_STEP: {
      return {
        ...state,
        position: action.payload,
        step: state.step + 1,
      }
    }
    case RESET_TUTORIAL: {
      return {
        ...state,
        step: 0,
      }
    }
    default:
      return state
  }
}

export default tutorialReducer
