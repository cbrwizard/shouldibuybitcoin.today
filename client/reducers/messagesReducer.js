import { SET_IS_LOADING, SET_MESSAGES } from 'client/constants/redux/messages'
import initialState from 'client/initialState'

const messagesReducer = (state = initialState.messages, action) => {
  switch (action.type) {
    case SET_MESSAGES: {
      return { ...state, records: action.payload }
    }
    case SET_IS_LOADING: {
      return { ...state, isLoading: action.payload }
    }
    default:
      return state
  }
}

export default messagesReducer
