import initialState from 'client/initialState'
import { OPEN_MODAL, CLOSE_MODAL } from 'client/constants/lib/modals'

const modalsReducer = (state = initialState.modals, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, [action.modalId]: true }
    case CLOSE_MODAL:
      return { ...state, [action.modalId]: false }
    default:
      return state
  }
}

export default modalsReducer
