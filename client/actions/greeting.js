import {
  SET_IS_LOADING,
} from 'client/constants/redux/greeting'

/*
 * Is responsible for handling the interaction in a Greeting screen.
 */
export const setIsLoading = isLoading => (
  {
    payload: isLoading,
    type: SET_IS_LOADING,
  }
)
