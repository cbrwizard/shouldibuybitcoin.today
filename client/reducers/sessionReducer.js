import {
  CLEAR_USER,
  LOG_OUT,
  SET_IS_LOGGED_IN,
  SET_USER,
} from 'client/constants/redux/sessions'
import initialState from 'client/initialState'

const sessionReducer = (state = initialState.session, action) => {
  switch (action.type) {
    case CLEAR_USER: {
      return { ...state, user: {} }
    }
    case LOG_OUT: {
      return { ...state, isLoggedIn: false, user: {} }
    }
    case SET_IS_LOGGED_IN: {
      return { ...state, isLoggedIn: action.payload }
    }
    case SET_USER: {
      return { ...state, user: action.payload }
    }
    default:
      return state
  }
}

export default sessionReducer
