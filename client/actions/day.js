import {
  FETCH,
  SET_IS_LOADING,
  SET_DAY,
} from 'client/constants/redux/day'

/*
 * Is responsible for handling the interaction with the Day.
 */
export const fetch = () => ({
  type: FETCH,
})

export const setIsLoading = isLoading => (
  {
    payload: isLoading,
    type: SET_IS_LOADING,
  }
)

export const setDay = day => (
  {
    payload: day,
    type: SET_DAY,
  }
)
