import {
  SET_IS_LOADING,
} from 'client/constants/redux/greeting'
import initialState from 'client/initialState'

// TODO: add tests.
const greetingReducer = (state = initialState.greeting, action) => {
  switch (action.type) {
    case SET_IS_LOADING: {
      return { ...state, isLoading: action.payload }
    }
    default:
      return state
  }
}

export default greetingReducer
