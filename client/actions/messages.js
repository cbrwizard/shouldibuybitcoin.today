import {
  FETCH_ALL,
  SEND,
  SET_IS_LOADING,
  SET_MESSAGES,
} from 'client/constants/redux/messages'

/*
 * Is responsible for handling the interaction with messages
 */
export const fetchAll = () => ({
  type: FETCH_ALL,
})

export const send = values => ({
  payload: values,
  type: SEND,
})

export const setMessages = messages => ({
  payload: messages,
  type: SET_MESSAGES,
})

export const setIsLoading = isLoading => ({
  payload: isLoading,
  type: SET_IS_LOADING,
})
